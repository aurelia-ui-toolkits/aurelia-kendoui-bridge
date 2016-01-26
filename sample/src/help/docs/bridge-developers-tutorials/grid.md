<br>

### 6. Grid
<br>

This wrapper encapsulates the KendoUI module `kendo.grid.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/6._grid_component)** and **[here](#/samples/grid)**.
<br>

File `grid.js`
<br>
```javascript
import {inject, children, customElement, bindable} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element, WidgetBase)
export class Grid  {

  @children('k-col') columns;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    this.recreate();
  }

  recreate() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

```
<br>

File `grid.html.js`
<br>
```HTML
<template>
  <content></content>
</template>
```
<br>

File `k-col`.js
<br>
```javascript
import {inject, noView, processContent, bindable, TargetInstruction} from 'aurelia-framework';

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
export class AuCol {
  @bindable aggregates;
  @bindable attributes;
  @bindable columns;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable groupable;
  @bindable groupFooterTemplate;
  @bindable groupHeaderTemplate;
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable hidden;
  @bindable lockable;
  @bindable locked;
  @bindable menu;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable title;
  @bindable values;
  @bindable width;
  @bindable template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Next actions](#/help/docs/bridge_developers_tutorials/7._next_actions)
