export class API {
    constructor() {

    }

    setValue() {
      this.timepicker.value(this.valueTimePicker.value());
    }

    getValue() {
      alert(this.timepicker.value());
    }

    open() {
      this.timepicker.open();
    }

    close() {
      this.timepicker.close();
    }

    enable() {
      this.timepicker.enable();
    }

    disable() {
      this.timepicker.enable(false);
    }

    readonly() {
      this.timepicker.readonly();
    }
}
