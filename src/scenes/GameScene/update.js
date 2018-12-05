import updateEnemy from './update/updateEnemy';
import updateHero from './update/updateHero';
import updateShuriken from './update/updateShuriken';

let update = function(scene) {
  scene.enemies.forEach(enemy => {
    updateEnemy(enemy);
  });
  updateHero(scene.cursors, scene.hero);
  updateShuriken(scene);
}
export default update;