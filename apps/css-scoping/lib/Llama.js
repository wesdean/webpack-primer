export class Llama {
  constructor(llamaId, llamaClasses) {
    let llamaEl = document.getElementById(llamaId);
    if (llamaEl) {
      console.log(llamaId);
      console.log(llamaClasses);
      if (llamaClasses && llamaClasses.llama) {
        llamaEl.classList.add(llamaClasses.llama);
      }
    }
  }
}