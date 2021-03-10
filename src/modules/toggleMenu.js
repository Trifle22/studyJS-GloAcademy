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

export default toggleMenu;
