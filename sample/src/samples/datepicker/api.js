export class API {
    constructor() {

    }

    setValue() {
      this.datepicker.value(this.valueDatePicker.value());
    }

    getValue() {
      alert(this.datepicker.value());
    }

    open() {
      this.datepicker.open();
    }

    close() {
      this.datepicker.close();
    }

    enable() {
      this.datepicker.enable();
    }

    disable() {
      this.datepicker.enable(false);
    }

    readonly() {
      this.datepicker.readonly();
    }
}