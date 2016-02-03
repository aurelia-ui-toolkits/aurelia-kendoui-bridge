export class DisableDates {
  today = new Date();
  firstDate = new Date('11/13/2015');
  holidays = [
    new Date('1/1/2015'),
    new Date('1/19/2015'),
    new Date('2/16/2015'),
    new Date('4/16/2015'),
    new Date('5/10/2015'),
    new Date('5/25/2015'),
    new Date('6/21/2015'),
    new Date('7/3/2015'),
    new Date('9/7/2015'),
    new Date('10/12/2015'),
    new Date('11/11/2015'),
    new Date('11/26/2015'),
    new Date('11/27/2015'),
    new Date('12/25/2015')
  ];

  disableDates(date) {
    let dates = this.holidays;
    if (date && this.compareDates(date, dates)) {
      return true;
    } else {
      return false;
    }
  }

  compareDates(date, dates) {
    for (let i = 0; i < dates.length; i++) {
      if (dates[i].getDate() === date.getDate() &&
      dates[i].getMonth() === date.getMonth() &&
      dates[i].getYear() === date.getYear()) {
        return true;
      }
    }
  }
}
