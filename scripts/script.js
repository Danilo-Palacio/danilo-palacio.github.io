
    var itens = document.querySelector('.navbar')
    var icone = document.querySelector(".material-symbols-outlined")
    var hamburguer = document.querySelector('#hamburguer')

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
        icone.innerText = "menu"

    }else{
        itens.style.display = 'flex'
        icone.innerText = "close"
    }

}