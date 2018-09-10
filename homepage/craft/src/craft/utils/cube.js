/*
 * @file Cube 辅助函数
 * @description 
 * 
 * @author 王下邀月熊 <384924552@qq.com>
 * 
 * Created Date: Sat, 2018-05-26 15:14:35
 * 
 * Last Modified: Sat, 2018-05-26 15:20:37
 * Last Modified By: 王下邀月熊 <384924552@qq.com>
 * 
 * This code is licensed under the MIT License.
 */

/**
 * 创建新的方块
 * @param {object} game
 * @param {array} materials, materials 是一维数组，依次表示上下左右前后的展示图
 * @param {object} position
 */
export function createCube(game, materials, position = { x: 3, y: 5, z: 2 }) {
  // create a mesh
  const obj = new game.THREE.Object3D();

  const mesh = new game.THREE.Mesh(
    new game.THREE.CubeGeometry(game.cubeSize, game.cubeSize, game.cubeSize),
    game.materials.material
  );

  mesh.translateY(game.cubeSize / 2);

  obj.add(mesh);
  obj.position.set(position.x, position.y, position.z);

  // paint the mesh
  game.materials.paint(mesh, materials);
  mesh.geometry.uvsNeedUpdate = true;

  // create a rotating jumping cube
  const cube = game.addItem({
    mesh: obj,
    size: game.cubeSize,
    velocity: { x: 0, y: 0, z: 0 }
  });

  return cube;
}

export function animateCube() {}
