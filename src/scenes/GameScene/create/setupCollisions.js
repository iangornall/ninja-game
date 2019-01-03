let setupCollisions = function(scene) {
  scene.physics.add.collider(scene.blocksGroup, scene.blocksGroup);
  scene.physics.add.collider(scene.blocksGroup, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.blocksGroup, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.hero, scene.map.staticLayers.death, () => scene.scene.restart());
  scene.physics.add.collider(scene.hero, scene.blocksGroup);
  scene.physics.add.collider(scene.enemies, scene.map.staticLayers.main);
  scene.physics.add.collider(scene.enemies, scene.map.staticLayers.main2);
  scene.physics.add.collider(scene.enemies, scene.hero, () => scene.scene.restart());
}
export default setupCollisions;