var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// códigos do teclado

var bomberman = {
    x: 225,
    y: 225,
    altura: 25,
    largura: 25,
    velocidade: 25
}

const ESQUERDA = 37;
const CIMA = 38;
const DIREITA = 39;
const BAIXO = 40;
const ESPACO = 32;




function limparTela() {
    var descer = 0; 


    while(descer <=500){

        for(var imp= 0; imp<=500;imp=imp+25){

            pincel.fillStyle = "black";
            pincel.beginPath();
            pincel.rect(imp, descer, 25, 25);
            pincel.closePath();
            pincel.fill();
            pincel.stroke();
        }

        descer = descer + 25; 

    }    

}

function desenharBomberman() {
    pincel.fillStyle="white";
    pincel.fillRect(bomberman.x, bomberman.y, bomberman.largura, bomberman.altura);
    pincel.fill();
}

var bomba = false;
var bombaLaranja = false;
var bombaPreto = false;

var bombaX = bomberman.x;
var bombaY = bomberman.y;
var bombaPosicionamento = [];



function desenharBomba(){

    for(let i = 0; i < 100; i++){

        if(bomba === false){
        bombaPosicionamento[0] = bomberman.x;
        bombaPosicionamento[1] = bomberman.y;
        }

    }

    if(bomba === true){
    pincel.fillStyle="red";
    pincel.fillRect(bombaPosicionamento[0], bombaPosicionamento[1], bomberman.largura, bomberman.altura);
    pincel.fill();
    setInterval(bombaExplosao, 3000)
    bombaLaranja = true;
    }
}



function bombaExplosao(){

    if(bombaLaranja === true){
    pincel.fillStyle="orange";
    pincel.fillRect(bombaPosicionamento[0],  bombaPosicionamento[1] - 25, bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaPosicionamento[0],  bombaPosicionamento[1] + 25, bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaPosicionamento[0] + 25, bombaPosicionamento[1], bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaPosicionamento[0] - 25, bombaPosicionamento[1], bomberman.largura, bomberman.altura);
    pincel.fill();
    setInterval(bombaQuadrado,500)
    bombaPreto = true;
    }
  
}

function bombaQuadrado(){

    if(bombaPreto = true){
    pincel.fillStyle="black";
    pincel.fillRect(bombaPosicionamento[0],  bombaPosicionamento[1] - 25, 0, 0);
    pincel.fillRect(bombaPosicionamento[0],  bombaPosicionamento[1] + 25, 0, 0);
    pincel.fillRect(bombaPosicionamento[0] + 25, bombaPosicionamento[1], 0, 0);
    pincel.fillRect(bombaPosicionamento[0] - 25, bombaPosicionamento[1], 0, 0);
    pincel.fill();
    bombaPreto = false;
    bomba = false;
    bombaLaranja = false;
    }  
}


function atualizarTela() {
    limparTela();
    desenharBomberman();
    desenharBomba();
}


setInterval(atualizarTela, 20);


function leDoTeclado(evento) {
    
    if(evento.keyCode == CIMA && bomberman.y - bomberman.velocidade > 0) {
        bomberman.y = bomberman.y - bomberman.velocidade;
    
    } else if (evento.keyCode == BAIXO && bomberman.y + bomberman.velocidade < 500) {
        bomberman.y = bomberman.y + bomberman.velocidade;

    
    } else if (evento.keyCode == ESQUERDA && bomberman.x - bomberman.velocidade > 0) {
        bomberman.x = bomberman.x - bomberman.velocidade;

    
    } else if (evento.keyCode == DIREITA && bomberman.x + bomberman.velocidade < 500) {
        bomberman.x = bomberman.x + bomberman.velocidade;
    }
    if(evento.keyCode === ESPACO){
        bomba = true;
    }
}


document.onkeydown = leDoTeclado;

