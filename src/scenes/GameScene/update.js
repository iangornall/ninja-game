import updateEnemy from './update/updateEnemy';
import updateHero from './update/updateHero';
import updateShuriken from './update/updateShuriken';

let update = function(scene) {
  updateEnemy(scene.enemy);
  updateHero(scene.cursors, scene.hero);
  updateShuriken(scene);
}
export default update;