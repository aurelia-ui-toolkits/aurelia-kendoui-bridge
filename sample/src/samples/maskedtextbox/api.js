export class API {
    constructor() {

    }

    setValue() {
      this.maskedtextbox.value(this.valueTextBox.value());
    }

    getValue() {
      alert(this.maskedtextbox.value());
    }

    enable() {
      this.maskedtextbox.enable();
    }

    disable() {
      this.maskedtextbox.enable(false);
    }

    readonly() {
      this.maskedtextbox.readonly();
    }
}
