const urls = {
  'awesome-links': 'https://github.com/wxyyxc1992/Awesome-Links',
  'awesome-coder': 'https://github.com/wxyyxc1992/Awesome-Coder',
  'awesome-cheatsheet': 'https://github.com/wxyyxc1992/Awesome-CheatSheet'
};

const slides = Object.keys(urls);

/** 初始化游戏 */
const game = require('voxel-hello-world')({
  texturePath: './textures/',
  playerSkin: './textures/player.png',
  materials: ['yellow']
    .concat(slides)
    .concat(['王', '下', '邀', '月', '熊', 'fire']),
  materialFlatColor: false,
  generateVoxelChunks: false,
  chunkDistance: 1
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
  window.location.href = url;
});

game.interact.on('release', function() {
  game.paused = true;
});
game.interact.on('attain', function() {
  game.paused = false;
});

window.game = game;
