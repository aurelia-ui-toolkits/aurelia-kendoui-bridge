export class BasicUse {

  employees = [{
    name: 'alex',
    checked: true,
    id: 1
  }, {
    name: 'bob',
    checked: true,
    id: 2
  }, {
    name: 'charlie',
    id: 3
  }];

  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 07:00 AM');

  filter() {
    this.datasource.filter({
      operator: task => {
        return this.employees.findIndex(i => i.checked && i.id === task.ownerId) > -1;
      }
    });
  }

  datasource = new kendo.data.SchedulerDataSource({
    batch: true,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/tasks',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/tasks/update',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/tasks/create',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/tasks/destroy',
        dataType: 'jsonp'
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read' && options.models) {
          return {models: kendo.stringify(options.models)};
        }
      }
    },
    schema: {
      model: {
        id: 'taskId',
        fields: {
          taskId: { from: 'TaskID', type: 'number' },
          title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
          start: { type: 'date', from: 'Start' },
          end: { type: 'date', from: 'End' },
          startTimezone: { from: 'StartTimezone' },
          endTimezone: { from: 'EndTimezone' },
          description: { from: 'Description' },
          recurrenceId: { from: 'RecurrenceID' },
          recurrenceRule: { from: 'RecurrenceRule' },
          recurrenceException: { from: 'RecurrenceException' },
          ownerId: { from: 'OwnerID', defaultValue: 1 },
          isAllDay: { type: 'boolean', from: 'IsAllDay' }
        }
      }
    },
    filter: {
      logic: 'or',
      filters: [
        { field: 'ownerId', operator: 'eq', value: 1 },
        { field: 'ownerId', operator: 'eq', value: 2 }
      ]
    }
  });
}
