export class WithoutAutoInitialization {
  initialize() {
    // init the datepicker
    this.datepickerVM.recreate();
  }
}
