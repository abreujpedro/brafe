export default function modal() {
  const contatos = document.querySelector('.contato');
  const modalGrid = document.querySelector('.modal');
  const btn = document.querySelector('.fechar');
  const x1 = document.querySelector('.x1');
  const x2 = document.querySelector('.x2');

  function callBack(event) {
    event.preventDefault();
    modalGrid.classList.add('ativo');
  }

  function removeModal(event) {
    const clicado = event.target;
    if (clicado === modalGrid || clicado === btn || clicado === x1 || clicado === x2) {
      modalGrid.classList.remove('ativo');
    }
  }

  modalGrid.addEventListener('click', removeModal);
  contatos.addEventListener('click', callBack);
}
