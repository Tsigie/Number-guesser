/*
GAME EUNCTION

*/

// Game values
let min = 1,
max = 10,
winningNum = 2,
guesserLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

      // Assigns UI min and max
      minNum.textContent = min;
      maxNum.textContent = max;

      // Listen for guess
      guessBtn.addEventListener('click', function(){
          let guess = parseInt(guessInput.value);

          // Validate
          if(guess ===)
      });


