import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.numerictextbox.min';

@customAttribute('k-numerictextbox')
@inject(Element)
@generateBindables('kendoNumericTextBox')
export class NumericTextBox extends WidgetBase {

    @bindable kValue;
    @bindable options = {};

    constructor(element) {
      super('kendoNumericTextBox', element);
    }

    bind(ctx) {
      super.bind(ctx);

      this._initialize();
    }

    destroy() {
      if (this.widget) {
        return this.widget.destroy();
      }
    }

    enable(newValue) {
      if (this.widget) {
        this.widget.enable(newValue);
      }
    }

    readonly(value) {
      if (this.widget) {
        this.widget.readonly(value);
      }
    }

    focus() {
      if (this.widget) {
        this.widget.focus();
      }
    }

    max(value) {
      if (this.widget) {
        return this.widget.max(value);
      }
    }

    min(value) {
      if (this.widget) {
        return this.widget.min(value);
      }
    }

    step(value) {
      if (this.widget) {
        return this.widget.step(value);
      }
    }

    value(newValue) {
      if (this.widget) {
        if (newValue) {
          this.widget.value(newValue);
        } else {
          return this.widget.value();
        }
      }
    }

    kValueChanged() {
      if (this.widget) {
        this.widget.value(this.kValue);
      }
    }
}
