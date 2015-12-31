## Introduction

This article presents the **overview** of the ways to use **[Aurelia-KendoUI-Plugin](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** project developed by the team of Aurelia UI Toolkits organization, dedicated to ensure Aurelia's wide spread adoption it deserves.

You can find more details in the section **Using KendoUI bridge** which is also a part of this documents set

* * *

## How to use this application

Most people like explanations that are done in the context of doing what is just being explained - so let's do something very simple as the first step in showing how to use KendoUI bridge to add several interesting pages rendering KendoUI controls to the well known application: **Aurelia Skeleton Navigation**, a starter kit for building a standard navigation-style app with Aurelia. Get it from **[here](https://github.com/aurelia/skeleton-navigation)** and use the Download ZIP method so we do not have to deal with Git issues in this simple context. After downloading this application, extract its content into the folder conveniently named `skeleton-navigation-kendo` and use the instructions to build and run this app as explained in the **[README](https://github.com/aurelia/skeleton-navigation/blob/master/README.md)** file. Specifically, assuming that you already have the NodeJS, jspm and gulp installed, this application should be running after you execute

```
npm install
jspm install
gulp watch
```

and subsequently browse to http://localhost:9000, resulting with the following:

<p align=center>
  <img src="http://i.imgur.com/kZ9dCzC.png"></img>
 <br><br>
 Image 1
</p>

### Plan of actions

Now, we want to add several (four) additional pages to this application that would show KendoUI **autocomplete**, **button** and **grid**  (shown below rendered in Material black theme:)


<p align=center>
  <img src="http://i.imgur.com/kaDmsH5.png"></img>
 <br><br>
 Image 2
</p>

* * * 
**Note**: if you do not yet own KendoUI PRO license, you can download the evaluation copy which will give you access to all KendoUI controls.

At this point, while following the series of steps described next, it is assumed that you have the KendoUI package already installed on your computer as described in the **vendors** type of installation:

<p align=center>
  <img src="http://i.imgur.com/eUiqr4e.png"></img>
 <br><br>
 Image 3
</p>

and that you executed all 8 steps (partially) shown on image 3 above. While all of them are equally important, at this point verify that your  `main.js` class looks like this:

```javascript
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}

```
as this will ensure that the application we are about to augment from its original form, loads the Aurelia KendoUI bridge (named plugin in the above code).

The next screenshot depicts the final UI for the application we are about to create:

<p align=center>
  <img src="http://i.imgur.com/q4eQcXP.png"></img>
 <br><br>
 Image 4
</p>

### Building the app

The following steps describe the process of building our applicatom starting from the Aurelia Navigation Skeleton shown on **Image 1** 

#### Step 1 - Modify the application structure

In order to clearly separate the added code from the original Aurelia Navigation Skeleton, the original project structure is changed to this:

<p align=center>
  <img src="http://i.imgur.com/CRnYzV0.png"></img>
 <br><br>
 Image 5
</p>

The following steps are describing the code for the added KendoUI controls defined as Aurelia components, consisting of two files each (the view - HTML file and the view model - Javascript file)

#### Step 2 Add the KendoUI autocomplete control

##### File k-autocomplete.html

```html
<template>
  <section>
        <br>
        <h3>Basic KendoUI Autocomplete sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/autocomplete">See KendoUI Bridge autocomplete folder for more details</a>
        <br>
        <br>

        <p><strong>People:</strong></p>
        <input k-autocomplete="k-data-source.bind: items;" style="width: 300px;">
        <br>
        <br>
        <br>
        <p class="demo-hint" style="word-break: break-all">Type a name, available values in the list are: ${ items } </p>
  </section>
</template>
```

##### File k-autocomplete.js

```javascript
export class BasicUse {
  items = [
    'Charles',
    'Jedd',
    'Nikolaj',
    'Jeroen',
    'David',
    'Rob',
    'Matt',
    'Patrick',
    'Jason',
    'Martin',
    'Fredrick',
    'Alex'
  ]
}
```


#### Step 3 Add the KendoUI button control

##### File k-button.html

```html
<template>
    <require from="./k-button.css"></require>
    <section>
        <br>
        <h3>Basic KendoUI Button API sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/button">See KendoUI Bridge button folder for more details</a>
        <br>
        <br>

        <button k-button="k-enable.bind: enabled; k-icon: ungroup" k-on-click.trigger="test()">Kendo UI Button</button>
        <br>
        <br>
        <button k-button click.delegate="disable()">Disable</button>
        &nbsp;&nbsp
        <button k-button click.delegate="enable()">Enable</button>

    </section>
</template>
```

##### File k-button.js

```javascript
export class ButtonApi {
    enabled = true;

    disable() {
      this.enabled = false;
    }

    enable() {
      this.enabled = true;
    }

    test() {
      alert('You clicked me');
    }
}
```

##### File k-button.css

```
.demo-section {
    text-align: center;
}
.box .k-textbox {
    margin: 0;
    width: 80px;
}
```


#### Step 4 Add the KendoUI chart control

##### File k-chart.html

```html
<template>
    <section>
        <br>
        <h3>Basic KendoUI Button API sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/chart">See KendoUI Bridge chart folder for more details</a>
        <br>
        <br>

        <k-chart    k-title.bind="{text: 'Gross Domestic product growth \n /GDP annual %/'}"
                    k-legend.bind="{position: 'bottom'}"
                    k-series-defaults.bind="seriesDefaults"
                    k-series.bind="series"
                    k-value-axis.bind="valueAxis"
                    k-category-axis.bind="categoryAxis"
                    k-tooltip.bind="tooltip">
        </k-chart>
    </section>
</template>
```

##### File k-chart.js

```javascript
export class BasicUse {

  seriesDefaults = {
    type: 'line',
    line: {
      line: {
        style: 'smooth'
      }
    }
  };

  series = [{
    name: 'India',
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: 'World',
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }, {
    name: 'Haiti',
    data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    },
    axisCrossingValue: -10
  };

  categoryAxis = {
    categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
    majorGridLines: {
      visible: false
    },
    labels: {
      rotation: 'auto'
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${series.name} ${value}'
  }
}
```

#### Step 5 Add the KendoUI grid control

##### File k-grid.html

```html
<template>
    <require from="./basic-grid.css"></require>
        <section>
            <br>
            <h3>Basic KendoUI Grid sample</h3>

            <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/grid">See KendoUI Bridge grid folder for more details</a>
            <br>
            <br>
            <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
                <au-col title="Contact Name" field="ContactName">
                    <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
                    <div class='customer-name'>${ContactName}</div>
                </au-col>
                <au-col title="Contact Name" field="ContactName"></au-col>
                <au-col title="Contact Title" field="ContactTitle"></au-col>
                <au-col title="Company Name" field="CompanyName"></au-col>
                <au-col field="Country"></au-col>
            </k-grid>
        </section>
</template>
```

##### File k-grid.js

```javascript
export class BasicUse {

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };

  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
      pageSize: 5
    };
  }
}

```

##### File basic-grid.css

```
.customer-photo {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-size: 32px 35px;
    background-position: center center;
    vertical-align: middle;
    line-height: 32px;
    box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0,0,0,.2);
    margin-left: 5px;
}

.customer-name {
    display: inline-block;
    vertical-align: middle;
    line-height: 32px;
    padding-left: 3px;
}
```

#### Step 6 Modify the app.html file

```html
<template>
  <require from="nav-bar.html"></require>
  <require from="bootstrap/css/bootstrap.css"></require>
  <require from="kendo-ui/styles/kendo.common.min.css"></require>
  <require from="kendo-ui/styles/kendo.bootstrap.min.css"></require>

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>

```
#### Step 7 Modify the app.js file

```javascript
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'users',           name: 'users',        moduleId: 'users',                                nav: true, title: 'Github Users' },
      { route: 'k-autocomplete',  name: 'k-button',     moduleId: 'kendoui/autocomplete/k-autocomplete',  nav: true, title: 'KendoUI autocomplete' },
      { route: 'k-button',        name: 'k-button',     moduleId: 'kendoui/button/k-button',              nav: true, title: 'KendoUI button' },
      { route: 'k-chart',         name: 'k-chart',      moduleId: 'kendoui/chart/k-chart',                nav: true, title: 'KendoUI chart' },
      { route: 'k-grid',          name: 'k-grid',       moduleId: 'kendoui/grid/k-grid',                  nav: true, title: 'KendoUI grid' },
      { route: 'child-router',    name: 'child-router', moduleId: 'child-router',                         nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}

```
#### Step 8 Modify the main.js file

```
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}
```
### About KendoUI declarative programming 

#### This section explains the details of the code used to render the four controls defined above






























<p align=center>
  <img src=""></img>
 <br><br>
 Image 1
</p>

