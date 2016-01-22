<br>

### 5. Chart
<br>

This wrapper encapsulates the KendoUI module `kendo.chart.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/5._chart_component)** and **[here](#/samples/chart)**.
<br>

File `chart.js`
<br>
```javascript
import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.dataviz.chart.min';
import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';

@customElement('k-chart')
@generateBindables('kendoChart')
@inject(Element, WidgetBase)
export class Chart {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoChart')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

```
<br>

File `chart.html`
<br>
```html
<template style="display: block;">
</template>
```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Grid component](#/help/docs/bridge_developers_tutorials/6._grid_component)
