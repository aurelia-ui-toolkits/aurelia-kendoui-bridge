export class Events {
    constructor() {

    }

    onOpen() {
      this.logger.log('Open');
    }

    onClose() {
      this.logger.log('Close');
    }

    onChange() {
      this.logger.log('Change :: ' + this.datetimepicker.value());
    }
}