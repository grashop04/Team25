let character = document.getElementById('character');
let spike = document.getElementById('spike');
let seagull = document.getElementById('seagull');
let gravflip = false;

function toggleGrav() {
  gravflip = !gravflip;
  character.classList.toggle('gravflip', gravflip);
}

document.addEventListener('keydown', (e) => {
  if (e.key === " ") {
    toggleGrav();
  }
});

function resetGame() {
      setTimeout(() => location.reload(), 50);
}
 
function showCustomAlert() {
            const message = "Game Over";
            const buttonText = "Restart Game";
            const alertBox = document.getElementById('customAlert');
            const alertMessage = document.getElementById('alertMessage');
            const customButton = document.getElementById('customButton');

            // Set the message and button label
            alertMessage.innerText = message;
            customButton.innerText = buttonText;

            // Show the custom alert box
            alertBox.style.display = 'block';

            // Handle button click
            customButton.addEventListener('click', function () {
                alertBox.style.display = 'none'; // Hide the alert box
                resetGame();
            });
        }


    
       
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
  showCustomAlert()
}
}, 10);
