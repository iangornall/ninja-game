let buildMap = function(mapKey, scene) {
  let map = scene.make.tilemap({key: mapKey, tileWidth: 128, tileHeight: 128});
  console.log(map);
  map.tilesets.forEach(tileset => {
    map.addTilesetImage(tileset.name, tileset.name);
  });
  map.staticLayers = {};
  map.layers.forEach(layer => {
    let collisions = layer.properties.find(element => element.name === "collisions").value;
    let tileset = layer.properties.find(element => element.name === "tileset").value;
    let staticLayer = map.createStaticLayer(layer.name, tileset, 0, 0);
    map.staticLayers[layer.name] = staticLayer;
    collisions && staticLayer.setCollisionByProperty({collides: true});
  });
  return map;
}
let buildNinjaAnimations = function(scene) {
  scene.anims.create({
    key: 'run',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Run__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'idle',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Idle__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'jump',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Jump__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
}
let buildZombieGirlAnimations = function(scene) {
  scene.anims.create({
    key: 'zombieGirlWalk',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Walk',
      start: 1, end: 10, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'zombieGirlAttack',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Attack',
      start: 1, end: 8, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'zombieGirlDead',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Dead',
      start: 1, end: 12, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
}
let buildHero = function(scene) {
  let spawnPoint = scene.map.findObject("objects", obj => obj.name === "spawn");
  let hero = scene.physics.add.sprite(spawnPoint.x, spawnPoint.y, 'ninja');
  hero.setScale(0.3);
  hero.setBounce(0.2);
  hero.setCollideWorldBounds(true);
  return hero;
}
let buildEnemy = function(name, scene) {
  let enemy = {};
  let path = scene.map.findObject("objects", obj => obj.name === name);
  enemy = scene.physics.add.sprite(path.x + path.width, path.y, 'zombieGirl');
  enemy.y -= enemy.height
  enemy.path = path;
  enemy.setCollideWorldBounds(true);
  enemy.setSize(enemy.width / 1.5, enemy.height / 1.05);
  enemy.setOffset(enemy.body.offset.x, enemy.body.offset.y + enemy.height / 20);
  enemy.setVelocityX(-200);
  enemy.anims.play('zombieGirlWalk', true);
  enemy.flipX = true;
  enemy.hp = 5;
  return enemy;
}
let setUpCamera = function(scene) {
  let camera = scene.cameras.main;
  camera.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels);
  scene.physics.world.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels, true, true, true, true);
  camera.startFollow(scene.hero);
}
let setUpCollisions = function(scene) {
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.enemy, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.enemy, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.enemy, scene.hero);
}
let preload = function() {
  this.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  this.load.atlas('zombieGirl', 'assets/zombie-girl.png', 'assets/zombie-girl.json');
  this.load.atlas('zombieBoy', 'assets/zombie-boy.png', 'assets/zombie-boy.json');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('tiles', 'assets/tileset.png');
  this.load.image('objects', 'assets/objects.png');
  this.load.tilemapTiledJSON('map1', 'assets/level1.json');
}
let create = function() {
  this.map = buildMap('map1', this);
  buildNinjaAnimations(this);
  buildZombieGirlAnimations(this);
  this.hero = buildHero(this);
  this.enemy = buildEnemy('enemy1', this);
  console.log(this.enemy.path, this.enemy.hp);
  setUpCamera(this);
  setUpCollisions(this);
  this.cursors = this.input.keyboard.createCursorKeys();
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
let updateEnemy = function(enemy) {
  if (enemy.x <= enemy.path.x) {
    enemy.setVelocityX(200);
    enemy.flipX = false;
  }
  if (enemy.x >= enemy.path.x + enemy.path.width) {
    enemy.setVelocityX(-200);
    enemy.flipX = true;
  }
}
let updateHero = function(cursors, hero) {
  if (cursors.left.isDown){
    hero.setVelocityX(-600);
    hero.flipX = true;    
    hero.body.onFloor() && hero.anims.play('run', true);
  } else if (cursors.right.isDown) {
    hero.setVelocityX(600);
    hero.flipX = false;
    hero.body.onFloor() && hero.anims.play('run', true);
  } else {
    hero.setVelocityX(0);
    hero.body.onFloor() && hero.anims.play('idle', true);
  }
  if (cursors.up.isDown && hero.body.onFloor()) {
    hero.anims.play('jump', true);
    hero.setVelocityY(-2000);
  }
}
let updateShuriken = function(scene) {
  if (Phaser.Input.Keyboard.JustDown(scene.cursors.space))  {
    let shuriken = scene.physics.add.sprite(scene.hero.flipX ? scene.hero.x - 50 : scene.hero.x + 50 / 2, scene.hero.y, 'shuriken');
    scene.physics.add.collider(scene.enemy, shuriken, hitEnemy(scene.enemy, shuriken), null, scene);
    shuriken.setScale(0.05);
    shuriken.body.setAllowGravity(false);
    scene.hero.flipX ? shuriken.setVelocityX(-1000) : shuriken.setVelocityX(1000);
  }
}
let update = function() {
  updateEnemy(this.enemy);
  updateHero(this.cursors, this.hero);
  updateShuriken(this);
  
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