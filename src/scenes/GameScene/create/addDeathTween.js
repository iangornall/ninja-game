let addDeathTween = (target, scene) => {
  target.deathTween = scene.tweens.add({
    targets: target,
    scaleX: 5,
    scaleY: 5,
    alpha: 0,
    duration: 300,
    paused: true,
    onStart: () => {
      target.disableBody(true);
    },
    onComplete: () => {
      target.disableBody(true, true);
    },
  });
}
export default addDeathTween;