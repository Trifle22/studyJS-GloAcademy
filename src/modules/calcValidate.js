const calcValidate = function() {
  const calcItems = document.querySelectorAll('.calc-item');

  for (let i = 1; i < calcItems.length; i++) {
    calcItems[i].addEventListener('input', () => {
      calcItems[i].value = calcItems[i].value.replace(/\D/g, '');
    });
  }
};
export default calcValidate;