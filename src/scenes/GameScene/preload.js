let preload = function(scene) {
  scene.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  scene.load.atlas('zombieGirl', 'assets/zombie-girl.png', 'assets/zombie-girl.json');
  scene.load.atlas('zombieBoy', 'assets/zombie-boy.png', 'assets/zombie-boy.json');
  scene.load.image('shuriken', 'assets/shuriken.png');
  scene.load.image('tiles', 'assets/tileset.png');
  scene.load.image('objects', 'assets/objects.png');
  scene.load.tilemapTiledJSON('map1', 'assets/level1.json');
}
export default preload;