let loadAssets = (scene) => {
  scene.load.audio('level1Music', 'assets/video-game-land.mp3');
  scene.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  scene.load.atlas('zombieGirl', 'assets/zombie-girl.png', 'assets/zombie-girl.json');
  scene.load.atlas('zombieBoy', 'assets/zombie-boy.png', 'assets/zombie-boy.json');
  scene.load.image('shuriken', 'assets/shuriken.png');
  scene.load.image('tiles', 'assets/tileset.png');
  scene.load.image('objects', 'assets/objects.png');
  scene.load.tilemapTiledJSON('map1', 'assets/level1.json');
  scene.load.audio('dyingSound', 'assets/dying.wav');
  scene.load.audio('jumpSound', 'assets/jump.wav');
  scene.load.audio('throwSound', 'assets/whoosh.wav');
}
export default loadAssets;