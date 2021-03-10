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

export default togglePopup;