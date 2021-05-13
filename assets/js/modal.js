export default function modal (){

    const contatos = document.querySelector(".contato");
    const modal = document.querySelector(".modal");
    const btn = document.querySelector(".fechar");
    const x1 = document.querySelector(".x1");
    const x2 = document.querySelector(".x2");

    function callBack (event){
        event.preventDefault();
        modal.classList.add("ativo");
    }

    function removeModal (event){
        if(event.target == modal || event.target == btn || event.target == x1 || event.target == x2){
            modal.classList.remove("ativo");
        }
    }

    modal.addEventListener("click", removeModal);
    contatos.addEventListener("click", callBack);
}