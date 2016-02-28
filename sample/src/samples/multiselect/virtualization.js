export class Virtualization {
  constructor() {
    this.virtual = {
      itemHeight: 26,
      valueMapper: (options) => {
        $.ajax({
          url: '//demos.telerik.com/kendo-ui/service/Orders/ValueMapper',
          type: 'GET',
          dataType: 'jsonp',
          data: this.convertValues(options.value),
          success: (data) => {
            options.success(data);
          }
        });
      }
    };
  }

  dataSource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
    },
    schema: {
      model: {
        fields: {
          OrderID: { type: 'number' },
          Freight: { type: 'number' },
          ShipName: { type: 'string' },
          OrderDate: { type: 'date' },
          ShipCity: { type: 'string' }
        }
      }
    },
    pageSize: 80,
    serverPaging: true,
    serverFiltering: true
  };

  convertValues(value) {
    let data = {};

    value = $.isArray(value) ? value : [value];

    for (let idx = 0; idx < value.length; idx++) {
      data['values[' + idx + ']'] = value[idx];
    }

    return data;
  }
}
