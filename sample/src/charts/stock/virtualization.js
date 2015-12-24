export class Virtualization {
  stockDataSchema = {
    model: {
      fields: {
        Date: {
          type: 'date'
        }
      }
    }
  };

  series = [{
    type: 'candlestick',
    openField: 'Open',
    highField: 'High',
    lowField: 'Low',
    closeField: 'Close'
  }];

  constructor() {
    this.dataSource = {
      serverFiltering: true,
      transport: {
        read: {
          url: '//demos.telerik.com/kendo-ui/service/StockData',
          dataType: 'jsonp'
        },
        parameterMap: function(data) {
          return { filter: JSON.stringify(data.filter) };
        }
      },
      schema: this.stockDataSchema
    };

    this.navigator = {
      dataSource: {
        transport: {
          read: {
            url: '//demos.telerik.com/kendo-ui/service/StockData',
            dataType: 'jsonp'
          }
        },
        schema: this.stockDataSchema
      },
      series: {
        type: 'area',
        field: 'High'
      },
      select: {
        from: '2009/02/05',
        to: '2011/10/07'
      }
    };
  }
}
