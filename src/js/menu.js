const burgerMenu = function () {
  const menu = document.querySelector('.burger__menu');
  const menuBtn = document.querySelector('.burger__menu-button');
  // const menuNav = document.querySelector('.burger__menu-nav');

  menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menuBtn.classList.toggle('burger__menu-active');
    menu.classList.toggle('menu__active');
  });
};
export default burgerMenu;
