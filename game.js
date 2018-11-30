let rectangle2;
//let hero;
let cursors;
let shurikens;
let enemy1Path;
let enemy;
let mapData = {
  tilesets: ['tiles', 'objects'],
  layers: [
    {
      layer: 'background',
      tileset: 'tiles'
    },
    {
      layer: 'doors',
      tileset: 'objects'
    },
    {
      layer: 'between',
      tileset: 'objects'
    },
    {
      layer: 'main',
      tileset: 'tileset'
    },
    {
      layer: 'main2',
      tileset: 'objects'
    }
  ]
}
let buildMap = function(mapData, scene) {
  let map = scene.make.tilemap({key: 'map1', tileWidth: 128, tileHeight: 128});
  mapData.tilesets.forEach(tileset => {
    map.addTilesetImage(tileset, tileset);
  });
  mapData.layers.forEach(layer => {
    map.createStaticLayer(layer, tileset, 0, 0);
  })
}
let buildHero = function(map, scene) {
  let spawnPoint = map.findObject("objects", obj => obj.name === "spawn");
  let hero = scene.physics.add.sprite(spawnPoint.x, spawnPoint.y, 'ninja');
  hero.setScale(0.3);
  hero.setBounce(0.2);
  return hero;
}
let preload = function() {
  this.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  this.load.atlas('zombieGirl', 'assets/zombie-girl.png', 'assets/zombie-girl.json');
  this.load.atlas('zombieBoy', 'assets/zombie-boy.png', 'assets/zombie-boy.json');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('tileset', 'assets/tileset.png');
  this.load.image('objects', 'assets/objects.png');
  this.load.tilemapTiledJSON('map1', 'assets/level1.json');
}
let create = function() {
  // this.map = buildMap('map1', this)
  map = this.make.tilemap({key: 'map1', tileWidth: 128, tileHeight: 128});
  console.log(map);
  let tileset = map.addTilesetImage('tiles', 'tileset');
  let objects = map.addTilesetImage('objects', 'objects');
  let backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);
  let doorsLayer = map.createStaticLayer('doors', objects, 0, 0);
  let betweenLayer = map.createStaticLayer('between', objects, 0, 0);
  let mainLayer = map.createStaticLayer('main', tileset, 0, 0);
  let mainLayer2 = map.createStaticLayer('main2', objects, 0, 0);
  mainLayer.setCollisionByProperty({collides: true});
  mainLayer2.setCollisionByProperty({collides: true});
  this.hero = buildHero(map, this);
  enemy1Path = map.findObject("objects", obj => obj.name === "enemy1");
  enemy = this.physics.add.sprite(enemy1Path.x + enemy1Path.width, enemy1Path.y, 'zombieGirl');
  enemy.y -= enemy.height
  let camera = this.cameras.main;
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true, true, true, true);
  camera.startFollow(this.hero);
  this.physics.add.collider(this.hero, mainLayer);
  this.physics.add.collider(this.hero, mainLayer2);
  this.hero.setCollideWorldBounds(true);
  this.physics.add.collider(enemy, mainLayer);
  this.physics.add.collider(enemy, mainLayer2);
  enemy.setCollideWorldBounds(true);
  this.physics.add.collider(enemy, this.hero);
  this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNames('ninja', {
      prefix: 'Run__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNames('ninja', {
      prefix: 'Idle__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNames('ninja', {
      prefix: 'Jump__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'zombieGirlWalk',
    frames: this.anims.generateFrameNames('zombieGirl', {
      prefix: 'Walk',
      start: 1, end: 10, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'zombieGirlAttack',
    frames: this.anims.generateFrameNames('zombieGirl', {
      prefix: 'Attack',
      start: 1, end: 8, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'zombieGirlDead',
    frames: this.anims.generateFrameNames('zombieGirl', {
      prefix: 'Dead',
      start: 1, end: 12, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  cursors = this.input.keyboard.createCursorKeys();
  enemy.setSize(enemy.width / 1.5, enemy.height / 1.05);
  enemy.setOffset(enemy.body.offset.x, enemy.body.offset.y + enemy.height / 20);
  enemy.setVelocityX(-200);
  enemy.anims.play('zombieGirlWalk', true);
  enemy.flipX = true;
  enemy.hp = 5;
  console.log(enemy.x, enemy.width, enemy1Path.x, enemy1Path.width);
}

let hitEnemy = function(enemy, shuriken) {
  return function(){
    enemy.hp -= 1;
    if (enemy.hp <= 0) {
      enemy.disableBody(true, true);
    }
    shuriken.disableBody(true, true);
  }
}
let update = function() {
  if (enemy.x <= enemy1Path.x) {
    enemy.setVelocityX(200);
    enemy.flipX = false;
  }
  if (enemy.x >= enemy1Path.x + enemy1Path.width) {
    enemy.setVelocityX(-200);
    enemy.flipX = true;
  }
  if (cursors.left.isDown){
    this.hero.setVelocityX(-600);
    this.hero.flipX = true;    
    this.hero.body.onFloor() && this.hero.anims.play('run', true);
  } else if (cursors.right.isDown) {
    this.hero.setVelocityX(600);
    this.hero.flipX = false;
    this.hero.body.onFloor() && this.hero.anims.play('run', true);
  } else {
    this.hero.setVelocityX(0);
    this.hero.body.onFloor() && this.hero.anims.play('idle', true);
  }
  if (cursors.up.isDown && this.hero.body.onFloor()) {
    this.hero.anims.play('jump', true);
    this.hero.setVelocityY(-2000);
  }
  if (Phaser.Input.Keyboard.JustDown(cursors.space))  {
    console.log(this.hero);
    let shuriken = this.physics.add.sprite(this.hero.flipX ? this.hero.x - 50 : this.hero.x + 50 / 2, this.hero.y, 'shuriken');
    this.physics.add.collider(enemy, shuriken, hitEnemy(enemy, shuriken), null, this);
    shuriken.setScale(0.05);
    shuriken.body.setAllowGravity(false);
    this.hero.flipX ? shuriken.setVelocityX(-1000) : shuriken.setVelocityX(1000);
  }
  //if (shuriken.x 
}
let config = {
  type: Phaser.AUTO,
  width: 1366,
  height: 768,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 3000 },
        debug: false,
        overlapBias: 16,
        tileBias: 64
    }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let game = new Phaser.Game(config);
