export class BindingToLocalData {

  series = [{
    name: 'Task A',
    fromField: 'fromA',
    toField: 'toA'
  }, {
    name: 'Task B',
    fromField: 'fromB',
    toField: 'toB'
  }];

  categoryAxis = {
    field: 'day',
    majorGridLines: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    template: '#= value.from # - #= value.to #'
  };

  taskCompleteness = [{
    'fromA': 0,
    'toA': 10,
    'fromB': 0,
    'toB': 30,
    'day': 'Monday'
  }, {
    'fromA': 10,
    'toA': 30,
    'fromB': 30,
    'toB': 45,
    'day': 'Tuesday'
  }, {
    'fromA': 30,
    'toA': 40,
    'fromB': 45,
    'toB': 60,
    'day': 'Wednesday'
  }, {
    'fromA': 40,
    'toA': 60,
    'fromB': 60,
    'toB': 80,
    'day': 'Thursday'
  }, {
    'fromA': 60,
    'toA': 100,
    'fromB': 80,
    'toB': 100,
    'day': 'Friday'
  }];
}
