export class Events {
  title = 'Rams\'s Ten Principles of Good Design';
  content = 'http://kendo.jeroenvinke.nl/shared/web/window/ajax/ajaxContent1.html';

  open() {
    this.window.open();
    kendo.jQuery(this.undo).fadeOut();
  }

  onClose() {
    kendo.jQuery(this.undo).fadeIn();
    this.logger.log('close');
  }
}
