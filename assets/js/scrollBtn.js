export default function scrollBtn () {
    const btn = document.querySelector("[data-top]");
    const classe = "ativo";
    const local = document.querySelector(".mistura").offsetTop;
    function callBack(){
        const windowTop = window.pageYOffset;
        if (windowTop > local){
            btn.classList.add(classe);
            btn.addEventListener("click", backTop);
        }else {
            btn.classList.remove(classe);
        }
    }

    function backTop(){
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }

    callBack();
    window.addEventListener("scroll", callBack)
}