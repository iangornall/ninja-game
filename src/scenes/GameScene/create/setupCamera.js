let setupCamera = function(scene) {
  let camera = scene.cameras.main;
  camera.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels);
  scene.physics.world.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels, true, true, true, true);
  camera.startFollow(scene.hero);
}
export default setupCamera;