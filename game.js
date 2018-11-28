let rectangle2;
let hero;
let cursors;
let shurikens;
let preload = function() {
  this.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('tileset', 'assets/tileset.png');
  this.load.image('objects', 'assets/objects.png');
  this.load.tilemapTiledJSON('map1', 'assets/level1.json');
}
let create = function() {
  let map = this.make.tilemap({key: 'map1', tileWidth: 128, tileHeight: 128});
  let tileset = map.addTilesetImage('tiles', 'tileset');
  let objects = map.addTilesetImage('objects', 'objects');
  let backgroundLayer = map.createStaticLayer('background', tileset, 0, 0);
  let doorsLayer = map.createStaticLayer('doors', objects, 0, 0);
  let betweenLayer = map.createStaticLayer('between', objects, 0, 0);
  let mainLayer = map.createStaticLayer('main', tileset, 0, 0);
  let mainLayer2 = map.createStaticLayer('main2', objects, 0, 0);
  mainLayer.setCollisionByProperty({collides: true});
  mainLayer2.setCollisionByProperty({collides: true});
  hero = this.physics.add.sprite(100, 100, 'ninja');
  hero.setScale(0.3);
  hero.setBounce(0.2);
  let camera = this.cameras.main;
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true, true, true, true);
  camera.startFollow(hero);
  this.physics.add.collider(hero, mainLayer);
  this.physics.add.collider(hero, mainLayer2);
  hero.setCollideWorldBounds(true);
  console.log(map.widthInPixels, map.heightInPixels);
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
    key: 'throw',
  })
  cursors = this.input.keyboard.createCursorKeys();
}
let update = function() {
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
  if (Phaser.Input.Keyboard.JustDown(cursors.space))  {
    console.log(hero);

    let shuriken = this.physics.add.sprite(hero.flipX ? hero.x - 50 : hero.x + 50 / 2, hero.y, 'shuriken');
    shuriken.setScale(0.05);
    shuriken.body.setAllowGravity(false);
    hero.flipX ? shuriken.setVelocityX(-1000) : shuriken.setVelocityX(1000);
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
