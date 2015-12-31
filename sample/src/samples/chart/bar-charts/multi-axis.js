export class MultiAxis {
  series = [{
    type: 'column',
    data: [20, 40, 45, 30, 50],
    stack: true,
    name: 'on battery',
    color: '#003c72'
  }, {
    type: 'column',
    data: [20, 30, 35, 35, 40],
    stack: true,
    name: 'on gas',
    color: '#0399d4'
  }, {
    type: 'line',
    data: [30, 38, 40, 32, 42],
    name: 'mpg',
    color: '#642381',
    axis: 'mpg'
  }, {
    type: 'line',
    data: [7.8, 6.2, 5.9, 7.4, 5.6],
    name: 'l/100 km',
    color: '#e5388a',
    axis: 'l100km'
  }];

  valueAxis = [{
    title: { text: 'miles' },
    min: 0,
    max: 100
  }, {
    name: 'km',
    title: { text: 'km' },
    min: 0,
    max: 161,
    majorUnit: 32
  }, {
    name: 'mpg',
    title: { text: 'miles per gallon' },
    color: '#642381'
  }, {
    name: 'l100km',
    title: { text: 'liters per 100km' },
    color: '#e5388a'
  }];

  categoryAxis = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    axisCrossingValues: [0, 0, 10, 10]
  };
}
