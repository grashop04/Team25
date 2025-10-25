let character = document.getElementById('character');
let spike = document.getElementById('spike');
let seagull = document.getElementById('seagull');
const jump = function() {
  if(character.classList !== 'animate'){
    character.classList.add('animate');
  }
  setTimeout(function(){
    character.classList.remove('animate');
  }, 1000);
}

document.addEventListener('keydown', (e) =>{ 
    if(e.key === " ") {
        jump();
    }
});

let checkDead = setInterval(function(){
  // console.log(window.getComputedStyle(c haracter).getPropertyValue('top'));
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));
  let seagullLeft = parseInt(window.getComputedStyle(seagull).getPropertyValue('left'));
  if(spikeLeft<20 && spikeLeft > 0 && characterTop >= 130){
    spike.style.animation = 'none';
    spike.style.display = 'none';
    alert('Game Over');
  }
  if(seagullLeft<20 && seagullLeft > 0 && characterTop >= 130){
    seagull.style.animation = 'none';
    seagull.style.display = 'none';
    alert('Game Over');
  }
}, 10);
