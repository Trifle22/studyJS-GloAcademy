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

export default replacePhoto;