/*
 * @file 快照
 * @description 将当前的摄像头快照输出为图像，并且允许下载
 * 
 * @author 王下邀月熊 <384924552@qq.com>
 * 
 * Created Date: Sat, 2018-05-26 14:35:04
 * 
 * Last Modified: Sat, 2018-05-26 15:08:31
 * Last Modified By: 王下邀月熊 <384924552@qq.com>
 * 
 * This code is licensed under the MIT License.
 */

function Share(opts) {
  if (!(this instanceof Share)) return new Share(opts || {});
  if (opts.THREE) opts = { game: opts };
  if (!opts.key) throw new Error('Get a key: http://api.imgur.com/');
  this.key = opts.key;
  this.game = opts.game;
  this.hashtags = opts.hashtags || '';
  this.message = opts.message || 'Greetings from voxel.js! @voxeljs';
  this.type = opts.type || 'image/png';
  this.quality = opts.quality || 0.75;
  this.opened = false;
  this.afterUpload = opts.afterUpload || this.tweet;
}
module.exports = Share;

Share.prototype.open = function(append) {
  this.close();
  this.element = this.createElement();
  append = append || document.body;
  append.appendChild(this.element);
  this.opened = true;
};

Share.prototype.close = function() {
  if (this.element != null) {
    this.element.parentNode.removeChild(this.element);
  }
  this.element = null;
  this.opened = false;
};

Share.prototype.submit = function() {
  var self = this;
  var fd = new FormData();
  fd.append('image', String(this.image.src).split(',')[1]);
  if (this.message) fd.append('description', this.message);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.imgur.com/3/upload');
  var auth = 'Client-ID ' + this.key;
  xhr.setRequestHeader('Authorization', auth);
  xhr.onload = function() {
    // todo: error check
    var link = JSON.parse(xhr.responseText).data.link;
    self.afterUpload.call(self, link);
  };
  xhr.send(fd);
};

Share.prototype.createElement = function() {
  var self = this;
  var e = document.createElement('div');
  e.className = 'voxel-share';

  // create image
  this.image = new Image();
  this.game.renderer.render(this.game.scene, this.game.camera);
  this.image.src = this.game.element.toDataURL(this.type, this.quality);
  e.appendChild(this.image);

  // create text input
  var msgBox = document.createElement('textarea');
  msgBox.value = this.message;
  e.appendChild(msgBox);
  setTimeout(function() {
    msgBox.focus();
  }, 500);

  // submit button
  var button = document.createElement('button');
  button.innerHTML = 'Upload Image';
  e.appendChild(button);
  button.onclick = function() {
    this.innerHTML = 'Uploading...';
    self.submit();
  };

  return e;
};
