import {bindable, customElement} from 'aurelia-templating';

@customElement('api')
export class API {
  @bindable control;

  controlChanged() {
    console.log(this.control);
  }
}
