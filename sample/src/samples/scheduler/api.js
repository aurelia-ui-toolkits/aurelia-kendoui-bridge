import {bindable} from 'aurelia-templating';

export class Api {
  @bindable currentView = 'week';
  @bindable currentDate = new Date('2013/6/13');
  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 7:00');


  currentViewChanged() {
    this.scheduler.view(this.currentView);
  }

  currentDateChanged() {
    this.scheduler.date(this.currentDate);
  }

  views = [
    'day',
    { type: 'week', selected: true },
    'month',
    'agenda',
    'timeline'
  ];

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
        id: 'taskID',
        fields: {
          taskID: { from: 'TaskID', type: 'number' },
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
    }
  }
}
