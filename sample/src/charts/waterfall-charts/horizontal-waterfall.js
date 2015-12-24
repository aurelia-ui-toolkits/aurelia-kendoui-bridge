export class HorizontalWaterfall {

  requestData = [{
    caption: 'DNS Lookup',
    elapsed: 20
  }, {
    caption: 'Connecting',
    elapsed: 122
  }, {
    caption: 'Sending',
    elapsed: 30
  }, {
    caption: 'Waiting',
    elapsed: 421
  }, {
    caption: 'Receiving',
    elapsed: 357
  }, {
    caption: 'Total',
    summary: 'total'
  }];

  palette = [
    '#95c3cd', '#abc75b', '#c6816f', '#968cb2', '#c0c0c0', '#2ba6ff'
  ];

  series = [{
    type: 'horizontalWaterfall',
    field: 'elapsed',
    categoryField: 'caption',
    summaryField: 'summary',
    color: (point) => {
      return this.palette[point.index % this.palette.length];
    }
  }]
}
