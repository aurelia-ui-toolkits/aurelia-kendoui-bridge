export class ServerFiltering {
  dataSource = {
    type: 'odata',
    serverFiltering: true,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Products'
      }
    }
  };
}
