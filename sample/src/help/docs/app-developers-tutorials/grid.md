<br>

### 6. Grid
<br>

<br>

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
<br>

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
<br>

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
<br>
<br>

#### Step 6 Modify the app.html file

<br>

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

<br>
<br>
* * *
<br>
#### Next page: [Next actions](http://localhost:3000/#/help/docs/app_developers_tutorials/7._next_actions)

