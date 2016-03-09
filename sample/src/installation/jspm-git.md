<br>

### JSPM-git

1. Install the JSPM git endpoint plugin by issuing the command:
`npm install jspm-git --save-dev`
<br>

2. Register the endpoint by issuing the command:
`jspm registry create kendo jspm-git`
and use the following responses to the prompts you will get:

    - base URL: __https://bower.telerik.com__
    - Set advanced configurations? __yes__
    - Would you like to use the default git repository suffix (.git)? __yes__
    - Disable shallow git clones? __no__
    - Enable authentication? __yes__
    - Now enter your Telerik credentials
<br>
<br>

3. Run the following command to install the PRO version of kendo, the aurelia-kendoui plugin and the css plugin:
`jspm install aurelia-kendoui-bridge kendo-ui=kendo:bower-kendo-ui css`
<br>

4. Open `config.js` and add a couple of path mappings:

  ```
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "kendo:*": "jspm_packages/kendo/*",
    "kendo.*": "jspm_packages/kendo/bower-kendo-ui@2016.1.226+SP1/js/kendo.*.js"    <----
  },
  "map": {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
    "kendo-ui": "kendo:bower-kendo-ui@2016.1.226+SP1",
    "jquery": "github:components/jquery@2.1.4",             <----
    "jquery.min": "github:components/jquery@2.1.4"          <----
  }
  ```

  **Note:** you may have to update the version of Kendo when adding these mappings. Improvements are tracked [here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/272)

5. Register the plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which KendoUI controls you wish to use. You can use all controls in KendoUI Pro by calling the "pro()" method
<br>
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
6. Now let's open up "app.html" and load KendoUI's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.min.css!"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css!"></require>
    ```
<br>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**We recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._what_you_need_to_know) in order to get started**

**Loading all wrappers too slow? Lazy loading of wrappers is also possible: [instructions](#/help/docs/app_developers_notes/3._lazy_loading_wrappers)**
