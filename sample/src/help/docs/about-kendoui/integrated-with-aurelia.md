<br>

### 1. Integrated with Aurelia

<br>
Kendo UI is a fast, light, complete: 70+ jQuery-based UI widgets in one powerful toolset, used by tens of thousands developers because if offers everything for building web and mobile apps with HTML5 and JavaScript. Despite its popularity, it was not easy to use for Aurelia developers due to differences between JavaScript version used in KendoUI controls and JavaScript ES2016 used by Aurelia framework.
<br><br>

Now, by using Aurelia-UI-Toolkits **[Aurelia-KendoUI bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge)** plugin,  Kendo UI framework is seamlessly integrated with Aurelia. From Grid to Scheduler to Chart, the tight Aurelia integration in Kendo UI tools enables you to drop a few script and style files into your page and get instant—and complete—Kendo UI access using the Aurelia's declarative programming model. As an illustration of this claim , let's compare the code used to render the grid control using **[Telerik's original SDK](http://demos.telerik.com/kendo-ui/grid/index)**:

```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="styles/kendo.common.min.css" />
    <link rel="stylesheet" href="styles/kendo.default.min.css" />

    <script src="js/jquery.min.js"></script>
    <script src="js/kendo.all.min.js"></script>
</head>
<body>

<div id="example">
    <div id="grid"></div>
    <script>
        $(document).ready(function () {
            $("#grid").kendoGrid({
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                    },
                    pageSize: 20
                },
                height: 550,
                groupable: true,
                sortable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [{
                    template: "<div class='customer-photo'" +
                                    "style='background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
                                "<div class='customer-name'>#: ContactName #</div>",
                    field: "ContactName",
                    title: "Contact Name",
                    width: 240
                }, {
                    field: "ContactTitle",
                    title: "Contact Title"
                }, {
                    field: "CompanyName",
                    title: "Company Name"
                }, {
                    field: "Country",
                    width: 150
                }]
            });
        });
    </script>
</div>

<style type="text/css">
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
</style>


</body>
</html>
```
<br>
<br>

with the code used to instantiate the same grid defined as an Aurelia component:

**HTML**

```html
<template>
    <require from="./basic-use.css"></require>

    <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
      <k-col k-title="Contact Name" k-field="ContactName">
        <k-template>
          <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
          <div class='customer-name'>${ContactName}</div>
        </k-template>
      </k-col>
      <k-col k-title="Contact Name" k-field="ContactName"></k-col>
      <k-col k-title="Contact Title" k-field="ContactTitle"></k-col>
      <k-col k-title="Company Name" k-field="CompanyName"></k-col>
      <k-col k-field="Country"></k-col>
    </k-grid>
</template>
```
<br>
<br>

**JavaScript ES2016**
<br>

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
<br>
<br>

**CSS**
<br>

```css
#grid-basic-use .customer-photo {
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

#grid-basic-use .customer-name {
    display: inline-block;
    vertical-align: middle;
    line-height: 32px;
    padding-left: 3px;
}
```

