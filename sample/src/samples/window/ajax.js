export class Ajax {
  title = 'Rams\'s Ten Principles of Good Design';
  content = 'http://kendo.jeroenvinke.nl/shared/web/window/ajax/ajaxContent.html';

  open() {
    this.window.open();
    $(this.undo).fadeOut();
  }

  onClose() {
    $(this.undo).fadeIn();
  }
}
