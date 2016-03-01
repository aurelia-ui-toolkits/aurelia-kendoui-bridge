export class DatasourceBinding {
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
    change: function() {
      $('#cancel, #save').toggleClass('k-state-disabled', !this.hasChanges());
    },
    schema: {
      model: {
        id: 'ProductID',
        fields: {
          ProductID: { type: 'number' },
          ProductName: { type: 'string' },
          UnitPrice: { type: 'number' },
          Discontinued: { type: 'boolean' },
          UnitsInStock: { type: 'number' }
        }
      }
    }
  });

  sheets = [{
    name: 'Products',
    rows: [{
      height: 40,
      cells: [{
        bold: 'true',
        background: '#9c27b0',
        textAlign: 'center',
        color: 'white'
      }, {
        bold: 'true',
        background: '#9c27b0',
        textAlign: 'center',
        color: 'white'
      }, {
        bold: 'true',
        background: '#9c27b0',
        textAlign: 'center',
        color: 'white'
      }, {
        bold: 'true',
        background: '#9c27b0',
        textAlign: 'center',
        color: 'white'
      }, {
        bold: 'true',
        background: '#9c27b0',
        textAlign: 'center',
        color: 'white'
      }]
    }],
    columns: [
      { width: 100 },
      { width: 415 },
      { width: 145 },
      { width: 145 },
      { width: 145 }
    ]
  }];

  constructor() {
    this.sheets[0].dataSource = this.dataSource;
  }

  save(e) {
    if (!$(e.target).hasClass('k-state-disabled')) {
      this.dataSource.sync();
    }
  }

  cancel(e) {
    if (!$(e.target).hasClass('k-state-disabled')) {
      this.dataSource.cancelChanges();
    }
  }
}
