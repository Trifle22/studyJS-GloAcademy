/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
window.addEventListener('DOMContentLoaded', () => {
  const deadline = '23 february 2021';
  
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');

  //countTimer function
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

});
