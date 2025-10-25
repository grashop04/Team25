let character = document.getElementById('character');
let gravflip = false;
let score = 0;
const game = document.getElementById('game');


function spikeGen() {
  return setInterval(() => {
    const count = 1 + Math.floor(Math.random() * 5); 
    for (let i = 0; i < count; i++) {
      const spi = document.createElement('div');
      spi.className = 'spike';
      spi.style.animationDelay = (Math.random() * 1.2) + 's';
      game.appendChild(spi);
      spi.addEventListener('animationiteration', () => spi.remove(), { once: true });
    }
  }, 4000);
}

const startGen = spikeGen();

function seagullGen() {
  return setInterval(() => {
    const count = 1 + Math.floor(Math.random() * 5); 
    for (let i = 0; i < count; i++) {
      const sea = document.createElement('div');
      sea.className = 'seagull';
      sea.style.animationDelay = (Math.random() * 1.2) + 's';
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


let scoreKeeper = setInterval(function(){
  score += 5
},200);


//let checkDead = setInterval(
//}, 10);
