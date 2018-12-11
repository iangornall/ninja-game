let hitEnemy = function(enemy, shuriken) {
  return function(){
    enemy.hp -= 1;
    if (enemy.hp <= 0) {
      enemy.deathTween.restart();
    }
    shuriken.disableBody(true, true);
    enemy.dyingSound.play();
  }
}
export default hitEnemy;