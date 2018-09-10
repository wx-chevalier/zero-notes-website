const WebView = require('./src/plugins/DialogWebView');

const urls = {
  'awesome-links': 'https://github.com/wxyyxc1992/Awesome-Links',
  'awesome-coder': 'https://github.com/wxyyxc1992/Awesome-Coder',
  'awesome-cheatsheet': 'https://github.com/wxyyxc1992/Awesome-CheatSheet'
};

const slides = Object.keys(urls);

/** 初始化游戏 */
const { game, player, walk } = require('./src/world/BasicWorld')({
  texturePath: './textures/',
  playerSkin: './textures/player.png',
  materials: [['grass', 'brick']]
    .concat(slides)
    .concat(['王', '下', '邀', '月', '熊', 'fire']),
  materialFlatColor: false,
  generateVoxelChunks: false,
  chunkDistance: 1
});

player.toggle();

const webView = new WebView(game, {
  url: 'https://github.com/wxyyxc1992/xCompass/tree/master/x-home/gh-craft',
  contents: [document.querySelector('#ifr')]
});

/** 初始化设置块 */
game.setBlock([-6, 10, -10], 'fire');
game.setBlock([-4, 10, -10], '王');
game.setBlock([-2, 10, -10], '下');
game.setBlock([-0, 10, -10], '邀');
game.setBlock([2, 10, -10], '月');
game.setBlock([4, 10, -10], '熊');
game.setBlock([6, 10, -10], 'fire');

let z = -2;
let y = 3;

slides.map(function(slide) {
  game.setBlock([z, y, -4], slide);
  z += 2;
  if (z > 5) {
    z = -5;
    y += 2;
  }
});

/** 设置块的消除回调 */
game.on('setBlock', function(pos, val, old) {
  if (old === 1 || val === 1) return;
  var url = urls[slides[old - 2]];
  // var win = window.open(url);
  // window.location.href = url;
  webView.open();
});

game.interact.on('release', function() {
  game.paused = true;
});
game.interact.on('attain', function() {
  game.paused = false;
});

//create image
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
bitmap.width = 512;
bitmap.height = 512;
g.font = 'Bold 20px Arial';

var text = '少时诵诗书所所所所所所所所';

// g.fillStyle = 'black';
// g.fillText(text, 0, 20);
g.fillStyle = 'black';
g.fillText(text, bitmap.width / 2, bitmap.height / 2);

// canvas contents will be used for a texture
var texture = new game.THREE.Texture(bitmap);
texture.needsUpdate = true;

// immediately use the texture for material creation
var material = new game.THREE.MeshFaceMaterial({ map: texture });

console.log(game.setBlock([6, 10, -11], material));

var mesh = new game.THREE.Mesh(
  new game.THREE.CubeGeometry(game.cubeSize, game.cubeSize, game.cubeSize), // width, height, depth
  [material, material, material, material, material, material]
);

// move item to some location
// mesh.translateX(87.5);
// mesh.translateY(420);
// mesh.translateZ(12.5);

// if these item dimensions don't match the mesh's dimensions,
// the object's physics will not operate correctly.
var item = {
  mesh: mesh
  // width: 1,
  // height: 1,
  // depth: 1,
  // collisionRadius: 20, // padding around object dimensions box for collisions
  // velocity: { x: 0, y: 0, z: 0 } // initial velocity
};

console.log(game.items.length);
setTimeout(() => {
  game.addItem(item);
}, 1000);
// use `game.removeItem(item)` to remove
game.items.length; // => 1

var materialEngine = game.materials;

createCube(0, [material]);

window.game = game;
