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

window.game = game;

function simulateKeyEvent(character) {
  var evt = document.createEvent('KeyboardEvent');
  (evt.initKeyEvent || evt.initKeyboardEvent)(
    'keypress',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    character.charCodeAt(0)
  );
  var canceled = !document.body.dispatchEvent(evt);
  if (canceled) {
    // A handler called preventDefault
    alert('canceled');
  } else {
    // None of the handlers called preventDefault
    alert('not canceled');
  }
}

document.querySelector('#controlPanel').addEventListener('click', () => {
  window.requestAnimationFrame(() => {
    walk.startWalking();
  });
});
