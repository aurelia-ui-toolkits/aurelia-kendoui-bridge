export class Editing {
  dataSource = new kendo.data.DataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/Products',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/Products/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/Products/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/Products/Create',
        dataType: 'jsonp'
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read' && options.models) {
          return {models: kendo.stringify(options.models)};
        }
      }
    },
    batch: true,
    pageSize: 4,
    schema: {
      model: {
        id: 'ProductID',
        fields: {
          ProductID: { editable: false, nullable: true },
          ProductName: 'ProductName',
          UnitPrice: { type: 'number' },
          Discontinued: { type: 'boolean' },
          UnitsInStock: { type: 'number' }
        }
      }
    }
  });

  attached() {
    $(this.pager).kendoPager({
      dataSource: this.dataSource
    });
  }
}
