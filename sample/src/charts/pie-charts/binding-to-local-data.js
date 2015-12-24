export class BindingToLocalData {
  dataSource = [
    {
      'source': 'Hydro',
      'percentage': 22,
      'explode': true
    },
    {
      'source': 'Solar',
      'percentage': 2
    },
    {
      'source': 'Nuclear',
      'percentage': 49
    },
    {
      'source': 'Wind',
      'percentage': 27
    }
  ];

  legend = {
    position: 'bottom'
  };

  series = [{
    type: 'pie',
    field: 'percentage',
    categoryField: 'source',
    explodeField: 'explode'
  }];

  seriesColors: ['#03a9f4', '#ff9800', '#fad84a', '#4caf50'];

  tooltip = {
    visible: true,
    template: '${ category } - ${ value }%'
  }
}
