export class HorizontalGrouping {
  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 07:00 AM');


  dataSource = {
    batch: true,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/meetings',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/meetings/update',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/meetings/create',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/meetings/destroy',
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
        id: 'meetingID',
        fields: {
          meetingID: { from: 'MeetingID', type: 'number' },
          title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
          start: { type: 'date', from: 'Start' },
          end: { type: 'date', from: 'End' },
          startTimezone: { from: 'StartTimezone' },
          endTimezone: { from: 'EndTimezone' },
          description: { from: 'Description' },
          recurrenceId: { from: 'RecurrenceID' },
          recurrenceRule: { from: 'RecurrenceRule' },
          recurrenceException: { from: 'RecurrenceException' },
          roomId: { from: 'RoomID', nullable: true },
          attendees: { from: 'Attendees', nullable: true },
          isAllDay: { type: 'boolean', from: 'IsAllDay' }
        }
      }
    }
  };

  resources = [{
    field: 'roomId',
    name: 'Rooms',
    dataSource: [
      { text: 'Meeting Room 101', value: 1, color: '#6eb3fa' },
      { text: 'Meeting Room 201', value: 2, color: '#f58a8a' }
    ],
    title: 'Room'
  },
  {
    field: 'attendees',
    name: 'Attendees',
    dataSource: [
      { text: 'Alex', value: 1, color: '#f8a398' },
      { text: 'Bob', value: 2, color: '#51a0ed' },
      { text: 'Charlie', value: 3, color: '#56ca85' }
    ],
    multiple: true,
    title: 'Attendees'
  }];
}
