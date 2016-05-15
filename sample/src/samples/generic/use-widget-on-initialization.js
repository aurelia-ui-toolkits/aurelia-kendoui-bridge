import {delayed} from 'aurelia-kendoui-bridge/common/decorators';

export class UseWidgetOnInitialization {
  // kendo controls aren't ready yet in the attached() callback
  // so the @delayed() decorator delays the execution allowing you to
  // use the kendo control inside attached()
  @delayed()
  attached() {
    this.datepicker.value(new Date(2010, 1, 1));
  }
}
