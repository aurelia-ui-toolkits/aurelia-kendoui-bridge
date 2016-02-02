export class CustomizingTemplates {
  today = new Date();
  month = {
    // template for dates in month view
    content: '# if (isInArray(data.date, data.dates)) { #' +
                 '<div class="birthday"></div>' +
             '# } #' +
             '#= data.value #'
  };

  constructor() {
    // 'month' templates in calendar and datetimepicker are pretty limited (in extensibility)
    // so unfortunately we need to globalize any function we want to use in a template
    window.isInArray = function(date, dates) {
      for (let idx = 0, length = dates.length; idx < length; idx++) {
        let d = dates[idx];
        if (date.getFullYear() === d.getFullYear() &&
        date.getMonth() === d.getMonth() &&
        date.getDate() === d.getDate()) {
          return true;
        }
      }

      return false;
    };

    this.events = [
      new Date(this.today.getFullYear(), this.today.getMonth(), 11, 10, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth(), 11, 10, 30, 0),
      new Date(this.today.getFullYear(), this.today.getMonth(), 11, 14, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth() + 1, 6, 20, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth() + 1, 27, 8, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth() + 1, 27, 18, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth() - 1, 3, 12, 0, 0),
      new Date(this.today.getFullYear(), this.today.getMonth() - 2, 22, 16, 30, 0)
    ];
  }

  onOpen() {
    let dateViewCalendar = this.datetimepicker.dateView.calendar;
    if (dateViewCalendar) {
      dateViewCalendar.element.width(300);
    }
  }
}
