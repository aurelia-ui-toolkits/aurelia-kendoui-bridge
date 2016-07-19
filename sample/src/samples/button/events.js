export class Events {
  btnClicked(e) {
    let id = kendo.jQuery(e.event.target).closest('.k-button').attr('id');
    this.logger.log(`event :: click (${id})`);
  }
}
