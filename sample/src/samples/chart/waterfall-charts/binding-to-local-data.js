import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  series = [{
    type: 'waterfall',
    field: 'amount',
    categoryField: 'period',
    summaryField: 'summary',
    color: function(point) {
      let summary = point.dataItem.summary;
      if (summary) {
        return summary === 'total' ? '#555' : 'gray';
      }

      if (point.value > 0) {
        return 'green';
      } else {
        return 'red';
      }
    },
    labels: {
      visible: true,
      format: 'C0',
      position: 'insideEnd'
    }
  }]
}
