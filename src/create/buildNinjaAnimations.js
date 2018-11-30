let buildNinjaAnimations = function(scene) {
  scene.anims.create({
    key: 'run',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Run__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'idle',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Idle__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  scene.anims.create({
    key: 'jump',
    frames: scene.anims.generateFrameNames('ninja', {
      prefix: 'Jump__',
      start: 0, end: 9, zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
}
export default buildNinjaAnimations;