let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = '#FFE47A';
// context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();

const width = 100;
const height = 100;
const gap = 20;
let x, y;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let x = 180 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();
    if (Math.random() < 0.5) {
      context.beginPath();
      context.rect(x + 20, y + 20, width - 40, height - 40);
      context.stroke();
    }
  }
}
