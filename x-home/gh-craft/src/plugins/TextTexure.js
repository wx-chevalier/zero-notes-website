//create image
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
bitmap.width = 100;
bitmap.height = 100;
g.font = 'Bold 20px Arial';

g.fillStyle = 'white';
g.fillText(text, 0, 20);
g.strokeStyle = 'black';
g.strokeText(text, 0, 20);

// canvas contents will be used for a texture
var texture = new THREE.Texture(bitmap);
texture.needsUpdate = true;

var texture = new THREE.TextureLoader().load(
  'textures/land_ocean_ice_cloud_2048.jpg'
);

// immediately use the texture for material creation
var material = new THREE.MeshBasicMaterial({ map: texture });
