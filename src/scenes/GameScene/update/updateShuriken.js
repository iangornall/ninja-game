import 'phaser';
import hitEnemy from './hitEnemy';
let updateShuriken = function(scene) {
  if (Phaser.Input.Keyboard.JustDown(scene.cursors.space))  {
    let shuriken = scene.physics.add.sprite(scene.hero.flipX ? scene.hero.x - 50 : scene.hero.x + 50 / 2, scene.hero.y, 'shuriken');
    scene.physics.add.collider(scene.enemy, shuriken, hitEnemy(scene.enemy, shuriken), null, scene);
    shuriken.setScale(0.05);
    shuriken.body.setAllowGravity(false);
    scene.hero.flipX ? shuriken.setVelocityX(-1000) : shuriken.setVelocityX(1000);
  }
}
export default updateShuriken;