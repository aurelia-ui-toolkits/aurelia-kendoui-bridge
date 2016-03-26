<br>

### 3. Lazy loading wrappers
<br>

There are two ways of pulling in the wrappers that you need: via the plugin configuration callback ([globalResources](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.1.4/doc/api/class/FrameworkConfiguration) equivalent) or `<require>` wrappers in a view.

<br>
#### 3.1 Plugin configuration callback

You may have the following line in `main.js`:

`.plugin('aurelia-kendoui-bridge', kendo => kendo.pro())`
<br>

This tells the plugin to load all Kendo PRO wrappers and register them globally (using the [globalResources](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.1.4/doc/api/class/FrameworkConfiguration) functionality of the Aurelia framework). That way, you can use these wrappers in any view without having to pull them in. This approach is recommended if you use a subset of Kendo controls (see the "Loading subset of controls" article), and when you use wrappers in many different views.

<br>
#### 3.2 `<require>` wrappers in views

A different approach is to `<require>` wrappers in views where needed. This is a more efficient way than using the plugin configuration callback as it does not increase the load time of the entire app, however, pulling in the wrappers via `<require>` takes more work to get right.

This is how you would `<require>` the grid wrapper in a view:


```
<require from="aurelia-kendoui-bridge/grid/grid"></require>
<require from="aurelia-kendoui-bridge/grid/col"></require>
<require from="aurelia-kendoui-bridge/common/template"></require>
```
<br>

Note that you need to know the location of the wrappers. These paths can be found in the [config-builder.js](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/blob/master/src/config-builder.js) file of our plugin.
