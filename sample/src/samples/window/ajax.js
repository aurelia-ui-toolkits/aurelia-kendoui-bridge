export class Ajax {
  title = 'Rams\'s Ten Principles of Good Design';
  content = 'http://kendo.jeroenvinke.nl/shared/web/window/ajax/ajaxContent.html';

  open() {
    this.window.open();
    kendo.jQuery(this.undo).fadeOut();
  }

  onClose() {
    kendo.jQuery(this.undo).fadeIn();
  }
}
