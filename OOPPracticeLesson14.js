'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

const elementDiv = new DomElement('.block', '20px', '200px', '#98FB98', '15px');

let elementParagraph = new DomElement('#best', '20px', '300px', '#DC143C', '11px');


DomElement.prototype.createElement = function() {
  if (this.selector[0] === '.') {
    document.body.insertAdjacentHTML('beforeend', `<div class="${this.selector.slice(1)}"></div>`);
    let block = document.querySelector('.block');
    block.style.cssText = `
    height: ${elementDiv.height}; 
    width: ${elementDiv.width};
    background-color: ${elementDiv.bg};
    font-size: ${elementDiv.fontSize};`;
    block.textContent = 'Это блок с классом block';
  } else if (this.selector[0] === '#') {
    document.body.insertAdjacentHTML('beforeend', `<p id="${this.selector.slice(1)}"></p>`);
    let paragraph = document.querySelector('#best');
    paragraph.style.cssText = `
    height: ${elementParagraph.height}; 
    width: ${elementParagraph.width};
    background-color: ${elementParagraph.bg};
    font-size: ${elementParagraph.fontSize};`;
    paragraph.textContent = 'Это параграф с id best';
  }
};

elementDiv.createElement();

elementParagraph.createElement();


