## Important note

Make sure to use Kendo UI **v2016.1.118** or higher if you decided to use the third alternative **Having KendoUI already: Vendors** and you only have the KendoUI trial version. Until Telerik fixes the problem and releases a new version of the trial package, please get this **[vendors folder](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/tree/master/vendors)**.

* * *

### Vendors

1. Create a `vendors` folder in the root (at the same level as src or dist)
2. Download KendoUI Pro from the Telerik website
3. Extract the `js` and `styles` folder into the `vendors` folder
4. Open `config.js` and add a couple of path mappings:

    ```
    paths: {
      "*": "dist/*",
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "kendo.*": "vendors/js/kendo.*.js"        <----
    },
    "map": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "jquery": "github:components/jquery@2.1.4",             <----
      "kendo-ui": "/vendors",                   <----
      "jquery.min": "github:components/jquery@2.1.4"          <----
    }
    ```

  **Note:** you may have to update the version of Kendo when adding these mappings. Improvements are tracked [here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/272)
5. Install the aurelia-kendoui-bridge and the css plugin
`jspm install aurelia-kendoui-bridge css`

6. Register the aurelia-kendoui-bridge plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which Kendo controls you wish to use. You can use all controls in Kendo UI Pro by calling the "pro()" method

    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-bridge', (kendo) => kendo.pro());

      aurelia.start().then(a => a.setRoot());
    }
    ```
    <br>
7. Now let's open up "app.html" and load Kendo's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.core.min.css!"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css!"></require>
    ```
    <br>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**We recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._what_you_need_to_know) in order to get started**
