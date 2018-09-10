var tic = require('tic')();
var createGame = require('voxel-engine');

var game = createGame({
  chunkDistance: 2,
  generate: function(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z) > 20 || y * y > 10
      ? 0
      : Math.random() * 3 + 1;
  },
  materials: ['brick', ['grass', 'dirt', 'grass_dirt'], 'dirt'],
  texturePath: 'textures/'
});
var container = document.getElementById('container');
game.appendTo(container);

game.addStats();

// Our texture builder
var materialEngine = game.materials;

function ext(name) {
  return String(name).indexOf('.') !== -1 ? name : name + '.png';
}

var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
debugger;
bitmap.width = 256;
bitmap.height = 256;
g.font = 'Bold 99px Arial';

var text = '少';

g.fillStyle = 'black';
g.fillText(text, bitmap.width / 2, bitmap.height / 2);

materialEngine.pack = function(name, done) {
  var self = this;
  function pack(img) {
    var node = self.atlas.pack(img);
    if (node === false) {
      self.atlas = self.atlas.expand(img);
      self.atlas.tilepad = true;
    }
    done();
  }
  if (typeof name === 'string') {
    var img = new Image();
    img.id = name;
    img.crossOrigin = self.options.crossOrigin;
    // img.src = self.texturePath + ext(name);
    img.src = bitmap.toDataURL();
    img.onload = function() {
      //   if (isTransparent(img)) {
      //     self.transparents.push(name);
      //   }
      pack(img);
    };
    img.onerror = function() {
      console.error("Couldn't load URL [" + img.src + ']');
      done();
    };
  } else {
    pack(name);
  }
  return self;
};

// Give console access to game
window.game = game;

// hold the cubes we create
var cubes = [];

// create a player
var createPlayer = require('voxel-player')(game);
var shama = createPlayer('textures/shama.png');
shama.yaw.position.set(0, 10, 0);
shama.possess();

// explode voxel on click
var explode = require('voxel-debris')(game, { power: 1.5 });
game.on('fire', function(pos) {
  var pos = game.raycast(game.cameraPosition(), game.cameraVector(), 100).voxel;
  if (erase) explode(pos);
  else game.createBlock(pos, 1);
});

window.addEventListener('keydown', ctrlToggle);
window.addEventListener('keyup', ctrlToggle);

var erase = true;
function ctrlToggle(ev) {
  erase = !ev.ctrlKey;
}

game.on('tick', function(dt) {
  materialEngine.tick(dt);
  tic.tick(dt);
  cubes.forEach(function(cube, i) {
    cube.rotation.y += Math.PI / 180;
  });
});

function createCube(i, materials) {
  // create a mesh
  var obj = new game.THREE.Object3D();
  var mesh = new game.THREE.Mesh(
    new game.THREE.CubeGeometry(game.cubeSize, game.cubeSize, game.cubeSize),
    game.materials.material
  );
  mesh.translateY(game.cubeSize / 2);
  obj.add(mesh);
  obj.position.set(3, 5, i * 2);

  // paint the mesh
  materialEngine.paint(mesh, materials);
  mesh.geometry.uvsNeedUpdate = true;

  // create a rotating jumping cube
  var cube = game.addItem({
    mesh: obj,
    size: game.cubeSize,
    velocity: { x: 0, y: 0, z: 0 }
  });

  tic.interval(function() {
    cube.velocity.y += 0.03;
  }, i * 200 + 2000);

  cubes.push(cube);
  return cube;
}

// load materials
var materials = [
  ['0'],
  ['0', '1'],
  ['0', '1', '2'],
  ['0', '1', '2', '3'],
  ['0', '1', '2', '3', '4', '5'],
  {
    top: 'grass',
    bottom: 'dirt',
    front: 'grass_dirt',
    back: 'grass_dirt',
    left: 'grass_dirt',
    right: 'grass_dirt'
  }
];
materialEngine.load(materials, function() {
  for (var i = 0; i < materials.length; i++) {
    createCube(i, materials[i]);
  }
});
