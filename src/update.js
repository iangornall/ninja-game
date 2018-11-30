import updateEnemy from './update/updateEnemy';
import updateHero from './update/updateHero';
import updateShuriken from './update/updateShuriken';

let update = function() {
  updateEnemy(this.enemy);
  updateHero(this.cursors, this.hero);
  updateShuriken(this);
}
export default update;