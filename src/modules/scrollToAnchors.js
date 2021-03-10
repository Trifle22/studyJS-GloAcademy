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

export default scrollToAnchors;