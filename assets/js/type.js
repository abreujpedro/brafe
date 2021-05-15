/* eslint-disable no-param-reassign */
export default function typing() {
  const textFirst = document.querySelector('[data-type="h1"]');
  const textSecond = document.querySelector('[data-type="p"]');

  function write(text) {
    const posicao = text.innerHTML.indexOf('<br>');
    const textWithoutBr = text.innerHTML.replace('<br>', '');
    const textSplit = textWithoutBr.split('');
    text.innerHTML = '';
    textSplit.forEach((element, i) => {
      setTimeout(() => {
        if (i === posicao) {
          text.innerHTML += '<br>';
        }
        text.innerHTML += element;
      }, 80 * i);
    });
  }
  write(textFirst);

  write(textSecond);
}
