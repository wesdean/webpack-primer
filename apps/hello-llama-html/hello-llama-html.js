import {FloatingLlama} from './FloatingLlama';

let floatingLlama = new FloatingLlama(document.getElementById('shangri-llama'));
floatingLlama.float();

let showy = document.getElementById('showy');
showy.style.display = 'inline-block';
let showyWidth = showy.offsetWidth;
showy.style.width = showyWidth;

let showyText = showy.innerText;
let timerLength = 3000;

let loopCount = 1;

let showyTimer = () => {
  "use strict";

  setTimeout(() => {
    "use strict";

    if (showy.innerText.length < showyText.length) {
      showy.innerText += showyText[showy.innerText.length];

      showy.classList.remove('color-1');
      showy.classList.remove('color-2');
      showy.classList.remove('color-3');

      if(loopCount < 1 || loopCount > 3) {
        loopCount = 1;
      }

      showy.classList.add('color-' + loopCount);
      loopCount++;

      showyTimer();
    }
  }, timerLength / showyText.length);
};

setInterval(() => {
  "use strict";
  showy.innerText = '';
  showyTimer();
}, timerLength + 1000);