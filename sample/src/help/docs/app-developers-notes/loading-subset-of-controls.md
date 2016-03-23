<br>

### 2. Loading a subset of KendoUI components
<br>

This section contains additional information which we hope will be of value to Aurelia application developers using KendoUI bridge.
<br><br>

You may often want to load only a subset of the components that KendoUI bridge provides. Instead of the requirement to load them all at the bootstrap time - controlled by the following code in `main.js` class:

```
...
.plugin('aurelia-kendoui-bridge', kendo => kendo.pro())
...
```
<br><br>

If instead, you wish to use only a subset of KendoUI components - say, kendoButton and kendoGrid, you should express that by using the following pattern;

```
...
.plugin('aurelia-kendoui-bridge', kendo => kendo.kendoButton().kendoGrid())
...
```
<br><br>

#### Special functions

`.kendoTemplateSupport()` - will load the `<k-template>` custom element necessary for custom templates in a Kendo control.

`.useValueConverters();` - will load the value convertes around useful Kendo functions. **[This sample](#/samples/valueconverters)** demonstrates these value converters.
<br><br>

#### Mobile applications
More information about mobile applications with Kendo controls can be found on [this website](http://www.kendouimobileguide.com/)
