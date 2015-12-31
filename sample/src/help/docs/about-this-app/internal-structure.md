### Introduction

This article presents the overview of the internal organization of the **[Aurelia-KendoUI-Bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** project developed by the team of Aurelia UI Toolkits organization, dedicated to ensure Aurelia's wide spread adoption it deserves.

Understanding Aurelia-KendoUI-Bridge is the very first prerequisite to your learning path on **how to use** this bridge in the process of building the state of the art user interface. More about using the bridge can be found in the **About KendoUI bridge** section of this collection of help documents.

If your intent is to learn about **Extending KendoUI bridge** - by joining the Aurelia UI Toolkits organization to implement all currently missing controls, check first the **[project status](http://aurelia-ui-toolkits.github.io/demo-kendo/#/project-status)** page where finished controls are tagged blue, and controls under development orange and then proceed by reading the articles in the **About KendoUI bridge** section.

* * *

### Application's internal structure

<a name="anch1"></a>The internal organization of this plugin is slightly different (we believe that it is more convenient) than Aurelia's **[standard plugin](https://github.com/aurelia/skeleton-plugin)**. Image 1 below, shows the overall structure.
<br>

<p align=center>
  <img src="http://i.imgur.com/Iw2OYhW.png"></img>
 <br><br>
 Image 1
</p>

The following three sections describe the details of the plugin structure and building process


----------

#### Section 1 - Plugin code

<p align=center>
  <img src="http://i.imgur.com/wTke9cT.png"></img>
<br>
Image 2
</p>

The plugin's **`src`** folder contains the **`common`**  subfolder with utilities used by more than one KendoUI controls "wrapped" by this plugin. In addition to the just described utility of the **`common`** folder, the **`src`** folder contains a subfolder for each of the KendoUI control that is wrapped (componentized) by this plugin. The above screenshot indicates that the current version of the plugin wraps KendoUI **autocomplete**, **button**, **chart**, **colorpicker**, **combobox**, **dropdownlist**, **grid**, **menu**, **progressbar**, **scheduler**, **slider**, **tabstrip** and **toolbar** controls.

**Note:** The existence of the **scheduler** folder in the plugin's **src** folder on Image 2 does not imply that the **[KendoUI scheduler controler](http://demos.telerik.com/kendo-ui/scheduler/index)** is already implemented (in this specific case it indicates that the skeleton sets of files is created in anticipation of the implementation start date).

The code in the plugin (which is the JavaScript equivalent of the more general concept of **[dynamic linker](https://en.wikipedia.org/wiki/Dynamic_linker)** defines its content via the `index.js` file

##### File `index.js`

```javascript
import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.pdf.min';
import 'kendo-ui/js/jszip.min';
let logger = LogManager.getLogger('aurelia-kendoui-plugin');

export function configure(aurelia, configCallback) {
  let builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Provide core if nothing was specified
  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

    // Pull the data off the builder
  let resources = builder.resources;

  aurelia.globalResources(resources);
}

class KendoConfigBuilder {

	resources = [];

  core() {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList();
    return this;
  }

  pro() {
    this.core()
      .kendoGrid()
			.kendoAutoComplete()
      .kendoChart();
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('button/button');
    return this;
  }

  kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  }

  kendoColorPicker() {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }
}
```

**Note** that this file defines the controls that are really available to Aurelia developers.

<br><br>

Let's also show the actual Aurelia plugin implementation of one of the simplest KendoUI controls - `autocomplete`
<br><br>
##### File `autocomplete.js`

```javascript
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {fireEvent, TemplateCompiler, WidgetBase, generateBindables} from '../common/index';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-autocomplete')
@inject(Element, TemplateCompiler)
@generateBindables('kendoAutoComplete')
export class AutoComplete extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable value;

  constructor(element, templateCompiler) {
    super('kendoAutoComplete', element);
    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  setValue(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  }

  getValue(newValue) {
    if (this.widget) {
      return this.widget.value();
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  }
}

```

* * *
<br>
### Section 2 Sample Application that acts as the Plugin consumer
<br>

As [mentioned before](#anch1) Aurelia-KendoUI plugin project has a special structure, with the plugin consumer application being a part of the same project (see the content of the blue rectangle on the image 3 below)

<p align=center>
  <img src="http://i.imgur.com/EYwwqhY.png"></img>
  <br>
  Image 3
</p>
##### Color codes:
- **yellow**:  application runtime created by running the **`jspm install`** command in the **`aurelia-kendoui-plugin/sample`** folder
- **orange**: KendoUI controls hosted by this sample app (these controls are the consumers of the Aurelia-KendoUI-plugin)
- **bluish**: Standard Aurelia application files collection
- **olive**: Standard Aurelia application configuration/ css / html / js files
<br><br><br>

#### Sample application showing the KendoUI Autocomplete control:


**Note**: for better visibility this screenshot is rendered using the Moonlight theme

<p align=center>
  <img src="http://i.imgur.com/No27AA9.png"></img>
  <br>
  Image 4
</p>

* * *




































<p align=center>
  <img src=""></img>
</p>
