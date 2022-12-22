
    var itens = document.querySelector('.navbar')
    var hamburguer = document.querySelector(".material-symbols-outlined")

function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'flex'
    } else{
        itens.style.display = 'none'
    }
}

function openMenu(){

    if( itens.style.display == "flex"){
        itens.style.display = "none"
        hamburguer.innerText = "menu"

    }else{
        itens.style.display = 'flex'
        hamburguer.innerText = "close"
    }

}