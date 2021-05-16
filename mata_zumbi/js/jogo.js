var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

//modificando o valor que aparece o zumbi na tela de acordo com o nivel escohido
var criaZumbiTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel == 'normal'){
    var criaZumbiTempo = 1500
}else if(nivel == 'dificil'){
    var criaZumbiTempo = 1000
}else if(nivel == 'thewalkingdead'){
    var criaZumbiTempo = 700
}

function ajusteTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajusteTamanhoTela()

var cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaZumbi)
        window.location.href='vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){

    //remover o zumbi anterior caso exista
    if (document.getElementById('zumbi')){
        document.getElementById('zumbi').remove()
        
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else{
            //interage com a vida do personagem. A cada zumbi perdido o coração cheio é trocado pelo coração vazio
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
            vidas++
        }
    }
    //movimento da zumbi
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criando o movimento do zumbi na tela
    var zumbi = document.createElement('img')
    zumbi.src = 'imagens/zumbi.png'
    zumbi.className = tamanhoAleatorio()
    zumbi.style.left = posicaoX + 'px'
    zumbi.style.top = posicaoY + 'px'
    zumbi.style.position = 'absolute'
    zumbi.id = 'zumbi'
    zumbi.onclick = function(){
        this.remove()
    }

    document.body.appendChild(zumbi)
    console.log(tamanhoAleatorio())
}

//tamanhos aleatorios dos zumbis
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    if (classe == 0) {
        return 'zumbi'
    }else if(classe  == 1){
        return 'zumbi2'
    }else if (classe == 2){
        return 'zumbi3'
    }
}
