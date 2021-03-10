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

export default slider;