const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }
    if (typeValue && squareValue) {
      total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);
    } else if (!typeValue) {
      total = 0;
      calcSquare.value = '';
      calcDay.value = '';
      calcCount.value = '';
    }

    if (total >= 0) {
      const animateValue = function(elem, value, inc, shift, speed) {
        let interval = false;
        if (inc) {
          interval = setInterval(() => {
            if (+elem.textContent * 1 + shift >= value) {
              elem.textContent = value;
              clearInterval(interval);
            } else {
              elem.textContent = +elem.textContent * 1 + shift;
            }
          }, speed);
        } else {
          interval = setInterval(() => {
            if (+elem.textContent * 1 - shift <= value) {
              elem.textContent = value;
              clearInterval(interval);
            } else {
              elem.textContent = +elem.textContent * 1 - shift;
            }
          }, speed);
        }
      };

      function startAnimationCalculator() {
        let animationSpeed = 0;
        if (Math.abs(total - parseFloat(totalValue.textContent)) > 15000) {
          animationSpeed = 1000;
        } else {
          animationSpeed = 150;
        }
  
        if (totalValue.textContent > total) {
          animateValue(totalValue, total, false, animationSpeed, 1);
        } else {
          animateValue(totalValue, total, true, animationSpeed, 1);
        }
      }

      startAnimationCalculator();


    }

  };

  calcBlock.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};


export default calculator;