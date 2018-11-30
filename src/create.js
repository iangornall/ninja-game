import buildMap from './create/buildMap';
import buildNinjaAnimations from './create/buildNinjaAnimations';
import buildZombieGirlAnimations from './create/buildZombieGirlAnimations';
import buildHero from './create/buildHero';
import buildEnemy from './create/buildEnemy';
import setupCamera from './create/setupCamera';
import setupCollisions from './create/setupCollisions';

let create = function() {
  this.map = buildMap('map1', this);
  buildNinjaAnimations(this);
  buildZombieGirlAnimations(this);
  this.hero = buildHero(this);
  this.enemy = buildEnemy('enemy1', this);
  setupCamera(this);
  setupCollisions(this);
  this.cursors = this.input.keyboard.createCursorKeys();
}
export default create;