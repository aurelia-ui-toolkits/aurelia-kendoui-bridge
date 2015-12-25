export class BindingToLocalData {

  dataBefore = [
    {
      description: 'All Visitors',
      visitors: 23945
    }, {
      description: 'Tried the Demos',
      visitors: 19156
    }, {
      description: 'Downloaded',
      visitors: 13984
    }, {
      description: 'Requested a Quote',
      visitors: 3216
    }, {
      description: 'Purchased',
      visitors: 1673
    }
  ];

  dataAfter = [
    {
      description: 'All Visitors',
      visitors: 28536
    }, {
      description: 'Tried the Demos',
      visitors: 26539
    }, {
      description: 'Downloaded',
      visitors: 23088
    }, {
      description: 'Requested a Quote',
      visitors: 13853
    }, {
      description: 'Purchased',
      visitors: 9697
    }
  ];

  constructor() {
    this.seriesBefore = [{
      type: 'funnel',
      data: this.dataBefore,
      dynamicSlope: true,
      field: 'visitors',
      categoryField: 'description',
      dynamicHeight: false,
      labels: {
        color: 'black',
        visible: true,
        background: 'transparent',
        template: '#= category #: #= value#',
        align: 'left'
      }
    }];

    this.seriesAfter = [{
      type: 'funnel',
      data: this.dataAfter,
      dynamicSlope: true,
      field: 'visitors',
      categoryField: 'description',
      dynamicHeight: false,
      labels: {
        color: 'black',
        visible: true,
        background: 'transparent',
        template: '#= category #: #= value#',
        align: 'left'
      }
    }];
  }

  tooltip = {
    visible: true,
    template: '#= category # #= kendo.format("{0:p}",value/dataItem.parent()[0].visitors)#'
  }
}
