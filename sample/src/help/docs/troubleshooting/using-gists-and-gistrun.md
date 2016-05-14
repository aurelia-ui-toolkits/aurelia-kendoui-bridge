<br>

### 2. using GistRun to experiment with Aurelia components and report problems
<br>

By adding support to use the [GistRun tool](), this catalog application provide the ability to run each example of each Aurelia Kendui bridge component - as illustrated on this following image
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/15254741/5b591f98-1906-11e6-890e-7d8c1e41a0b2.png"></img>
 <br><br>
 Image 1
</p>

<br><br>
Click on the `RUN` button will result with this same example "Area charts: multi axis" running in a new window, completely isolated from the Catalog application:
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/14415194/836515c4-ff6a-11e5-8f51-17d4392c7136.png"></img>
 <br><br>
 Image 2
</p>

<br><br>
#### 2.1 Experimentation

It should be pretty obvious that running any of the samples from this Components catalog applications **as a gist** you get a very dramatic increase of your ability to check this sample's behavior. You can change any part of JavaScript code (in a meaningful way preferrably) in the view model, or any attributes in the view -- and get nearly instant (1 - 2 seconds) response from the GistRun.
<br><br>

#### 2.2 Report a problem to Aurelia-UI-Toolkits team

**2.2.1 Summary**
<br>
In order to ensure complete context of your problem and get the fastest possible response, please create an issue **[here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues)** and then **[create a gist](https://help.github.com/articles/creating-gists/)** which will become a part of your problem report.
<br><br>

It is important to point out that a gist should contain the smallest possible "extract" of your application - not the whole app, by any means. It was always a good practice to report a problem by making sure to reduce your app to the smallest amount of code that still demonstrates the issue you need help with - so while the concept of a gist makes such reduction a lot easier to do, it still requires some effort.
<br><br>

**2.2.2 Hot to create a gist for Aurelia application**

Rather than starting with an empty gist, create a fork of **[this gist](https://gist.github.com/adriatic/c6a05892747c35d643ac4833af411117)** which has built-in files that comprise Aurelia run time components:
<br><br>

**index.html**
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
and
<br><br>
**main.js**
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


With this in mind, the task of creating a gist that describes your problem, consist of only entering only a few of your application files. However, instead of adding these files using the **[gist editor](https://help.github.com/articles/creating-gists/#editing-gists)**, we will use the **[GistRun](https://gist.run)** (Aurelia) application to do that task - simply because it is a lot easier to add more code and you can immediately verify that the code you added is correct.
<br><br>

**2.2.3 Invoking GistRun**

The syntax is simply

`https://gist.run/?id=c14c7cd4ab59c8d12d7f8ff6b6cc2947`

where the string query parameter `c14c7cd4ab59c8d12d7f8ff6b6cc2947`) is the **gist id** you got in the process of forking the KendoUI bridge default gist in section 2.2.1 above. You can learn more about GistRun app **[here](https://github.com/gist-run/gist-run#gistrun)**.
<br><br>

Here is the screen shot of the gist we are describing in this article, rendered by GistRun
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/15269577/1251b7d0-19d1-11e6-9661-5c7ab97f69d1.png"></img>
 <br><br>
Image 3
</p>
<br><br>

In order to create a "basic application code" for your gist, it is often best tp use the existing gists from the catalog application as start. For example, if you have a problem with Area chart, click on the RUN button on page `http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/area-charts/multi-axis` (as shown on Image 1 above) and note the View (app.html) and View model (app.js) which you can used as the start for your new gist.
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/15269548/3def70b8-19d0-11e6-89be-1ef2acaa783c.png"></img>
 <br><br>
Image 4
</p>
<br><br>

***