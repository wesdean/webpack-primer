// require('./styles/hello-llama.css');
// require('./styles/buttons.css');
//
// import {LlamaNamer} from './lib/LlamaNamer';
// import {Showy} from './lib/Showy';


let stopButton = document.getElementById('stop-button');
let startButton = document.getElementById('start-button');
if (typeof Showy !== 'undefined') {
  Showy.startTimer('showy');

  stopButton.onclick = (event) => {
    "use strict";
    event.preventDefault();

    Showy.stopTimer();
  };

  startButton.onclick = (event) => {
    "use strict";
    event.preventDefault();

    Showy.startTimer('showy');
  };
}
else {
  stopButton.style.display = 'none';
  startButton.style.display = 'none';
}

let nameLlamaForm = document.getElementById('name-llama-form');
if (typeof LlamaNamer !== 'undefined') {
  nameLlamaForm.onsubmit = (event) => {
    "use strict";

    event.preventDefault();

    let nameEl = document.getElementById('llama-name');
    LlamaNamer.nameLlama('showy', nameEl.value);
  };
} else {
  nameLlamaForm.style.display = 'none';
}