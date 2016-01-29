export class Restrictions {

  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 07:00 AM');


  onResize(e) {
    if (this.roomIsOccupied(e.start, e.end, e.event, e.resources) || this.attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
      this.scheduler.wrapper.find('.k-marquee-color').addClass('invalid-slot');
      e.preventDefault();
    }
  }

  onResizeEnd(e) {
    if (!this.checkAvailability(e.start, e.end, e.events)) {
      e.preventDefault();
    }
  }

  onMove(e) {
    if (this.roomIsOccupied(e.start, e.end, e.event, e.resources) || this.attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
      this.scheduler.wrapper.find('.k-event-drag-hint').addClass('invalid-slot');
    }
  }

  onMoveEnd(e) {
    if (!this.checkAvailability(e.start, e.end, e.event, e.resources)) {
      e.preventDefault();
    }
  }

  onAdd(e) {
    if (!this.checkAvailability(e.event.start, e.event.end, e.event)) {
      e.preventDefault();
    }
  }

  onSave(e) {
    if (!this.checkAvailability(e.event.start, e.event.end, e.event)) {
      e.preventDefault();
    }
  }

  resources = [
    {
      field: 'attendee',
      dataSource: [
        { text: 'Alex', value: 1, color: '#f8a398' },
        { text: 'Bob', value: 2, color: '#51a0ed' }
      ],
      title: 'Attendee'
    },
    {
      field: 'roomId',
      name: 'room',
      dataSource: [
        { text: 'Meeting Room 101', value: 1, color: '#6eb3fa' },
        { text: 'Meeting Room 201', value: 2, color: '#f58a8a' }
      ],
      title: 'Room'
    }
  ];


  dataSource = {
    data: [
      {
        meetingID: 1,
        title: 'Call Charlie about the project',
        start: new Date('2013/6/13 10:30'),
        end: new Date('2013/6/13 11:30'),
        roomId: 1,
        attendee: 1
      },
      {
        meetingID: 2,
        title: 'Performance review',
        start: new Date('2013/6/13 9:00'),
        end: new Date('2013/6/13 12:30'),
        roomId: 2,
        attendee: 2
      },
      {
        meetingID: 3,
        title: 'HR Lecture',
        start: new Date('2013/6/13 13:00'),
        end: new Date('2013/6/13 14:30'),
        roomId: 1,
        attendee: 2
      }
    ],
    schema: {
      model: {
        id: 'meetingID',
        fields: {
          meetingID: { type: 'number' },
          title: { defaultValue: 'No title', validation: { required: true } },
          start: { type: 'date' },
          end: { type: 'date' },
          roomId: { nullable: true },
          attendee: { defaultValue: 1 },
          isAllDay: { type: 'boolean' }
        }
      }
    }
  };

  occurrencesInRangeByResource(start, end, resourceFieldName, event, resources) {
    let occurrences = this.scheduler.occurrencesInRange(start, end);

    let idx = occurrences.indexOf(event);
    if (idx > -1) {
      occurrences.splice(idx, 1);
    }

    event = $.extend({}, event, resources);

    return this.filterByResource(occurrences, resourceFieldName, event[resourceFieldName]);
  }

  filterByResource(occurrences, resourceFieldName, value) {
    let result = [];
    let occurrence;

    for (let idx = 0, length = occurrences.length; idx < length; idx++) {
      occurrence = occurrences[idx];
      if (occurrence[resourceFieldName] === value) {
        result.push(occurrence);
      }
    }
    return result;
  }

  attendeeIsOccupied(start, end, event, resources) {
    let occurrences = this.occurrencesInRangeByResource(start, end, 'attendee', event, resources);
    if (occurrences.length > 0) {
      return true;
    }
    return false;
  }

  roomIsOccupied(start, end, event, resources) {
    let occurrences = this.occurrencesInRangeByResource(start, end, 'roomId', event, resources);
    if (occurrences.length > 0) {
      return true;
    }
    return false;
  }

  checkAvailability(start, end, event, resources) {
    if (this.attendeeIsOccupied(start, end, event, resources)) {
      setTimeout(function() {
        alert('This person is not available in this time period.');
      }, 0);

      return false;
    }

    if (this.roomIsOccupied(start, end, event, resources)) {
      setTimeout(function() {
        alert('This room is not available in this time period.');
      }, 0);

      return false;
    }

    return true;
  }
}
