export default function btnMobile() {
  const btn = document.querySelector('.mobile-content');
  const barras = document.querySelector('.btn-mobile');
  const itens = document.querySelectorAll('.menu-nav ul li a[href^="#"]');
  const menuNav = document.querySelector('.menu-nav');

  function toggleScroll() {
    if (menuNav.classList.contains('ativado')) {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = 'yes';
    }
  }

  function callBack() {
    menuNav.classList.toggle('ativado');
    btn.classList.toggle('at');
    barras.classList.toggle('ativ');
    toggleScroll();
  }

  function removeBack() {
    menuNav.classList.remove('ativado');
    btn.classList.remove('at');
    barras.classList.remove('ativ');
    toggleScroll();
  }

  itens.forEach((i) => {
    i.addEventListener('click', removeBack);
  });
  btn.addEventListener('click', callBack);
}
