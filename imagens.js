//Variaveis imagens e sons 
let imagemDaEstrada;
let imagemDoPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let trilha;
let somColidiu;
let somPontos;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoPersonagem = loadImage("imagens/ator-1.png");
  
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemCarro1,imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  trilha = loadSound ("sons/trilha.mp3");
  somColidiu = loadSound ("sons/colidiu.mp3");
  somPontos = loadSound ("sons/pontos.wav");
}
