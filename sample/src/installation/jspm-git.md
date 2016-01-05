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

3. Run the following command to install the PRO version of kendo and the aurelia-kendoui plugin:
`jspm install aurelia-kendoui-plugin kendo-ui=kendo:bower-kendo-ui`
<br>

4. Register the plugin
Now we're going to register the plugin with Aurelia in your "main.js" or equivalent. The configuration function will be passed a builder object that you can use to configure which KendoUI controls you wish to use. You can use all controls in KendoUI Pro by calling the "pro()" method
<br>
    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

      aurelia.start().then(a => a.setRoot());
    }
    ```
<br>
5. Now let's open up "app.html" and load KendoUI's CSS files

    ```
    <require from="kendo-ui/styles/kendo.common.core.min.css!"></require>
    <require from="kendo-ui/styles/kendo.bootstrap.min.css!"></require>
    ```
<br>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.
