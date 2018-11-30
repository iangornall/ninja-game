let preload = function() {
  this.load.atlas('ninja', 'assets/ninja.png', 'assets/ninja-array.json');
  this.load.atlas('zombieGirl', 'assets/zombie-girl.png', 'assets/zombie-girl.json');
  this.load.atlas('zombieBoy', 'assets/zombie-boy.png', 'assets/zombie-boy.json');
  this.load.image('shuriken', 'assets/shuriken.png');
  this.load.image('tiles', 'assets/tileset.png');
  this.load.image('objects', 'assets/objects.png');
  this.load.tilemapTiledJSON('map1', 'assets/level1.json');
}
export default preload;