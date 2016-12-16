export class LlamaNamer {
  static nameLlama(elementId, name) {
    let el = document.getElementById(elementId);
    el.dataset.newName = name;
  }
}