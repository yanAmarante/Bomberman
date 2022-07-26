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

var bomba = false;
var bombaLaranja = false;
var bombaPreto = false;

var bombaPosicionamento = [];

var bombaX = bomberman.x;
var bombaY = bomberman.y;
var bombaLaranjaPosicionamentoX;
var bombaLaranjaPosicionamentoY;
var bombaPretoPosicionamentoX;
var bombaPretoPosicionamentoY;




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

function desenharBomba(){

    for(let i = 0; i < 100; i++){

        if(bomba === false){
        
        bombaPosicionamento[0] = bomberman.x;
        bombaPosicionamento[1] = bomberman.y;
        
    }

    }

    if(bomba === true){
    
    bombaLaranjaPosicionamentoX = bombaPosicionamento[0];
    bombaLaranjaPosicionamentoY = bombaPosicionamento[1];
    bombaPretoPosicionamentoX = bombaPosicionamento[0];
    bombaPretoPosicionamentoY = bombaPosicionamento[1];
    
    pincel.fillStyle="red";
    pincel.fillRect(bombaPosicionamento[0], bombaPosicionamento[1], bomberman.largura, bomberman.altura);
    
    setTimeout(bombaExplosao, 1000);
    
}
}



function bombaExplosao(){

    bombaLaranja = true;
    
    if(bombaLaranja === true){
    
    pincel.fillStyle="red";
    pincel.fillRect(bombaLaranjaPosicionamentoX, bombaLaranjaPosicionamentoY, bomberman.largura, bomberman.altura);
    
    pincel.fillStyle="orange";
    pincel.fillRect(bombaLaranjaPosicionamentoX, bombaLaranjaPosicionamentoY - 25, bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaLaranjaPosicionamentoX, bombaLaranjaPosicionamentoY + 25, bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaLaranjaPosicionamentoX + 25, bombaLaranjaPosicionamentoY, bomberman.largura, bomberman.altura);
    pincel.fillRect(bombaLaranjaPosicionamentoX - 25, bombaLaranjaPosicionamentoY, bomberman.largura, bomberman.altura);
    
    setTimeout(bombaQuadrado,10)
    
}
  
}

function bombaQuadrado(){
    
    /*pincel.fillStyle="black";
    pincel.fillRect(bombaPretoPosicionamentoX, bombaPretoPosicionamentoY - 25, 0, 0);
    pincel.fillRect(bombaPretoPosicionamentoX, bombaPretoPosicionamentoY + 25, 0, 0);
    pincel.fillRect(bombaPretoPosicionamentoX + 25, bombaPretoPosicionamentoY, 0, 0);
    pincel.fillRect(bombaPretoPosicionamentoX - 25, bombaPretoPosicionamentoY, 0, 0);
    */
    bombaPreto = false;
    bomba = false;
    bombaLaranja = false;

    /*for(let i = 0; i < 100; i++){
        pincel.fillStyle="black";
        pincel.fillRect(bombaLaranjaPosicionamentoX, bombaLaranjaPosicionamentoY - 25, 0, 0);
        pincel.fillRect(bombaLaranjaPosicionamentoX, bombaLaranjaPosicionamentoY + 25, 0, 0);
        pincel.fillRect(bombaLaranjaPosicionamentoX - 25, bombaLaranjaPosicionamentoY, 0, 0);
        pincel.fillRect(bombaLaranjaPosicionamentoX + 25, bombaLaranjaPosicionamentoY, 0, 0);
    }*/
    
 
}

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

function matriz (){
    
    pincel.fillStyle="brown";
    pincel.fillRect(50, 50, 25, 25);
    pincel.fillRect(75, 75, 25, 25);
    pincel.fillRect(100, 100, 25, 25);
    pincel.fillRect(125, 125, 25, 25);
    pincel.fillRect(150, 125, 25, 25);
    pincel.fillRect(175, 125, 25, 25);
    pincel.fillRect(200, 125, 25, 25);

}


function atualizarTela() {
    limparTela();
    desenharBomberman();
    desenharBomba();
    matriz();
}


setInterval(atualizarTela, 20);

document.onkeydown = leDoTeclado;



