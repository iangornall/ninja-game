import updateEnemies from './update/updateEnemies';
import updateHero from './update/updateHero';
import updateShuriken from './update/updateShuriken';

let update = function(scene) {
  updateEnemies(scene.enemies);
  updateHero(scene.cursors, scene.hero);
  updateShuriken(scene);
}
export default update;