export class SmoothScatterLine {

  series = [{
    name: '0.8C',
    data: [[10, 10], [15, 20], [20, 25], [32, 15], [43, 50], [55, 30], [60, 70], [70, 50], [90, 100]]
  }, {
    name: '1.6C',
    data: [[10, 40], [17, 50], [22, 70], [35, 60], [47, 95], [60, 100]]
  }, {
    name: '3.1C',
    data: [[10, 70], [13, 90], [25, 100]]
  }];

  xAxis = {
    max: 90,
    labels: {
      format: '{0}m'
    },
    title: {
      text: 'Time'
    }
  };

  yAxis = {
    max: 100,
    labels: {
      format: '{0}%'
    },
    title: {
      text: 'Charge'
    }
  };

  tooltip = {
    visible: true,
    format: '{1}% in {0} minutes'
  };
}
