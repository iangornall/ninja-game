let buildZombieGirlAnimations = function(scene) {
  scene.anims.create({
    key: 'zombieGirlWalk',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Walk',
      start: 1, end: 10, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'zombieGirlAttack',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Attack',
      start: 1, end: 8, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'zombieGirlDead',
    frames: scene.anims.generateFrameNames('zombieGirl', {
      prefix: 'Dead',
      start: 1, end: 12, zeroPad: 2
    }),
    frameRate: 10,
    repeat: -1
  });
}
export default buildZombieGirlAnimations;