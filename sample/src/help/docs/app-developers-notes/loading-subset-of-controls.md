<br>

### 2. Loading subset of controls
<br>

You may want to load only a subset of the controls Kendo provide. This is possible with the aurelia-kendoui-bridge.

When you do the following in `main.js`:

`.plugin('aurelia-kendoui-bridge', kendo => kendo.pro())`

By calling the bridge's `pro()` function, it will assume you want to use the entire Kendo library and load all necessary files from the bridge and from Kendo.

Instead of calling the `.pro()` function, a builder pattern can be used here:

`.plugin('aurelia-kendoui-bridge', kendo => kendo.kendoButton().kendoGrid())`

Notice that instead of calling the `pro()` function, we tell the plugin to load only the button and the grid.

<br>
#### Special functions
<br>

`.kendoTemplateSupport()` - will load the `<ak-template>` custom element necessary for custom templates in a Kendo control.

`.useValueConverters();` - will load the value convertes around useful Kendo functions ([link](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/valueconverters)).
