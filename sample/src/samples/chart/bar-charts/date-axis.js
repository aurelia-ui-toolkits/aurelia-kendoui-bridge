export class DateAxis {
  datasource = {
    data: [
      { value: 30, date: new Date('2011/12/20') },
      { value: 50, date: new Date('2011/12/21') },
      { value: 45, date: new Date('2011/12/22') },
      { value: 40, date: new Date('2011/12/23') },
      { value: 35, date: new Date('2011/12/24') },
      { value: 40, date: new Date('2011/12/25') },
      { value: 42, date: new Date('2011/12/26') },
      { value: 40, date: new Date('2011/12/27') },
      { value: 35, date: new Date('2011/12/28') },
      { value: 43, date: new Date('2011/12/29') },
      { value: 38, date: new Date('2011/12/30') },
      { value: 30, date: new Date('2011/12/31') },
      { value: 48, date: new Date('2012/01/01') },
      { value: 50, date: new Date('2012/01/02') },
      { value: 55, date: new Date('2012/01/03') },
      { value: 35, date: new Date('2012/01/04') },
      { value: 30, date: new Date('2012/01/05') }
    ]
  };

  series = [{
    type: 'column',
    aggregate: 'avg',
    field: 'value',
    categoryField: 'date'
  }];

  categoryAxis = {
    baseUnit: 'weeks'
  };

  refresh() {
    let baseUnitInputs = $('input:radio[name=baseUnit]');
    let aggregateInputs = $('input:radio[name=aggregate]');

    for (let i = 0, length = this.chart.options.series.length; i < length; i++) {
      this.chart.options.series[i].aggregate = aggregateInputs.filter(':checked').val();
    }

    this.chart.options.categoryAxis.baseUnit = baseUnitInputs.filter(':checked').val();

    this.chart.refresh();
  }

  attached() {
    $('.box-col').bind('change', () => this.refresh());
  }
}
