const text = document.querySelector('.main-text');
const input = document.querySelector('.main-input');

function writeText() {
  text.textContent = input.value;
}

const debounceFunc = func => {
  let timeout;
  return function() {
    const fnCall = () => {
      func.apply(this);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, 300);
  };
};

const debounceWriteTextFunc = debounceFunc(writeText);


input.addEventListener('input', debounceWriteTextFunc);
