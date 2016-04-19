<br>

### 10. Creating gists for KendoUI bridge catalog application
<br>
### Introduction

We recently added the feature to run each example of each Aurelia component in the **[Aurelia KendoUI bridge catalog](http://aurelia-ui-toolkits.github.io/demo-kendo/#/about/about)** app, using the Aurelia **[GistRun]()** tool:
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14547822/86ecf532-027f-11e6-9306-a260c50823eb.png"></img>
 <br><br>
Image 1
</p>
<br><br>

This GistRun is invoked by a click on the **RUN** button on the `Autocomplete` page of the catalog app:
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14547963/b218c38e-0280-11e6-968e-f2fa06c6c77a.png"></img>
 <br><br>
</p>
<br><br>

The rest of this article demonstrates the process of adding the `**RUN**` button to the **[combobox basic use](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/combobox/)** page.
<br><br>
***

### Step 1
Prepare the file **[registry.json](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/blob/master/sample/src/samples/combobox/registry.json)** by adding the basic definition of the `gist` to be used.
<br><br>

```javascript
{
  "title": "ComboBox",
  "documentation": "http://docs.telerik.com/kendo-ui/api/javascript/ui/combobox",
  "samples": {
    "basic-use": {
      "route": ["", "basic-use"],
      "gist": "https://gist.run/?id=xxx"
    },
    "api": {
      "title": "API",
      "gist": "https://gist.run/?id=xxx"
    },
    "cascading-combobox": {
      "gist": "https://gist.run/?id=xxx"
    },
    "customizing-templates": {
      "gist": "https://gist.run/?id=xxx"
    },
    "grouping": {
      "gist": "https://gist.run/?id=xxx"
    },
    "server-filtering": {
      "gist": "https://gist.run/?id=xxx"
    },
    "virtualization": {
      "gist": "https://gist.run/?id=xxx"
    },
    "events": {
      "gist": "https://gist.run/?id=xxx"
    }
  }
}
```
***
<br><br>

***

### Step 2
Create the gists for each of the sample used on this page of the catalog app

To avoid the repetition, we will show the creation of just the **ComboBox basic use** gist.
<br><br>

##### Step 2.1 - create a new Gist

Go to https://gist.github.com/ to create a new, empty **Gist**
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14548236/f7bd0eac-0282-11e6-8296-ba95d5091b99.png"></img>
 <br><br>
Image 2
</p>

##### Step 2.2 - populate the **Gist**
Drag the four prepared files shown below
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14548263/41824c6e-0283-11e6-8c65-7c668782a91c.png"></img>
 <br><br>
Image 3
</p>
<br><br>

and drop them on top of the GitHub Gist page which was empty so far, shown on Image 2. Note that this "drag and drop" use is the best workaround for the current lack of GistRun tool's to support the import of the whole project for the gist.
<br><br>

Now, we have these files added to the the gist:
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14548342/06178ba2-0284-11e6-8593-9d82bc6f5ac8.png"></img>
 <br><br>
Image 4
</p>
<br><br>

Note that we also added the Gist title (top of the gist window) "ComoboBox: basic use".

At this point we need to explain what are these four "prebuilt" files we just added to the gist:
<br><br>

**`index.html`**

```html
<!doctype html>
<html>
  <head>
    <title>Aurelia KendoUI bridge</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2016.1.226/styles/kendo.common.min.css">
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2016.1.226/styles/kendo.rtl.min.css">
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2016.1.226/styles/kendo.default.min.css">
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2016.1.226/styles/kendo.mobile.all.min.css">
    <script src="https://kendo.cdn.telerik.com/2016.1.226/js/jszip.min.js"></script>
  </head>
  <body aurelia-app="main">
    <h1>Loading...</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.6/system.js"></script>
    <script src="https://rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/0.3.5/config2.js"></script>
    <script>
      System.import('aurelia-bootstrapper');
    </script>
  </body>
</html>
```
<br><br>

This is the standard "beginning" of any Aurelia application - with a **very big** difference, caused by the line:
```
<script src="https://rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/0.3.5/config2.js">
```
<br><br>
which tells the `GistRun` tool to fetch the **complete, bundled** Aurelia runtime modules set from the `https://rawgit.com` server. The actual bundle was prepared by Aurelia-UI-Toolkits team and is being maintained **[here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bundles)**
<br><br>

**`main.js`**
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-bridge', kendo => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}
```
<br><br>

This is the standard Aurelia configuration function which requires the presence of the Aurelia-KendoUI bridge. That presence is of course ensured by specific content of the **[aurelia-kendoui-bundles](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bundles)** repository

**`app.html`** - the HTML tab from `Code Preview` on **[this page](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/combobox/)**
<br><br>

```html
<template>
    <div id="example">
        <div id="cap-view" class="demo-section k-content">
            <h4>Customize your Kendo T-shirt</h4>
            <img src="http://demos.telerik.com/kendo-ui/content/web/combobox/tShirt.png" id="tshirt"/>

            <h4>T-shirt fabric</h4>
            <ak-combobox k-data-text-field="text"
                              k-data-value-field="value"
                              k-data-source.bind="data"
                              k-value.two-way="fabric"
                              k-filter="contains"
                              k-suggest.bind="true"
                              style="width: 100%;">
            </ak-combobox>

            <h4 style="margin-top: 2em;">T-shirt Size</h4>
            <ak-combobox k-value.two-way="size">
              <select style="width: 100%;">
                <option>X-Small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>2X-Large</option>
              </select>
            </ak-combobox>

            <button class="k-button k-primary" click.delegate="buyCap()" style="margin-top: 2em; float: right;">Customize</button>
        </div>
    </div>
    <style>
      #tshirt {
           display: block;
           margin: 2em auto;
       }
       .k-readonly
       {
           color: gray;
       }
    </style>
</template>
```
<br><br>

**`app.js`** - the Javascript tab from `Code Preview` on **[this page](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/combobox/)**
<br><br>

```javascript
export class BasicUse {
  data = [
    { text: 'Cotton', value: '1' },
    { text: 'Polyester', value: '2' },
    { text: 'Cotton/Polyester', value: '3' },
    { text: 'Rib Knit', value: '4' }
  ];

  fabric = '3';

  buyCap() {
    alert(`Thank you! Your Choice is:\n\nFabric ID: ${this.fabric} and Size: ${this.size}`);
  }
}
```
<br><br>

##### Step 2.3 - Save the Gist

Click on the `Save Gist as public` or `Update public gist`

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14576798/9013f276-033a-11e6-91d5-c2c3f3edf1e8.png"></img>
 <br>Image 1<br>
</p>
<br><br>

Lastly copy the `gist ID` from the gist page URL

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14576875/483d9668-033b-11e6-9284-b67341b1edb8.png"></img>
 <br><br>
Image 2
</p>
<br><br>

and paste it in the `registry.json` entry for the **ComboBox: basic use** example.
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14576927/b3be7f38-033b-11e6-8e7c-13da0ac1c57d.png"></img>
 <br><br>
Image 3
</p>
<br><br>
This ends this tutorial