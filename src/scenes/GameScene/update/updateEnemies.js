let updateEnemies = function(enemies) {
  enemies.children.iterate(enemy => {
    if (enemy.x <= enemy.path.x) {
      enemy.setVelocityX(200);
      enemy.flipX = false;
    }
    if (enemy.x >= enemy.path.x + enemy.path.width) {
      enemy.setVelocityX(-200);
      enemy.flipX = true;
    }
  });
}
export default updateEnemies;