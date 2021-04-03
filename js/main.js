let tabuleiro;
let pino_amarelo;
let pino_vermelho;
let pino_verde;



let width = window.innerWidth;
let height = window.innerHeight;

function preload() {
  tabuleiro = loadImage("./assets/tabuleiro_cant_stop.png");
  pino_amarelo = loadImage("./assets/pino_amarelo.png");
  pino_vermelho = loadImage("./assets/pino_vermelho.png");
  pino_verde = loadImage("./assets/pino_verde.png");
}

function setup() {
  createCanvas(width, height);
  som = createAudio('./assets/fogo.mp3');
  som.autoplay(true);
}

function draw() {
  background(100);
  image(tabuleiro, 0, 0);
  image(pino_amarelo, (width - width) + 50, (height - height) + 650);
  image(pino_vermelho, (width - width) + 100, (height - height) + 650);
  image(pino_verde, (width - width) + 150, (height - height) + 650);
}
