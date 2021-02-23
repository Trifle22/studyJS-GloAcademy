/* eslint-disable no-inner-declarations */


/* eslint-disable no-trailing-spaces */
window.addEventListener('DOMContentLoaded', () => {
  const deadline = '24 february 2021';
  
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

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');


    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach(item => item.addEventListener('click', handlerMenu));

  };
  toggleMenu();

  //popup 

  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');

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

    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });

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
  };


  togglePopup();













});
