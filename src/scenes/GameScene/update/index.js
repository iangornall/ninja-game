import updateEnemies from './updateEnemies';
import updateHero from './updateHero';
import updateShuriken from './updateShuriken';

let update = function(scene) {
  updateEnemies(scene.enemies);
  updateHero(scene.cursors, scene.hero);
  updateShuriken(scene);
}
export default update;