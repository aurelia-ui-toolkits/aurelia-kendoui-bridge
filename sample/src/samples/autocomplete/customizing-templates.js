export class CustomizingTemplates {
  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: '//demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }
}
