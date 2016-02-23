export class ServerFiltering {
  value = [
    { ProductName: 'Chang', ProductID: 2 },
    { ProductName: 'Uncle Bob\'s Organic Dried Pears', ProductID: 7 }
  ];

  dataSource = {
    type: 'odata',
    serverFiltering: true,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Products'
      }
    }
  }
}
