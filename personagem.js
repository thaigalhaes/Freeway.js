//Personagem
let yPersonagem = 366;
let xPersonagem = 85;
let colisao = false;
let pontos = 0;

function mostraPersonagem (){
 image (imagemDoPersonagem, xPersonagem, yPersonagem, 30, 30) 
}

function movimentaPersonagem (){
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
     if (podeSeMover()){
    yPersonagem += 3;
  }
  }
}

function verificaColisao (){
for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
    
  if (colisao){
   
     colidiu();
    somColidiu.play();
    if (pontosMaiorQueZero()){
    pontos -= 1;
    }
   }
 }
  
}

function colidiu (){
  yPersonagem = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize (25)
  fill (color (255,215,0))
  text (pontos, width / 5, 27);
}
 function marcaPontos (){
   if (yPersonagem < 15){
     pontos +=1;
     somPontos.play(); 
     colidiu ();
   }
   
 }
function pontosMaiorQueZero (){
  return pontos > 0;
}

function podeSeMover (){
  return yPersonagem < 366;
}
