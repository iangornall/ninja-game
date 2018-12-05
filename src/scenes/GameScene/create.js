import buildMap from './create/buildMap';
import buildNinjaAnimations from './create/buildNinjaAnimations';
import buildZombieGirlAnimations from './create/buildZombieGirlAnimations';
import buildHero from './create/buildHero';
import buildEnemy from './create/buildEnemy';
import setupCamera from './create/setupCamera';
import setupCollisions from './create/setupCollisions';

let create = function(scene) {
  scene.map = buildMap('map1', scene);
  buildNinjaAnimations(scene);
  buildZombieGirlAnimations(scene);
  scene.hero = buildHero(scene);
  scene.enemies = [];
  for(let i = 0; i < 3; i++){
    scene.enemies.push(buildEnemy('enemy' + (i+1), scene))
  }
  //scene.enemy = buildEnemy('enemy1', scene);
  setupCamera(scene);
  setupCollisions(scene);
  scene.cursors = scene.input.keyboard.createCursorKeys();
}
export default create;