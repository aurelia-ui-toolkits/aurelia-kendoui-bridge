export class Api {
  resizable = {
    content: false,
    toolbar: true
  };

  getValue() {
    alert(`${this.editor.value()}`);
  }

  setValue() {
    this.editor.value(this.setValueText);
  }
}
