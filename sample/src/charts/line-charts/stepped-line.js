export class SteppedArea {
  series = [{
    type: 'line',
    data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
    style: 'step',
    markers: {
      visible: false
    }
  }];

  categoryAxis = {
    title: {
      text: 'time'
    },
    majorGridLines: {
      visible: false
    },
    majorTicks: {
      visible: false
    }
  };

  valueAxis = {
    max: 22,
    title: {
      text: 'voltage'
    },
    majorGridLines: {
      visible: false
    },
    visible: false
  };
}
