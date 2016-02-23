<br>

### 1. Current limitations
<br>

This section contains additional information which we hope will be of value to Aurelia application developers using KendoUI bridge.
<br><br>

#### Two-way binding not showing any effect

If you don't see a Kendo control change after you have changed a two-way bound property, then you may have hit a limitation of the Kendo suite. Unfortunately, Kendo controls are not built to support two-way binding to properties. This means that whenever a property changes (k-value being the exception) the control needs to be destroyed and recreated.

Let's say we have the following grid:
<br><br>

**view**: my-page.html

```
...
    <k-grid k-data-source.two-way="datasource">
      <k-col title="Contact Name" field="ContactName"></k-col>
      <k-col title="Contact Title" field="ContactTitle"></k-col>
      <k-col title="Company Name" field="CompanyName"></k-col>
      <k-col field="Country"></k-col>
    </k-grid>
...
```
<br><br>

**view model**: my-page.js

```
   export class MyPage {

      datasource = {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
        },
        pageSize: 5
      }
    }
```
<br><br>

**Observe** the use of two-way binding to bind the datasource property on the view-model to k-data-source on the k-grid custom element (the wrapper provided by aurelia-kendoui-bridge).
<br><br>

Now, let's say we want to change the pageSize when a button is clicked - this really means that we need to change the datasource attribute, since KendoUI API does not provide the direct access to pageSize.
<br><br>


**view**: my-page.html

```
...
   <button click.delegate="btnClicked()">Change datasource</button>

    <k-grid k-data-source.two-way="datasource">
      <k-col title="Contact Name" field="ContactName"></k-col>
      <k-col title="Contact Title" field="ContactTitle"></k-col>
      <k-col title="Company Name" field="CompanyName"></k-col>
      <k-col field="Country"></k-col>
    </k-grid>
...
```
<br><br>

**view model**: my-page.js

```
      datasource = {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
        },
        pageSize: 5
      }

      btnClicked() {
        this.datasource = {
          type: 'odata',
          transport: {
            read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
          },
          pageSize: 15
        }
      }
    }
```
<br><br>

When the button is clicked, you will see nothing happen. The datasource property in **my-page.js** gets updated, but the Kendo Grid is not "refreshed".
<br><br><br>

There are two ways to tackle this scenario: using the `recreate()` function or the `setDataSource()/setOptions()` function.
<br>
<br>

#### recreate()

<br><br>

**view**: my-page.html

```
<button click.delegate="btnClicked()">Change datasource</button>

    <k-grid k-data-source.two-way="datasource" view-model.ref="grid">
      <k-col title="Contact Name" field="ContactName"></k-col>
      <k-col title="Contact Title" field="ContactTitle"></k-col>
      <k-col title="Company Name" field="CompanyName"></k-col>
      <k-col field="Country"></k-col>
    </k-grid>
```
<br><br>

**view model**: my-page.js

```
   export class MyPage {

      datasource = {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
        },
        pageSize: 5
      }

      btnClicked() {
        this.datasource = {
          type: 'odata',
          transport: {
            read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
          },
          pageSize: 15
        }

        this.grid.recreate();
      }
    }
```
<br><br>

Note that this `recreate()` function exists on the custom element. In order to get a reference to this custom element you either need to use `view-model.ref` for custom elements, or `attr-name.ref` for custom attributes.
<br><br><br>

#### setOptions, setDataSource()

Every Kendo wrapper also exposes a `k-widget` property. This is the actual Kendo control on which you can call functions mentioned in the Telerik's documentation.
<br><br>

**view**: my-page.html

```
   ...
    <button click.delegate="btnClicked()">Change datasource</button>

    <k-grid k-data-source.two-way="datasource" k-widget.bind="grid">
           <k-col title="Contact Name" field="ContactName"></k-col>
           <k-col title="Contact Title" field="ContactTitle"></k-col>
           <k-col title="Company Name" field="CompanyName"></k-col>
           <k-col field="Country"></k-col>
    </k-grid>

```
<br><br>

**view model**: my-page.js

```
   export class MyPage {

      datasource = {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
        },
        pageSize: 5
      }

      btnClicked() {
        this.grid.setDataSource({
          type: 'odata',
          transport: {
            read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
          },
          pageSize: 15
        });
      }
    }
```
<br>
<br>
**Note:** Some Kendo controls have functions like `setOptions()` or `setDataSource()` that allows you to change an option of the Kendo control without having to destroy and recreate it.





