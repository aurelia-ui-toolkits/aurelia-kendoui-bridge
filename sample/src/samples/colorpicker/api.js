export class Api {
  color = '#fff';

  setColor(value) {
    try {
      this.colorPicker.value(value);
    } catch (e) {
      alert(e);
    }
  }

  getColor() {
    alert(this.colorPicker.value());
  }
}
