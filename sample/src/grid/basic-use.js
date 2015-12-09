export class BasicUse {

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 5
  };

  constructor() {
    this.datasource = {
      type: "odata",
      transport: {
          read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
      },
      pageSize: 20
    };
  }
}
