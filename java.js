function slider(anything) {
  document.querySelector('.one').src = anything;
};
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nave');
let main = document.querySelector('.main');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
  main.classList.toggle('none');
}