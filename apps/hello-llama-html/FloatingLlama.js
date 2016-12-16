export class FloatingLlama {
  constructor(element) {
    this.element = element;
    this.element.style.position = 'absolute';

    this.originalPosition = this.getPosition();
    this.originalSize = this.getSize();
    this.direction = {
      x: 1,
      y: 1
    };

    this.floatInterval = null;
    this.floatTimer = null;
    this.floatSpeed = null;
    this.floatStep = {
      x: 5,
      y: 5
    };
    this.floatMax = {
      x: 100,
      y: 100
    };
  }

  float(speed = 100, delay = 1000) {
    this.floatSpeed = speed;

    this.floatTimer = setTimeout(() => {
      this.floatInterval = setInterval(() => {
        this.movePosition();
      });
    }, delay);
  }

  movePosition() {
    this.floatTimer = setTimeout(() => {
      let currentPosition = this.getPosition();

      if (currentPosition.left >= (this.originalPosition.left + this.floatMax.x)) {
        this.direction.x = -1;
      }
      else if (currentPosition.left <= this.originalPosition.left) {
        this.direction.x = 1;
      }

      this.element.style.left = currentPosition.left + (this.floatStep.x * this.direction.x);
      console.log('Left: ' + this.element.style.left + ' [' + (this.originalPosition.left + this.floatMax.x) + ']');

      if (currentPosition.left >= (this.originalPosition.left + this.floatMax.x)) {
        this.direction.x = -1;
      }
      else if (currentPosition.left <= this.originalPosition.left) {
        this.direction.x = 1;
      }

      if (currentPosition.top >= (this.originalPosition.top + this.floatMax.y)) {
        this.direction.y = -1;
      }
      else if (currentPosition.top <= this.originalPosition.top) {
        this.direction.y = 1;
      }

      this.element.style.top = currentPosition.top + (this.floatStep.y * this.direction.y);
      console.log('Top: ' + this.element.style.top + ' [' + (this.originalPosition.top + this.floatMax.y) + ']');

      this.movePosition();
    }, this.floatSpeed);
  }

  getPosition() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }

  getSize() {
    return {
      width: this.element.offsetWidth,
      height: this.element.offsetHeight
    };
  }
}