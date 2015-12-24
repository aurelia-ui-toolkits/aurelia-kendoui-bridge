export class WorkingOffLine {
  constructor() {
    this.datasource = new kendo.data.DataSource({
      offlineStorage: 'offline-kendo-demo',
      transport: {
        read: {
          url: '//demos.telerik.com/kendo-ui/service/products',
          dataType: 'jsonp'
        },
        update: {
          url: '//demos.telerik.com/kendo-ui/service/products/update',
          dataType: 'jsonp'
        },
        destroy: {
          url: '//demos.telerik.com/kendo-ui/service/products/destroy',
          dataType: 'jsonp'
        },
        create: {
          url: '//demos.telerik.com/kendo-ui/service/products/create',
          dataType: 'jsonp'
        },
        parameterMap: function(options, operation) {
          if (operation !== 'read' && options.models) {
            return {models: kendo.stringify(options.models)};
          }
        }
      },
      batch: true,
      pageSize: 8,
      schema: {
        model: {
          id: 'ProductID',
          fields: {
            ProductID: { editable: false, nullable: true },
            UnitPrice: { type: 'number', validation: { min: 1} },
            Discontinued: { type: 'boolean' },
            UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
          }
        }
      }
    });
  }

  online() {
    this.datasource.online(true);
    alert('datasource is now online');
  }

  offline() {
    this.datasource.online(false);
    alert('datasource is now offline');
  }
}
