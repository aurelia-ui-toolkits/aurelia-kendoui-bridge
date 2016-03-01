export class BasicUse {
  showPopupNotification() {
    let d = new Date();
    let message = kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), '000');
    this.popupNotification.show(message, 'error');
  }

  showStaticNotification() {
    let d = new Date();
    let message = kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), '000');
    this.staticNotification.show(message, 'error');
    let container = $(this.staticNotification.options.appendTo);
    container.scrollTop(container[0].scrollHeight);
  }

  hideAllNotifications() {
    this.staticNotification.hide();
    this.popupNotification.hide();
  }
}
