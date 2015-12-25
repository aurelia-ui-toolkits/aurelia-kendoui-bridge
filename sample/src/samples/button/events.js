export class Events {
  btnClicked(e) {
    let id = $(e.event.target).closest('.k-button').attr('id');
    this.logger.log(`event :: click (${id})`);
  }
}
