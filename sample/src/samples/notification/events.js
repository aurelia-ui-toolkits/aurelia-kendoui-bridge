export class Events {
  showNotification() {
    let d = new Date();
    let message = {
      time: kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), '000')
    };
    this.notification.show(message, 'time');
  }

  hideAllNotifications() {
    this.notification.hide();
  }
}
