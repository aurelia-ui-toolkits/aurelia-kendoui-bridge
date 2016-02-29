export class Events {
  title = 'Rams\'s Ten Principles of Good Design';
  content = 'http://demos.telerik.com/kendo-ui/content/web/window/ajax/ajaxContent1.html';

  open() {
    this.window.open();
    $(this.undo).fadeOut();
  }

  onClose() {
    $(this.undo).fadeIn();
    this.logger.log('close');
  }
}
