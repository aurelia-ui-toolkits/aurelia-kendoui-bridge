# aurelia-kendoui-plugin

A set of [Aurelia](http://aurelia.io) wrappers for [Kendo UI](http://www.telerik.com/kendo-ui)

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io) [![Join the chat at https://gitter.im/adriatic/Aurelia-KendoUI](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adriatic/Aurelia-KendoUI?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installing the plugin

### Kendo UI Core

The steps here assume you are using JSPM for package management

1. Install Kendo UI Core and the aurelia-kendoui-plugin

  `jspm install kendo-ui aurelia-kendoui-plugin`

2. Register the plugin with Aurelia in your `main.js` or equivalent. The configuration function will be passed a builder object that you can use to configure which Kendo controls you wish to use. You can use all controls in Kendo UI Core or Pro by calling the `core()` or `pro()` method respectively

  ```
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());
  }
  ```

3. Drop some custom-elements into your DOM

4. That's it!

Visit the docs or sample application for more information

### Kendo UI PRO

If you have a Kendo UI Pro licence you can use the full Kendo suite. First follow the installation instructions above and then follow the steps below to install Kendo from Telerik's private Bower repo:

1. Install the JSPM git endpoint plugin

  `npm install -g jspm-git`
  or
  `npm install jspm-git --save-dev` for a local install

2. Create a new endpoint instance and point it to the Telerik git server

  `jspm registry create kendo jspm-git`

3. You will be prompted for the endpoint location, enter

  `https://bower.telerik.com`

4. You don't need to change any advanced options, so enter "no" or "n" if prompted

5. Run the following command to overwite the core version of Kendo with the PRO version

  `jspm install kendo-ui=kendo:bower-kendo-ui`

6. When prompted, enter your Telerik account credentials
