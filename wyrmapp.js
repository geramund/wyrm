const field = document.querySelector('.field');
let scoreCounter = document.querySelector('.score-counter');
let score = 0;

setInterval(() => {
  const isWeed = Math.random() < 0.9;
  const newElement = document.createElement('div');
  newElement.classList.add(isWeed ? 'weed' : 'rock');
  newElement.style.left = `${Math.random() * 100}vw`;
  newElement.style.top = `${Math.random() * 100}vh`;

  field.appendChild(newElement);

  newElement.addEventListener('click', () => {
    if (isWeed) {
      field.removeChild(newElement);
      score += 1;
      scoreCounter.textContent = `Score: ${score}`;
    } else {
      newElement.classList.add('revealed');
    }
  });
}, 1000);

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

canvas.addEventListener('mousedown', () => {
  drawing = true;
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}