export class BasicUse {

  series = [{
    type: 'rangeColumn',
    data: [[5, 11], [5, 13], [7, 15], [10, 19], [13, 23], [17, 28],
    [20, 30], [20, 30], [17, 26], [13, 22], [9, 16], [6, 13]]
  }];

  seriesDefaults = {
    labels: {
      visible: true,
      from: {
        template: '#=value.from# °C'
      },
      to: {
        template: '#=value.to# °C'
      }
    }
  };

  categoryAxis = {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    labels: {
      rotation: 'auto'
    }
  };

  tooltip = {
    visible: true,
    template: 'Avg Min Temp : #= value.from # °C <br>' +
    'Avg Max Temp : #= value.to # °C'
  }
}
