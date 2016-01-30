export class EventModeAndResize {
  snap = true;
  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 07:00 AM');

  snapChanged() {
    this.scheduler.options.snap = this.snap;
    this.scheduler.view(this.scheduler.view().name);
  }

  dataSource = {
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
          isAllDay: { type: 'boolean', from: 'IsAllDay' }
        }
      }
    }
  }
}
