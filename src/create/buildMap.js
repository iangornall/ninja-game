let buildMap = (mapKey, scene) => {
  let map = scene.make.tilemap({key: mapKey, tileWidth: 128, tileHeight: 128});
  console.log(map);
  map.tilesets.forEach(tileset => {
    map.addTilesetImage(tileset.name, tileset.name);
  });
  map.staticLayers = {};
  map.layers.forEach(layer => {
    let collisions = layer.properties.find(element => element.name === "collisions").value;
    let tileset = layer.properties.find(element => element.name === "tileset").value;
    let staticLayer = map.createStaticLayer(layer.name, tileset, 0, 0);
    map.staticLayers[layer.name] = staticLayer;
    collisions && staticLayer.setCollisionByProperty({collides: true});
  });
  return map;
}
export default buildMap;