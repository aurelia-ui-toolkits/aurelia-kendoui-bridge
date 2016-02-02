export class ViewModel {
  datasource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    },
    pageSize: 5
  };
}
