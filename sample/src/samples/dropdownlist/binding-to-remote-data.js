export class BindingToRemoteData {
  dataSource = {
    transport: {
      read: {
        dataType: 'jsonp',
        url: '//demos.telerik.com/kendo-ui/service/Products'
      }
    }
  };
}
