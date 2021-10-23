var inp = 0
var audio3 = new Audio ("ilha.mp3")
var audio4 = new Audio ("alaska.mp3")
var audio5 = new Audio ("ind.mp3")
var arma = new Audio ("arma.mp3")
setInterval(() => {
    if (audio3.currentTime >= 48){
        audio3.currentTime = 0
    }
    if (arma.currentTime >= 66){
        arma.currentTime=0
    }
    if (audio4.currentTime >= 199){
        audio4.currentTime=0
    }
    if (audio5.currentTime >= 199){
        audio5.currentTime=0
    }
}, 1000);
setInterval(() => {
    var passarosden = document.getElementById("passarosden")
    var passro = document.createElement("img")
    passro.setAttribute("src","img/passaro.png")
    passro.setAttribute("class","passaro")
    passro.addEventListener("click",function(){
        var morte = new Audio ("morte.mp3")
        var tiro = new Audio ("Untitled.mp3")
        morte.play()
        tiro.play()
        passro.setAttribute("src","img/morte.png")
        var fogo=document.getElementById("fogo")
        fogo.style.opacity="1"
        // dps do fogo suma
        setTimeout(() => {
            fogo.style.opacity="0"
        }, 100);
        // dps do click 400 mili s para sumir as penas
        setTimeout(() => {
            passro.remove()
        }, 400);
        inp++
        document.getElementById("write").innerHTML = "Pontos: "+inp
    })
    if (inp >= 19){
        document.getElementById("cenario").innerHTML="Amazonia"
        document.getElementById("janela").style.backgroundImage="url('img/n1.png')"
        passro.style.transition="top 8s ease"
        passro.setAttribute("src","img/passaroamarelho.png")
        passro.addEventListener("click",function(){
            passro.setAttribute("src","img/morteamarela.png")
        })
        audio3.pause()
        audio3.currentTime=0
        arma.play()
    }
    if (inp >= 49){
        document.getElementById("cenario").innerHTML="Alaska"
        document.getElementById("janela").style.backgroundImage="url('img/b4.png')"
        passro.style.transition="top 7.6s ease"
        passro.setAttribute("src","img/passaroblue.png")
        passro.addEventListener("click",function(){
            passro.setAttribute("src","img/morteblue.png")
        })
        arma.pause()
        arma.currentTime=0
        audio4.play()
    }
    if (inp >= 99){
        document.getElementById("cenario").innerHTML="Unity"
        document.getElementById("janela").style.backgroundImage="url('img/red.png')"
        passro.style.transition="top 6s ease"
        passro.setAttribute("src","img/passarored.png")
        passro.addEventListener("click",function(){
            passro.setAttribute("src","img/mortered.png")
        })
        audio4.pause()
        audio4.currentTime=0
        audio5.play()
    }
    // dps de ser criado coloque pra ir pra baixo
    setTimeout(() => {
        passro.style.top="1000px"
    }, 100);
    // surmir passaro caso nao click
    setTimeout(() => {
        passro.remove()
    }, 3000);
    const aleatorio = (num) => Math.floor(Math.random() * num)
    var tu =document.getElementById("passarosden").clientWidth
    passro.style.left=(aleatorio(tu)- parseInt(80)) +"px"
    passarosden.appendChild(passro)
}, 500);
document.getElementById("janela").addEventListener("mousemove",function(move){
    var x = move.clientX
    document.getElementById("armafogo").style.left=x+"px"
})
document.getElementById("start").addEventListener("click",function(){
    var nome = ""
    nome = document.getElementById("nome").value
    document.getElementById("nomewrite").innerHTML = nome
    document.getElementById("menu").style.display="none"
    localStorage.setItem("nome",nome)
    if (nome == ""){
        document.getElementById("nomewrite").innerHTML = 'nothing'
    }
    audio3.play()
    audio3.currentTime=20
})
document.getElementById("clicktodead").addEventListener("click",function(){
    document.getElementById("perdeu").style.display="flex"
})
document.getElementById("backtogame").addEventListener("click",function(){
    document.getElementById("perdeu").style.display="none"
    inp = 0
    document.getElementById("write").innerHTML = "Pontos: 0"
    document.getElementById("cenario").innerHTML="Ilha"
    document.getElementById("janela").style.backgroundImage=""
    audio3.play()
    arma.pause()
    arma.currentTime=0
    audio4.pause()
    audio4.currentTime=0
    audio5.pause()
    audio5.currentTime=0
})
document.getElementById("salvar").addEventListener("click",function(){
    localStorage.setItem("save",inp)
    document.getElementById("record").innerHTML = "Record: "+localStorage.getItem("save")
})
document.getElementById("backtomenu").addEventListener("click",function(){
    document.getElementById("menu").style.display="flex"
    document.getElementById("perdeu").style.display="none"
    inp = 0
    document.getElementById("write").innerHTML = "Pontos: 0"
    document.getElementById("cenario").innerHTML="Ilha"
    document.getElementById("janela").style.backgroundImage=""
    audio3.pause()
    arma.pause()
    arma.currentTime=0
    audio4.pause()
    audio4.currentTime=0
    audio5.pause()
    audio5.currentTime=0
})
window.addEventListener("load",function(){
    if(localStorage.nome){
        document.getElementById("nomewrite").innerHTML = localStorage.getItem("nome")
        document.getElementById("nome").value = localStorage.getItem("nome")
    }
    if(localStorage.save){
        document.getElementById("record").innerHTML = "Record: "+localStorage.getItem("save")
    }
})