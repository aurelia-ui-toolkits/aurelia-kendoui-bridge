import 'kendo-ui/js/kendo.notification.min';
import '../../shared/signalr';

export class BindingToSignalR {
  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 07:00 AM');

  constructor() {
    this.hubUrl = 'http://kendo.jeroenvinke.nl/signalr';
    this.connection = $.hubConnection(this.hubUrl, { useDefaultPath: false});
    this.hub = this.connection.createHubProxy('meetingHub');
    this.hubStart = this.connection.start({ jsonp: true });

    this.dataSource = new kendo.data.SchedulerDataSource({
      type: 'signalr',
      push: (e) => {
        let notification = $(this.notification).data('kendoNotification');
        notification.success(e.type);
      },
      transport: {
        signalr: {
          promise: this.hubStart,
          hub: this.hub,
          server: {
            read: 'read',
            update: 'update',
            destroy: 'destroy',
            create: 'create'
          },
          client: {
            read: 'read',
            update: 'update',
            destroy: 'destroy',
            create: 'create'
          }
        }
      },
      schema: {
        model: {
          id: 'ID',
          fields: {
            ID: {
              editable: false,
              type: 'string',
              defaultValue: null
            },
            roomId: {
              type: 'number',
              defaultValue: null,
              from: 'RoomID'
            },
            attendees: {
              type: 'object',
              from: 'Attendees'
            },
            start: {
              type: 'date',
              from: 'Start'
            },
            end: {
              type: 'date',
              from: 'End'
            },
            title: {
              type: 'string',
              from: 'Title'
            },
            description: {
              type: 'string',
              from: 'Description'
            },
            recurrenceID: {
              type: 'number',
              from: 'RecurrenceID'
            },
            recurrenceRule: {
              type: 'string',
              from: 'RecurrenceRule'
            },
            recurrenceException: {
              type: 'string',
              from: 'RecurrenceException'
            },
            isAllDay: {
              type: 'boolean',
              from: 'IsAllDay'
            },
            startTimezone: {
              type: 'string',
              from: 'StartTimezone'
            },
            endTimezone: {
              type: 'string',
              from: 'EndTimezone'
            }
          }
        }
      }
    });
  }


  attached() {
    $(this.notification).kendoNotification({
      width: '100%',
      position: {
        top: 0,
        left: 0
      }
    });
  }

  resources = [{
    field: 'roomId',
    dataSource: [
      { text: 'Meeting Room 101', value: 1, color: '#6eb3fa' },
      { text: 'Meeting Room 201', value: 2, color: '#f58a8a' }
    ],
    title: 'Room'
  },
  {
    field: 'attendees',
    dataSource: [
      { text: 'Alex', value: 1, color: '#f8a398' },
      { text: 'Bob', value: 2, color: '#51a0ed' },
      { text: 'Charlie', value: 3, color: '#56ca85' }
    ],
    multiple: true,
    title: 'Attendees'
  }];
}
