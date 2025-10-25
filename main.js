let character = document.getElementById('character');
let spike = document.getElementById('spike');
let spikeUP = document.getElementById('spikeUP');
let seagull = document.getElementById('seagull');
let gravflip = false;

//gravity toggle
function toggleGrav() {
  gravflip = !gravflip;
  character.classList.toggle('gravflip', gravflip);
}

document.addEventListener('keydown', (e) => {
  if (e.key === " ") {
    toggleGrav();
  }
});

let checkDead = setInterval(function(){
  // console.log(window.getComputedStyle(c haracter).getPropertyValue('top'));
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let characterBot = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
  let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));
  let seagullLeft = parseInt(window.getComputedStyle(seagull).getPropertyValue('left'));
  let spikeUPLeft = parseInt(window.getComputedStyle(spikeUP).getPropertyValue('left'));
  if (
  (spikeLeft < 20 && spikeLeft > 0 && characterTop >= 130) ||
  (seagullLeft < 20 && seagullLeft > 0 && characterTop >= 130) ||
  (spikeUPLeft < 20 && spikeUPLeft > 0 && characterTop <= 130)
) {
  spikeUP.style.animation = 'none';
  spikeUP.style.display = 'none';
  spike.style.animation = 'none';
  spike.style.display = 'none';
  seagull.style.animation = 'none';
  seagull.style.display = 'none';
  alert('Game Over');
}
}, 10);
