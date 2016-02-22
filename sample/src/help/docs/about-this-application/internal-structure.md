<br>

### 4. Application's internal structure

<a name="anch1"></a>This article presents the overview of the internal organization of the **[Aurelia-KendoUI-Bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge)** project developed by the team of Aurelia UI Toolkits organization, dedicated to help  Aurelia's wide spread adoption .

The internal organization of this plugin is slightly different (we believe that it is more convenient) than Aurelia's **[standard plugin](https://github.com/aurelia/skeleton-plugin)**. Image 1 below, shows the overall structure.
<br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/13234138/37a07b16-d985-11e5-86e7-ce377b53519e.png"></img>
 <br><br>
 Image 1
</p>

The following three sections describe the details of the plugin structure and building process


* * *

#### 3.1 Plugin code

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/13234202/944b8036-d985-11e5-871c-524ef5b3b629.png"></img>
<br>
Image 2
</p>
<br>

The plugin's **`src`** folder contains the **`common`**  subfolder with utilities used by more than one KendoUI controls "wrapped" by this plugin. In addition to the just described utility of the **`common`** folder, the **`src`** folder contains a subfolder for each of the KendoUI control that is wrapped (componentized) by this plugin. The above screenshot indicates that the version of the plugin shown on the Image 2 wraps KendoUI **autocomplete**, **button**, **calendar**, **chart**, **colorpalette**, **colorpicker**, **combobox**, **datepicker**, **datetimepicker**, **dropdownlist**, **editor**, **flatcolorpicker**, **grid**,  **listview**, **map**, **maskedtextbox**, **menu**, **numerictextbox**, **panelbar**, **progressbar**, **rangeslider**, **scheduler**, **slider**, **timepicker**, **toolbar**, **treelist**, **treeview** and **valueconverters** controls.
<br>

**Note:** The existence of the **tabstrip** folder in the plugin's **src** folder on Image 2 does not imply that the **[KendoUI tabstrip controler](http://demos.telerik.com/kendo-ui/tabstrip/index)** is already implemented (in this specific case it indicates that the skeleton sets of files is created in anticipation of the implementation start date).
<br><br>

The code in the plugin (which is the JavaScript equivalent of the more general concept of **[dynamic linker](https://en.wikipedia.org/wiki/Dynamic_linker))** defines its content via the `config-builder.js` file, being subsequently processed by the `index.js` file, shown further below.
<br><br>

##### File `config-builder.js`

```javascript
/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoCombobox()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoFlatColorPicker()
      .kendoListView()
      .kendoMap()
      .kendoMaskedTextBox()
      .kendoMenu()
      .kendoNumericTextBox()
      .kendoPanelBar()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoSlider()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .useValueConverters();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoAutoComplete()
      .kendoChart()
      .kendoEditor()
      .kendoGrid()
      .kendoScheduler()
      .kendoTreeList()
      .kendoTreeView();
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

  /**
  * Registers value converters (wrappers around kendo functions)
  */
  useValueConverters(): KendoConfigBuilder {
    this.resources.push('valueconverters/valueconverters');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push('common/k-template');
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

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push('calendar/calendar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push('colorpalette/colorpalette');
    return this;
  }
  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push('datetimepicker/datetimepicker');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push('editor/editor');
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push('flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/k-col');
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push('listview/listview');
    this.resources.push('listview/k-list-template');
    this.resources.push('listview/k-list-edit-template');
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push('map/map');
    return this;
  }


  kendoMenu(): KendoConfigBuilder {
    this.resources.push('menu/menu');
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push('maskedtextbox/maskedtextbox');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push('panelbar/panelbar');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push('treelist/treelist');
    this.resources.push('treelist/k-tree-col');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('treeview/treeview');
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push('timepicker/timepicker');
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push('rangeslider/rangeslider');
    return this;
  }
}

```
<br>

##### File `index.js`

```javascript
import * as LogManager from 'aurelia-logging';
let logger = LogManager.getLogger('aurelia-kendoui-bridge');
import {KendoConfigBuilder} from './config-builder';
import 'jquery';

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

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

```
<br>
**Note** that these two files define the controls that are really available to Aurelia developers.

<br><br>

Let's also show the actual Aurelia plugin implementation of one of the simplest KendoUI controls - `autocomplete`
<br><br>
##### File `autocomplete.js`

```javascript
import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.autocomplete.min';
import 'kendo.virtuallist.min';

@customAttribute(`${constants.attributePrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase)
export class AutoComplete {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .useValueBinding();
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
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
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
  <img src="https://cloud.githubusercontent.com/assets/2712405/13235024/baa163d2-d989-11e5-9f41-b23f511409cc.png"></img>
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

#### Aurelia-KendoUI bridge catalog application showing the KendoUI Autocomplete control:

<br>
<br>
<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/13236222/173887fe-d991-11e5-936b-5016e562d76d.png"></img>
  <br>
  Image 4
</p>





































<p align=center>
  <img src=""></img>
</p>
