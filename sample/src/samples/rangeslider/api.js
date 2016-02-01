export class API {
  selectionStart = 50;
  selectionEnd = 60;

  getValue() {
    alert(`min: ${this.slider.value()[0]}, max: ${this.slider.value()[1]}`);
  }
}
