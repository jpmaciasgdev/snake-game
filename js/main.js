// main.js

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

function drawSnakePart(snakePart) {
  ctx.fillStyle = "#226f54";
  ctx.strokeStyle = "#ffb703ff";
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

// Llama a tu función para dibujar la serpiente
drawSnake();
