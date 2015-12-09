export class Test {
  datasource;

  constructor() {
    this.datasource = {
      type: "odata",
      serverFiltering: true,
      transport: {
        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
      }
    };
  }

  test() {
    console.log("IT WORKS!!");
  }
}
