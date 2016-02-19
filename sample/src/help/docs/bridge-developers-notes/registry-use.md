<br>

### 9. registry.json / Registry helper class
<br>

The **[registry.json](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/blob/master/sample/src/help/registry.json)** file is used to short-cut the process of configuring showcase-area pages in the sample application by configuring the router, loading assets and setting up the Code Preview area that appears underneath the demo control itself (Image 1 below)
<br><br>

<p align=center>
  <img src="https://cloud.githubusercontent.com/assets/2712405/13131222/1887f220-d5b8-11e5-9588-4ab80cd6abfc.png"></img>
 <br><br>
 Image 1
</p>
<br>

The main application module configures the root router with the top level application areas. One of these areas is the `samples` area which showcases each Kendo control.
<br><br>

#### Example

Let's take the **grid** control for example:
<br><br>

&nbsp;&nbsp;- Each page in the grid sample is represented by some route configuration data which is passed to the child router and also by asset files (html/js/css).

&nbsp;&nbsp;- In the `index` for each component, the `registry.json` file is loaded and processed by the `Registry` class.

&nbsp;&nbsp;- The index is very basic: it just imports the `Registry` helper class and calls the `load` method. This method configures the router and loads the assets.

&nbsp;&nbsp;- It takes two arguments - the router configuration object and the name of the component (as a string).

<br>

```
import {useView, inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';

@useView('shared/showcase.html')
@inject(Registry)
export class Index {

  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    this.router = router;

    return this.registry.load(config, 'grid'); // Here is where the magic happens!
  }
}
```

<br><br>
The helper uses the SystemJS loader to load the JSON file and subsequently the assets described within. It also applies some simple conventions to the data, building the route name, module Id, title etc.

Almost all of the configuration is convention based and will apply sensible defaults, but these defaults can be overridden: for example the `title` property (that appears in the left-hand sub-navigation pane) either takes the value directly from the JSON or in the absence of any value, generates the title from the module name as per the following code snippet:

<br>
```
sample.title = sample.title || this.getTitleFromRoute(_sample);
```
<br><br>

An important thing to note is that if no `moduleId` property is passed in the JSON, the `Registry` helper's conventions assume that it should load the `sample-runner` module/view which is the standard demo layout as appears in the screenshot above.
<br><br>

However, if a `moduleId` is passed it will override the default module. This allows a particular sample page to have a completely different layout if required.
<br><br>

#### Example registry.json

Here is an example with added comments to explain each functional part of the JSON file:
<br><br>

```
{
  // The title property is used to configure the title for the sample area, this appears at the top left of the sample pages defined below
  "title": "Grid",
  // All samples pages must sit inside the "samples" property
  "samples": {
    // Create a route called "basic-use" e.g. http://localhost:3000/samples/grid/basic-use
    "basic-use": {
      // Make this the default page - this creates a blank route path
      "default": true,
      // Specify which files to load. The content of these files is also used to create the code-preview pane underneath the sample
      "files": ["html", "js", "css"]
    },
    "batch-editing": {},
    "binding-to-local-data": {
      "files": ["html", "js", "json"]
    },
    "binding-to-remote-data": {},
    "binding-to-signalr": {},
    "editing-custom-editor": {
      "files": ["html", "js", "json"]
    },
    "frozen-columns": {},
    "initialization-from-table": {},
    "inline-editing": {},
    "popup-editing": {},
    "working-offline": {}
  }
}
```
<br><br>

#### Available properties
<br><br>

#### title
The title of the sample area, shown at the top left of the page above the sub-navigation
<br><br>

#### samples
An array of objects which represent each sample showcase page for a particular component
<br><br>

#### samples."key"
The "key" should represent the name of the sample sub-page. Each key at this level will be used as a route name and will generate a new sub-page.
<br><br>

#### samples."key".route
Can be used to override the route name for this sub-page if required
<br><br>

#### samples."key".title
Used to override the title that displays in the sub-page navigation area. This is useful as the default convention is to convert to a "Caps With Spaces" format which you may want to override (for example, **api** becomes **Api** when you would more likely want **API** in the sub-nav)
<br><br>

#### samples."key".moduleId
Used to override the module that will be loaded when this sub-page is navigated to. This might be used, for example, if a particularly "special" control requires a flashy showcase page that has a different layout/viewmodel/features than the standard showcase page
<br><br>

#### samples."key".nav
Specifies whether the sub-page appears in the sub-navigation pane or not. Default is "true" (visible)
<br><br>

#### samples."key".files
An array of file extensions that represent assets to load for this particular showcase page. The conventions dictate that any asset files should share the same name (i.e. the "key") and be identified/loaded by the "key" + the extension.
<br><br>

For example:
```
  "samples": {
    "basic-use": {
      "default": true,
      "files": ["html", "js", "css"]
    },
```
<br>

Will load `basic-use.html`, `basic-use.js` and `basic-use.css` and also display these three files in the code preview window at the bottom of the showcase page.