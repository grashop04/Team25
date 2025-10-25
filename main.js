let character = document.getElementById('character');
let spike = document.getElementById('spike');
let seagull = document.getElementById('seagull');
let gravflip = false;
let score = 0;


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


let checkDead = setInterval(function(){
  // console.log(window.getComputedStyle(c haracter).getPropertyValue('top'));
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let characterBot = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
  let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue('left'));
  let seagullLeft = parseInt(window.getComputedStyle(seagull).getPropertyValue('left'));

  if (
  (spikeLeft < 20 && spikeLeft > 0 && characterTop >= 580) ||
  (seagullLeft < 20 && seagullLeft > 0 && ((characterTop <= 320 && characterTop >= 300) || (characterBot <=320 && characterBot >= 300)))
) {
  spike.style.animation = 'none';
  spike.style.display = 'none';
  seagull.style.animation = 'none';
  seagull.style.display = 'none';
  alert(score);
}
}, 10);
