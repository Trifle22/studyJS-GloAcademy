/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-loop-func */
/* eslint-disable no-inner-declarations */


/* eslint-disable no-trailing-spaces */
window.addEventListener('DOMContentLoaded', () => {
  const deadline = '5 march 2021';
  
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');

  countTimer(deadline);

  function countTimer(deadline) {

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const secondsRemaining = Math.floor(timeRemaining % 60);
      const minutesRemaining = Math.floor((timeRemaining / 60) % 60);
      const hoursRemaining = Math.floor((timeRemaining / 60 / 60));

      return {
        timeRemaining,
        hoursRemaining,
        minutesRemaining,
        secondsRemaining
      };
    }

    function updateClock() {
      const timer = getTimeRemaining();
      if (timer.hoursRemaining < 10) {
        timer.hoursRemaining = '0' + timer.hoursRemaining.toString();
      }
      if (timer.minutesRemaining < 10) {
        timer.minutesRemaining = '0' + timer.minutesRemaining.toString();
      }
      if (timer.secondsRemaining < 10) {
        timer.secondsRemaining = '0' + timer.secondsRemaining.toString();
      }
      
      timerHours.textContent = timer.hoursRemaining;
      timerMinutes.textContent = timer.minutesRemaining;
      timerSeconds.textContent = timer.secondsRemaining;
    }
    updateClock();
  }

  const intervalTimer = setInterval(countTimer, 1000, deadline);

  if (new Date(deadline).getTime() - new Date().getTime() <= 0) {
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
    timerHours.style.color = 'red';
    timerMinutes.style.color = 'red';
    timerSeconds.style.color = 'red';
    clearInterval(intervalTimer);
  }

  function runAnimation() {
    timerSeconds.style.animation = 'animationTimer 1s';
  }

  function loopAnimation() {
    runAnimation();
    setInterval(() => {
      timerSeconds.style.animation = 'animationTimer 1s';
    }, 1000);
  }

  requestAnimationFrame(loopAnimation);


  function scrollToAnchors() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        const anchorID = item.getAttribute('href').substr(1);
        document.getElementById(anchorID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }

  scrollToAnchors();

  const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    // делегирование
    document.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('.menu')) {
        handlerMenu();
      } else if (target.closest('.close-btn')) {
        handlerMenu();
      } else if (target.closest('ul>li>a')) {
        handlerMenu();
      } else if (!target.closest('.active-menu') && menu.classList.contains('active-menu')) {
        handlerMenu();
      }
    });

  };

  toggleMenu();



  //popup 

  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach(item => {
      item.addEventListener('click', () => {
        if (screen.width >= 768) {
          const start = Date.now();
          const timer = setInterval(() => {
            const timePassed = Date.now() - start;
            if (timePassed >= 1000) {
              clearInterval(timer);
              return;
            }
            animatedPopup(timePassed);
          }, 10);
  
          function animatedPopup(timePassed) {
            popup.style.display = 'block';
            popup.style.opacity = timePassed / 1000;
          }
        } else {
          popup.style.display = 'block';
        }
      });
    });

    popup.addEventListener('click', event => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };

  togglePopup();

  //tabs 

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        }); 
      }
      
    });
  };

  tabs();


  //slider

  const slider = () => {
    const slides = document.querySelectorAll('.portfolio-item');
    const dots = document.querySelectorAll('.dot');
    const portfolioDots = document.querySelector('.portfolio-dots');
    const slider = document.querySelector('.portfolio-content');
    let interval;
    let currentSlide = 0;

    const portfolioDot = document.createElement('li.dot');

    for (let i = 0; i < slides.length; i++) {
      portfolioDots.append(portfolioDot);
    }

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlider = () => {
      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlider = (time = 1500) => {
      interval = setInterval(autoPlaySlider, time);
    };

    const stopSlider = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;
      
      if (target.matches('.portfolio-btn, .dot')) {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        if (target.matches('#arrow-right')) {
          currentSlide++;
        } else if (target.matches('#arrow-left')) {
          currentSlide--;
        } else if (target.matches('.dot')) {
          dots.forEach((elem, index) => {
            if (elem === target) {
              currentSlide = index;
            }
          });
        }
        if (currentSlide >=  slides.length) {
          currentSlide = 0;
        } else if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
      } else {
        return;
      }
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlider();
      }
    });
    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlider();
      }
    });

    startSlider(1500);
  };

  slider();

  const replacePhoto = function() {
    const commandPhotosParent = document.querySelector('.command');
    let support;
    commandPhotosParent.addEventListener('mouseover', event => {
      const target = event.target;
      if (target.matches('img')) {
        support = target.src;
        target.src = target.dataset.img;
        target.dataset.img = support;
      }
    });
    commandPhotosParent.addEventListener('mouseout', event => {
      const target = event.target;
      if (target.matches('img')) {
        support = target.src;
        target.src = target.dataset.img;
        target.dataset.img = support;
      }
    });
  };

  replacePhoto();

  const calcValidate = function() {
    const calcItems = document.querySelectorAll('.calc-item');

    for (let i = 1; i < calcItems.length; i++) {
      calcItems[i].addEventListener('input', () => {
        calcItems[i].value = calcItems[i].value.replace(/\D/g, '');
      });
    }
  };
  calcValidate();

  const formsTextValidate = function() {
    const inputsName = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputsEmail = document.querySelectorAll('input[type="email"]');
    const inputsPhone = document.querySelectorAll('input[placeholder="Номер телефона"]');
    const regText = /[^а-яё\s{1}\-]*/gi;

    const customValidator = val => {
      val = val.replace(/\s+/g, ' ');
      val = val.replace(/-+/g, '-');
      val = val.replace(/^[ |\-+]/g, '');
      val = val.replace(/[ |\-+]$/g, '');

      return val;
    };

    inputsName.forEach(item => {
      item.addEventListener('blur', e => {
        const target = e.target;
        let val = target.value;
        val = val.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
        val = customValidator(val);
        const arr = val.split(' ');
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
          }
        }
        val = arr.join(' ');
        item.value = customValidator(val);
      });
    });

    inputMessage.addEventListener('blur', e => {
      const target = e.target;
      let val = target.value;
      val = val.replace(/[^а-яА-ЯёЁ0-9\s\-.,]+/g, '');
      val = customValidator(val);
      target.value = val;
    });
    
    inputsEmail.forEach(item => {
      item.addEventListener('blur', e => {
        const target = e.target;
        let val = target.value;
        val = val.replace(/[^_@.!~*'A_Za-z\-\d]/g, '');
        val = customValidator(val);
        target.value = val;
      });
    });

    inputsPhone.forEach(item => {
      console.log(item.id);
      maskPhone(`#${item.id}`);
      item.addEventListener('blur', e => {
        const target = e.target;
        let val = target.value;
        val = val.replace(/+[^\d()\-]/ig, '');
        val = customValidator(val);
        target.value = val;
      });
    });

  };


  formsTextValidate();

  //calculator
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

        if (totalValue.textContent > total) {
          animateValue(totalValue, total, false, 50, 1);
        } else {
          animateValue(totalValue, total, true, 50, 1);
        }
      }

    };

    calcBlock.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };

  calculator(100);

});
