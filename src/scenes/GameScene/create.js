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
  scene.enemy = buildEnemy('enemy1', scene);
  setupCamera(scene);
  setupCollisions(scene);
  scene.cursors = scene.input.keyboard.createCursorKeys();
}
export default create;