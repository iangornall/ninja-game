let updateHero = function(cursors, hero) {
  if (cursors.left.isDown){
    hero.setVelocityX(-600);
    hero.flipX = true;    
    hero.body.onFloor() && hero.anims.play('run', true);
  } else if (cursors.right.isDown) {
    hero.setVelocityX(600);
    hero.flipX = false;
    hero.body.onFloor() && hero.anims.play('run', true);
  } else {
    hero.setVelocityX(0);
    hero.body.onFloor() && hero.anims.play('idle', true);
  }
  if (cursors.up.isDown && hero.body.onFloor()) {
    hero.anims.play('jump', true);
    hero.setVelocityY(-2000);
  }
}
export default updateHero;