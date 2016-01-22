<br>

### 4. Application's internal structure

<a name="anch1"></a>This article presents the overview of the internal organization of the **[Aurelia-KendoUI-Bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge)** project developed by the team of Aurelia UI Toolkits organization, dedicated to help  Aurelia's wide spread adoption .

The internal organization of this plugin is slightly different (we believe that it is more convenient) than Aurelia's **[standard plugin](https://github.com/aurelia/skeleton-plugin)**. Image 1 below, shows the overall structure.
<br>

<p align=center>
  <img src="http://i.imgur.com/Iw2OYhW.png"></img>
 <br><br>
 Image 1
</p>

The following three sections describe the details of the plugin structure and building process


* * *

#### 3.1 Plugin code

<p align=center>
  <img src="http://i.imgur.com/wTke9cT.png"></img>
<br>
Image 2
</p>
<br>

The plugin's **`src`** folder contains the **`common`**  subfolder with utilities used by more than one KendoUI controls "wrapped" by this plugin. In addition to the just described utility of the **`common`** folder, the **`src`** folder contains a subfolder for each of the KendoUI control that is wrapped (componentized) by this plugin. The above screenshot indicates that the version of the plugin shown on the Image 2 wraps KendoUI **autocomplete**, **button**, **chart**, **colorpicker**, **combobox**, **dropdownlist**, **grid**, **menu**, **progressbar**, **scheduler**, **slider**, **tabstrip** and **toolbar** controls.
<br>

**Note:** The existence of the **scheduler** folder in the plugin's **src** folder on Image 2 does not imply that the **[KendoUI scheduler controler](http://demos.telerik.com/kendo-ui/scheduler/index)** is already implemented (in this specific case it indicates that the skeleton sets of files is created in anticipation of the implementation start date).
<br><br>

The code in the plugin (which is the JavaScript equivalent of the more general concept of **[dynamic linker](https://en.wikipedia.org/wiki/Dynamic_linker))** defines its content via the `index.js` file
<br>

##### File `index.js`

```javascript
import {Aurelia} from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
let logger = LogManager.getLogger('aurelia-kendoui-bridge');
import {KendoConfigBuilder} from './config-builder';
import 'jquery';

export function configure(aurelia: Aurelia, configCallback?: (builder: KendoConfigBuilder) => void) {
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

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoGrid()
			.kendoAutoComplete()
      .kendoChart();
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): KendoConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('button/button');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }
}
```
<br>

**Note** that this file defines the controls that are really available to Aurelia developers.

<br><br>

Let's also show the actual Aurelia plugin implementation of one of the simplest KendoUI controls - `autocomplete`
<br><br>
##### File `autocomplete.js`

```javascript
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-autocomplete')
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase)
export class AutoComplete {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.kWidget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.kWidget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

```

* * *
<br>
#### 3.2 Sample Application that acts as the Plugin consumer
<br>

As [mentioned before](#anch1) Aurelia-KendoUI plugin project has a special structure, with the plugin consumer application being a part of the same project (see the content of the blue rectangle on the image 3 below)

<p align=center>
  <img src="http://i.imgur.com/EYwwqhY.png"></img>
  <br><br>
  Image 3
</p>
<br>

#### Color codes:
&nbsp; &nbsp; &nbsp; - **yellow**:  application runtime created by running the **`jspm install`** command in the **`aurelia-kendoui-bridge/sample`** folder

&nbsp; &nbsp; &nbsp; - **orange**: KendoUI controls hosted by this sample app (these controls are the consumers of the Aurelia-KendoUI-bridge)

&nbsp; &nbsp; &nbsp; - **bluish**: Standard Aurelia application files collection

&nbsp; &nbsp; &nbsp; - **olive**: Standard Aurelia application configuration/ css / html / js files

<br><br><br>

#### Sample application showing the KendoUI Autocomplete control:


**Note**: for better visibility this screenshot is rendered using the Moonlight theme
<br>
<br>
<p align=center>
  <img src="http://i.imgur.com/No27AA9.png"></img>
  <br>
  Image 4
</p>





































<p align=center>
  <img src=""></img>
</p>
