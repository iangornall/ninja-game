let buildEnemy = function(name, scene) {
  let enemy = {};
  let path = scene.map.findObject("objects", obj => obj.name === name);
  enemy = scene.physics.add.sprite(path.x + path.width, path.y, 'zombieGirl');
  enemy.y -= enemy.height
  enemy.path = path;
  enemy.setCollideWorldBounds(true);
  enemy.setSize(enemy.width / 1.5, enemy.height / 1.05);
  enemy.setOffset(enemy.body.offset.x, enemy.body.offset.y + enemy.height / 20);
  enemy.setVelocityX(-200);
  enemy.anims.play('zombieGirlWalk', true);
  enemy.flipX = true;
  enemy.hp = 5;
  return enemy;
}
export default buildEnemy;