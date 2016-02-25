<br>

### 6. Grid
<br>

This wrapper encapsulates the KendoUI module `kendo.grid.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/6._grid_component)** and **[here](#/samples/grid)**.
<br><br>

#### File `grid.html`

```HTML
<template>
  <content></content>
</template>
```
<br>

#### File `grid.js`

```javascript
import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import 'kendo.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder)
export class Grid  {

  @children(`${constants.elementPrefix}col`) columns;
  @bindable options = {};

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GridColumn'));
      });
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

#### File `k-col.html`

```HTML
<template>
  <content></content>
</template>
```
<br>

#### File `k-col`.js

```javascript
import {children, customElement} from 'aurelia-templating';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {useTemplates} from '../common/util';

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
export class Col {
  @children(`${constants.elementPrefix}template`) templates;

  bind() {
    useTemplates(this, 'GridColumn', this.templates);
  }
}

```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Next actions](#/help/docs/bridge_developers_tutorials/7._next_actions)
