# gh-craft

Github Profile in Craft World, built with [voxel.js](http://voxeljs.com/) and act as PWAs.

# Motivation & Credits

* [voxel-webview #Project#](https://github.com/voxel/voxel-webview/blob/master/webview.js): embed webpages in a voxel.js world using CSS 3D (voxel.js plugin)

* [voxel-modal-dialog #Project#](https://github.com/voxel/voxel-modal-dialog): modal dialog element using voxel-modal (voxel.js addon).

* [voxel-texture #Project#](https://github.com/shama/voxel-texture): Add textures to an atlas and set UV mapping on geometries. Used for texturing in voxel.js.

* [GitHub Contributions Chart Generator](https://github-contributions.now.sh/): All your contributions in one image!

* [My Github Resume](http://resume.github.io/): As a software startup owner I really enjoy when people send us their résumés and they include their github account so we can see tangible work they have done.

# Roadmap

## MileStone V1

* [x] 完成基础场景的修改与构建，模拟 voxel.js 的官方场景，能够显示砖块与草坪
* [ ] 支持渲染文字内容
* [ ] 支持从 Github 抓取数据
* [ ] 能够显示用户名、总的 Star 数目
* [ ] 能够显示所有的仓库，并且能够打开链接
* [ ] 支持导出为本地图片

## MileStone V2

* [ ] 引入 Service Workers，能够缓存本地数据
* [ ] 使用 Web Worker 执行 Contribution HeatMap 计算
* [ ] 能够将热力图显示为 Cube
* [ ] 添加控制面板，使其能够在移动端运行

# Coding Snippets

```js
// texture for item
var material = game.loadTextures(['obsidian']);
var mesh = new game.THREE.Mesh(
  new game.THREE.CubeGeometry(10, 30, 10), // width, height, depth
  material
);

// move item to some location
mesh.translateX(87.5);
mesh.translateY(420);
mesh.translateZ(12.5);

// if these item dimensions don't match the mesh's dimensions,
// the object's physics will not operate correctly.
var item = {
  mesh: mesh,
  width: 10,
  height: 100,
  depth: 10,
  collisionRadius: 20, // padding around object dimensions box for collisions
  velocity: { x: 0, y: 0, z: 0 } // initial velocity
};

game.items.length; // => 0
game.addItem(item);
// use `game.removeItem(item)` to remove
game.items.length; // => 1
```
