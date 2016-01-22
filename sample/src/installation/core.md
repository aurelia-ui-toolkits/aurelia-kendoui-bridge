<br>

### KendoUI Core

1. Install KendoUI Core and the aurelia-kendoui-plugin by issuing the command:
`jspm install kendo-ui aurelia-kendoui-plugin`


2. Open `config.js` and add a couple of path mappings:

```
paths: {
  "*": "dist/*",
  "github:*": "jspm_packages/github/*",
  "npm:*": "jspm_packages/npm/*",
  "kendo.*": "jspm_packages/kendo/bower-kendo-ui@2016.1.120/js/kendo.*.js"    <----
},
"map": {
  "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
  "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
  "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
  "jquery": "npm:jquery@2.2.0",
  "jquery.min": "npm:jquery@2.2.0"          <----
}
```

3. Register the plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which Kendo controls you wish to use. You can use all controls in Kendo UI Core by calling the `core()` method
<br>
    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.core());

      aurelia.start().then(a => a.setRoot());
    }
    ```
<br><br>

4. Now let's open up "app.html" and load Kendo's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.core.min.css!"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css!"></require>
    ```

<br>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**We recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._what_you_need_to_know) in order to get started**
