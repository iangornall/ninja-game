let buildMap = (mapKey, scene) => {
  let map = scene.make.tilemap({key: mapKey, tileWidth: 128, tileHeight: 128});
  map.tilesets.forEach(tileset => {
    map.addTilesetImage(tileset.name, tileset.name);
  });
  map.staticLayers = {};
  map.layers.forEach(layer => {
    console.log(layer);
    let collisions = layer.properties.find(element => element.name === "collisions").value;
    let tileset = layer.properties.find(element => element.name === "tileset").value;
    let staticLayer = map.createStaticLayer(layer.name, tileset, 0, 0);
    map.staticLayers[layer.name] = staticLayer;
    collisions && staticLayer.setCollisionByProperty({collides: true});
  });
  scene.blocks = map.createFromObjects('objects', 'block', {key: 'block'});
  scene.blocksGroup = scene.physics.add.group();
  scene.blocks.forEach(block => scene.blocksGroup.add(block));
  scene.physics.world.enable(scene.blocksGroup);

  scene.blocksGroup.children.iterate(block => {
    block.body.setDrag(0.75, 0);
    block.body.useDamping = true;
  });
  // console.log(scene.blocksGroup);
  // scene.blocksGroup.setMass()
  return map;
}
export default buildMap;