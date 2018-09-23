'use strict';

const Modal = require('voxel-modal');

export default class ModalDialog extends Modal {
  constructor(game, opts) {
    super(game, ModalDialog.createDialogContent(opts));
  }

  static createDialogContent(opts) {
    if (!opts.contents) opts.contents = [];

    let box;

    if (typeof document !== 'undefined') {
      // covers the (almost) entire page, for alignment purposes
      const aligner = document.createElement('div');
      aligner.setAttribute('class', 'voxel-modal-dialog-aligner');
      aligner.setAttribute(
        'style',
        `
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 90%;
        position: fixed;
        pointer-events: none;
        `
      );
      // note: height not 100% to give some room for voxel-inventory-hotbar

      // the overall dialog box element
      box = document.createElement('div');
      box.setAttribute('class', 'voxel-modal-dialog');
      box.style.border = '6px outset gray';
      box.style.visibility = 'hidden';
      box.style.zIndex = 1;
      box.style.pointerEvents = 'auto'; // reset pointer-events:none on parent (to allow clicks through canvas)
      box.style.backgroundImage =
        'linear-gradient(rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%)';

      for (let content of opts.contents) {
        console.log(opts.contents);
        box.appendChild(content);
      }

      aligner.appendChild(box);
      document.body.appendChild(aligner);
    }

    opts.element = box;

    return opts;
  }
}
