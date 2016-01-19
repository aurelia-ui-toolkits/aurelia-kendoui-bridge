export class API {
    constructor() {

    }

    setValue() {
      this.numerictextbox.value(this.valueNumerictextbox.value());
    }

    getValue() {
      alert(this.numerictextbox.value());
    }

    enable() {
      this.numerictextbox.enable();
    }

    disable() {
      this.numerictextbox.enable(false);
    }

    readonly() {
      this.numerictextbox.readonly();
    }

    focus() {
      this.numerictextbox.focus();
    }
}