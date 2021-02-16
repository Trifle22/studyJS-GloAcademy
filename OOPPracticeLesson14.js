'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function() {
  if (this.selector[0] === '.') {
    document.body.insertAdjacentHTML('beforeend', `<div class="${this.selector.slice(1)}"></div>`);
  } else if (this.selector[0] === '#') {
    document.body.insertAdjacentHTML('beforeend', `<p id="${this.selector.slice(1)}"></p>`);
  }
};

let elementDiv = new DomElement('.block', '20px', '200px', '#98FB98', '15px');
elementDiv.createElement();
let block = document.querySelector('.block');
block.style.cssText = `
height: ${elementDiv.height}; 
width: ${elementDiv.width};
background-color: ${elementDiv.bg};
font-size: ${elementDiv.fontSize};`;
block.textContent = 'Это блок с классом block';

let elementParagraph = new DomElement('#best', '20px', '300px', '#DC143C', '11px');
elementParagraph.createElement();

let paragraph = document.querySelector('#best');
paragraph.style.cssText = `
height: ${elementParagraph.height}; 
width: ${elementParagraph.width};
background-color: ${elementParagraph.bg};
font-size: ${elementParagraph.fontSize};`;
paragraph.textContent = 'Это параграф с id best';

