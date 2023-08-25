const jorgeElement = document.getElementById('jorge');
const stephanieElement = document.getElementById('stephanie');

let jorgeXSpeed = 2;
let jorgeYSpeed = 2;
let stephanieXSpeed = 1.5;
let stephanieYSpeed = 1.5;

let collisionOccurred = false;

// Posiciones iniciales aleatorias
let jorgeX = Math.random() * (window.innerWidth - jorgeElement.clientWidth);
let jorgeY = Math.random() * (window.innerHeight - jorgeElement.clientHeight);
let stephanieX = Math.random() * (window.innerWidth - stephanieElement.clientWidth);
let stephanieY = Math.random() * (window.innerHeight - stephanieElement.clientHeight);

function checkCollision() {
  const jorgeRect = jorgeElement.getBoundingClientRect();
  const stephanieRect = stephanieElement.getBoundingClientRect();

  if (
    jorgeRect.left < stephanieRect.right &&
    jorgeRect.right > stephanieRect.left &&
    jorgeRect.top < stephanieRect.bottom &&
    jorgeRect.bottom > stephanieRect.top
  ) {
    if (!collisionOccurred) {
      alert('Me debes unas gomitas :3 ');
      collisionOccurred = true;
      document.body.style.backgroundColor = 'green'; // Cambiar a verde cuando colisionan
    }
  } else {
    collisionOccurred = false;
    document.body.style.backgroundColor = 'gray'; // Cambiar a gris cuando no colisionan
  }
}

function animateNames() {
  const maxX = window.innerWidth - jorgeElement.clientWidth;
  const maxY = window.innerHeight - jorgeElement.clientHeight;

  jorgeX += jorgeXSpeed;
  jorgeY += jorgeYSpeed;

  stephanieX += stephanieXSpeed;
  stephanieY += stephanieYSpeed;

  if (jorgeX <= 0 || jorgeX >= maxX) {
    jorgeXSpeed *= -1;
  }

  if (jorgeY <= 0 || jorgeY >= maxY) {
    jorgeYSpeed *= -1;
  }

  if (stephanieX <= 0 || stephanieX >= maxX) {
    stephanieXSpeed *= -1;
  }

  if (stephanieY <= 0 || stephanieY >= maxY) {
    stephanieYSpeed *= -1;
  }

  jorgeElement.style.left = jorgeX + 'px';
  jorgeElement.style.top = jorgeY + 'px';

  stephanieElement.style.left = stephanieX + 'px';
  stephanieElement.style.top = stephanieY + 'px';

  checkCollision();

  requestAnimationFrame(animateNames);
}

animateNames();
