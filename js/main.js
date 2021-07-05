// Alternar cores das logos dos botões play e more info
function mouseEmCimaPlay(){
    var playlogo = document.querySelector('.play-logo')
    playlogo.src = "https://super.so/icon/dark/play.svg"
}
function mouseForaPlay(){
    var playlogo = document.querySelector('.play-logo')
    playlogo.src = "https://super.so/icon/light/play.svg"
}
function mouseEmCimaInfo(){
    var infologo = document.querySelector('.info-logo')
    infologo.src = "https://super.so/icon/dark/info.svg"
}
function mouseForaInfo(){
    var infologo = document.querySelector('.info-logo')
    infologo.src = "https://super.so/icon/light/info.svg"
}

//Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:3.3
        },
        600:{
            items:4.3
        },
        1000:{
            items:7.3
        }
    }
})

//Janela modal
function abrirModal(){
    document.getElementById('modal').style.top = "0"
}
function fecharModal(){
    document.getElementById('modal').style.top = "-100%"
}