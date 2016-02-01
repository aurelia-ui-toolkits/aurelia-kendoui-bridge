export class Events {
  onChange() {
    this.logger.log('Change :: ' + this.calendar.value());
  }
}
