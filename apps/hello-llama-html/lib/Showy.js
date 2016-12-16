export class Showy {
  constructor() {
    this.timer = null;
  }

  static startTimer(elementName) {
    let showy, showyText, showyWidth;

    showy = document.getElementById(elementName);
    showy.style.display = 'block';
    showy.style.height = showy.offsetHeight;

    if (!showy.dataset.newName) {
      showy.dataset.newName = showy.innerText;
    }

    let timerLength = Math.floor((showy.dataset.newName.length * 1000) / 3);

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

          if (loopCount < 1 || loopCount > 3) {
            loopCount = 1;
          }

          showy.classList.add('color-' + loopCount);
          loopCount++;

          showyTimer();
        }
      }, timerLength / showyText.length);
    };

    let startTimer = () => {
      "use strict";
      showy.innerText = '';
      showyTimer();
    };

    this.timer = setInterval(() => {
      "use strict";

      if (showy.dataset.newName) {
        showyText = showy.dataset.newName;
        delete(showy.dataset.newName);
      }
      startTimer();
    }, timerLength + 1000);
  }

  static stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}