export default function scroll() {
  const menuItems = document.querySelectorAll('.menu-nav a[href^="#"]');

  function select(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollPostion(section) {
    window.scroll({
      top: section,
      behavior: 'smooth',
    });
  }

  function scrollToId(event) {
    event.preventDefault();
    const element = event.target;
    const section = select(element) - 100;
    scrollPostion(section);
  }

  menuItems.forEach((i) => {
    i.addEventListener('click', scrollToId);
  });
}
