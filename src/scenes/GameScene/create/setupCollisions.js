let setupCollisions = function(scene) {
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.enemies, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.enemies, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.enemies, scene.hero);
}
export default setupCollisions;