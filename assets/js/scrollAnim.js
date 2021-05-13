export default function scrollAnim(){

    const itens = document.querySelectorAll("[data-anim]");
    const classe = "animate";

    function callBack(){
        const windowTop = window.pageYOffset + (window.innerHeight *3.5/4);
        itens.forEach((i) =>{
            if (windowTop > i.offsetTop && pageYOffset < i.offsetTop + i.offsetHeight ){
                i.classList.add(classe);
                
            }else if (window.pageYOffset> i.offsetTop + i.offsetHeight){
                i.classList.remove(classe);
            }else{
                i.classList.remove(classe);
            }
        })
    }
    if(itens.length){
        callBack();
        window.addEventListener("scroll", callBack);
    }
}