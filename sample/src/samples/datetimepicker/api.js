export class API {
    constructor() {

    }

    setValue() {
      this.datetimepicker.value(this.valueDatePicker.value());
    }

    getValue() {
      alert(this.datetimepicker.value());
    }

    open() {
      this.datetimepicker.open();
    }

    close() {
      this.datetimepicker.close();
    }

    enable() {
      this.datetimepicker.enable();
    }

    disable() {
      this.datetimepicker.enable(false);
    }

    readonly() {
      this.datetimepicker.readonly();
    }
}