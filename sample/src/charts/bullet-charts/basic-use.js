export class BasicUse {

  height = 120;

  legend = {
    visible: false
  };

  series_mmHg = [{
    type: 'bullet',
    data: [[750, 762.5]]
  }];

  series_hPa = [{
    type: 'bullet',
    data: [[1001, 1017]]
  }];

  series_hum = [{
    type: 'bullet',
    data: [[45, 60]]
  }];

  series_temp = [{
    type: 'bullet',
    data: [[25, 22]]
  }];

  chartArea = {
    margin: {
      left: 0
    }
  };

  categoryAxis = {
    majorGridLines: {
      visible: false
    },
    majorTicks: {
      visible: false
    }
  };

  valueAxis_mmHg = [{
    plotBands: [{
      from: 715, to: 752, color: '#ccc', opacity: 0.6
    }, {
      from: 752, to: 772, color: '#ccc', opacity: 0.3
    }],
    majorGridLines: {
      visible: false
    },
    min: 715,
    max: 795,
    minorTicks: {
      visible: true
    }
  }];

  valueAxis_hPa = [{
    plotBands: [{
      from: 955, to: 1002, color: '#ccc', opacity: 0.6
    }, {
      from: 1002, to: 1027, color: '#ccc', opacity: 0.3
    }],
    majorGridLines: {
      visible: false
    },
    min: 955,
    max: 1055,
    minorTicks: {
      visible: true
    }
  }];

  valueAxis_hum = [{
    plotBands: [{
      from: 0, to: 33, color: '#ccc', opacity: 0.6
    }, {
      from: 33, to: 66, color: '#ccc', opacity: 0.3
    }],
    majorGridLines: {
      visible: false
    },
    min: 0,
    max: 100,
    minorTicks: {
      visible: true
    }
  }];

  valueAxis_temp = [{
    plotBands: [{
      from: 0, to: 10, color: 'yellow', opacity: 0.3
    }, {
      from: 10, to: 20, color: 'orange', opacity: 0.3
    }, {
      from: 20, to: 30, color: 'red', opacity: 0.3
    }],
    majorGridLines: {
      visible: false
    },
    min: 0,
    max: 30,
    minorTicks: {
      visible: true
    }
  }];

  tooltip_mmHg = {
    visible: true,
    format: '{0}%',
    template: '${series.name} ${value}'
  }
}
