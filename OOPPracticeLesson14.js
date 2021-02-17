'use strict';

function DomElement(selector, height, width, bg) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
}

DomElement.prototype.createElement = function() {
  if (this.selector[0] === '.') {
    document.body.insertAdjacentHTML('beforeend', `<div class="${this.selector.slice(1)}"></div>`);
  } else if (this.selector[0] === '#') {
    document.body.insertAdjacentHTML('beforeend', `<p id="${this.selector.slice(1)}"></p>`);
  }
};
let square = new DomElement('.square', '100px', '100px', '#16FB08');

document.addEventListener('DOMContentLoaded',() => {
  square.createElement();
  const ourSquare = document.querySelector('.square');
  ourSquare.style.cssText = `
  width: ${square.width};
  height: ${square.height};
  background-color: ${square.bg};
  position: absolute;
  top : 100;
  left: 100;
  right: 100;
  bottom 100;
  `;
  document.addEventListener('keydown', (e) => {
    let computedStyle = getComputedStyle(ourSquare);
    if (e.key === 'ArrowUp') {
      ourSquare.style.top = `${parseFloat(computedStyle.top) - 10}px`;
    } else if (e.key === 'ArrowDown') {
      ourSquare.style.bottom = `${parseFloat(computedStyle.bottom) - 10}px`;
    } else if (e.key === 'ArrowLeft') {
      ourSquare.style.left = `${parseFloat(computedStyle.left) - 10}px`;
    } else if (e.key === 'ArrowRight') {
      ourSquare.style.right = `${parseFloat(computedStyle.right) - 10}px`;
    }
  });

});