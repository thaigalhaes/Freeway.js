function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  movimentaPersonagem();
  mostraCarro();
  movimentaCarro();
  voltaCarro();
  passouTodaATela();
  verificaColisao ();
  incluiPontos();
  marcaPontos ();
}
