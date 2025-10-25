let character = document.getElementById('character');
let gravflip = false;
let score = 0;
const scoreDisplay = document.getElementById('scoreDisplay');
const game = document.getElementById('game');


function spikeGen() {
  return setInterval(() => {
    const count = 3 + Math.floor(Math.random() * 5); 
    for (let i = 0; i < count; i++) {
      const spi = document.createElement('div');
      spi.className = 'spike';
      spi.style.animationDelay = (Math.random() * 3) + 's';
      const randomHeight = 10 + Math.random() * 200;
      spi.style.height = randomHeight + 'px';
      game.appendChild(spi);
      spi.addEventListener('animationiteration', () => spi.remove(), { once: true });
    }
  }, 4000);
}

function spikeGen2() {
  return setInterval(() => {
    const count = 3 + Math.floor(Math.random() * 5); 
    for (let i = 0; i < count; i++) {
      const spi = document.createElement('div');
      spi.className = 'spike2';
      spi.style.animationDelay = (Math.random() * 3) + 's';
      const randomHeight = 10 + Math.random() * 200;
      spi.style.height = randomHeight + 'px';
      game.appendChild(spi);
      spi.addEventListener('animationiteration', () => spi.remove(), { once: true });
    }
  }, 4000);
}

const startGen = spikeGen();
const startGen3= spikeGen2();

function seagullGen() {
  return setInterval(() => {
    const count = 3 + Math.floor(Math.random() * 5); 
    for (let i = 0; i < count; i++) {
      const sea = document.createElement('div');
      sea.className = 'seagull';
      sea.style.animationDelay = (Math.random() * 3) + 's';
      const randomBot = 150 + Math.random() * 400;
      sea.style.bottom = randomBot + 'px';
      game.appendChild(sea);
      sea.addEventListener('animationiteration', () => sea.remove(), { once: true });
    }
  }, 4000);
}

const startGen2 = seagullGen();

function toggleGrav() {
  gravflip = !gravflip;
  character.classList.toggle('gravflip', gravflip);
}

document.addEventListener('keydown', (e) => {
  if (e.key === " ") {
    toggleGrav();
  }
});

let scoreKeeper = setInterval(function () {
  score += 5;
  scoreDisplay.textContent = "Score: " + score;
}, 200);

function resetGame() {
      setTimeout(() => location.reload(), 50);
}
 
function showCustomAlert() {
            const message = "You died, you earned " +score+"score";
            const buttonText = "Restart Game";
            const alertBox = document.getElementById('customAlert');
            const alertMessage = document.getElementById('alertMessage');
            const customButton = document.getElementById('customButton');
            const hideScore=document.getElementById('scoreDisplay');
            hideScore.style.display='none';

            // Set the message and button label
            alertMessage.innerText = message;
            customButton.innerText = buttonText;

            // Show the custom alert box
            alertBox.style.display = 'block';

            // Handle button click
            customButton.addEventListener('click', function () {
                alertBox.style.display = 'none'; // Hide the alert box
                hideScore.style.display='block';
                resetGame();
            });
        }


let gameOver = false;

const HOTBOX_SHRINK = 6;

function rectHotbox(el) {
  const r = el.getBoundingClientRect();
  return {
    left:   r.left   + HOTBOX_SHRINK,
    right:  r.right  - HOTBOX_SHRINK,
    top:    r.top    + HOTBOX_SHRINK,
    bottom: r.bottom - HOTBOX_SHRINK
  };
}

function overlaps(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function pause() {
  character.style.animationPlayState = 'paused';
  document.querySelectorAll('.spike, .seagull, .spike2').forEach(el => {
    el.style.animationPlayState = 'paused';
  });
}

function die() {
  if (gameOver) return;
  gameOver = true;
  clearInterval(startGen);
  clearInterval(startGen2);
  clearInterval(startGen3);
  pause();
  showCustomAlert();
}

setInterval(function() {
  if (gameOver) return;

  const charBox = rectHotbox(character);

  const spikes = document.querySelectorAll('.spike');
  for (const s of spikes) {
    if (overlaps(charBox, rectHotbox(s))) {
      die();
      return;
    }
  }

  const seagulls = document.querySelectorAll('.seagull');
  for (const g of seagulls) {
    if (overlaps(charBox, rectHotbox(g))) {
      die();
      return;
    }
  }

  const spikes2 = document.querySelectorAll('.spike2');
  for (const t of spikes2) {
    if (overlaps(charBox, rectHotbox(t))) {
      die();
      return;
    }
  }
}, 20)
