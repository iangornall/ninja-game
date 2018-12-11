import buildMap from './buildMap';
import buildNinjaAnimations from './buildNinjaAnimations';
import buildZombieGirlAnimations from './buildZombieGirlAnimations';
import buildHero from './buildHero';
import buildEnemy from './buildEnemy';
import setupCamera from './setupCamera';
import setupCollisions from './setupCollisions';

let create = function(scene) {
  scene.map = buildMap('map1', scene);
  buildNinjaAnimations(scene);
  buildZombieGirlAnimations(scene);
  scene.hero = buildHero(scene);
  scene.shurikens = scene.add.group();
  scene.enemies = scene.add.group();
  for(let i = 0; i < 3; i++){
    scene.enemies.add(buildEnemy('enemy' + (i+1), scene))
  }
  //scene.enemy = buildEnemy('enemy1', scene);
  setupCamera(scene);
  setupCollisions(scene);
  scene.cursors = scene.input.keyboard.createCursorKeys();
}
export default create;