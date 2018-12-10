let buildHero = function(scene) {
  let spawnPoint = scene.map.findObject("objects", obj => obj.name === "spawn");
  let hero = scene.physics.add.sprite(spawnPoint.x, spawnPoint.y, 'ninja');
  hero.setScale(0.3);
  hero.setBounce(0.2);
  hero.setCollideWorldBounds(true);
  hero.jumpSound = scene.sound.add('jumpSound');
  hero.throwSound = scene.sound.add('throwSound');
  return hero;
}
export default buildHero;