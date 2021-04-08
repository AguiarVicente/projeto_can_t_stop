let tabuleiro;

function preload() {
  tabuleiro = loadImage("./assets/can_t_stop_tabuleiro_para_impressao.jpg");
}
function draw() {
  background(tabuleiro, 0);
}

function setup() {
  createCanvas(1000, 1000);
}
