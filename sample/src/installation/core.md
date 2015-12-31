### Core

1. Install Kendo UI Core and the aurelia-kendoui-plugin
`jspm install kendo-ui aurelia-kendoui-plugin`

2. Register the plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which Kendo controls you wish to use. You can use all controls in Kendo UI Core by calling the `core()` method

    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.core());

      aurelia.start().then(a => a.setRoot());
    }
    ```

3. Now let's open up "app.html" and load Kendo's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.core.min.css"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css"></require>
    ```


### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.
