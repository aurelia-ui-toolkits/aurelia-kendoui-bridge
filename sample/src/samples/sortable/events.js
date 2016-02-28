export class Events {
  hint(e) {
    return $(e).clone().addClass('sortable-events-hint');
  }

  placeholder(e) {
    return $(e).clone().addClass('sortable-events-placeholder');
  }

  onStart(e) {
    let id = e.sender.element.attr('id');
    this.logger.log(`${id} start: ${e.item.text()}`);
  }

  onMove(e) {
    let id = e.sender.element.attr('id');
    let placeholder = e.list.placeholder;
    let index = e.sender.indexOf(placeholder);

    this.logger.log(`${id} move to index: ${index}`);
  }

  onEnd(e) {
    let id = e.sender.element.attr('id');
    let text = e.item.text();
    let oldIndex = e.oldIndex;
    let newIndex = e.newIndex;

    this.logger.log(`${id} end: ${text} oldIndex: ${oldIndex} newIndex: ${newIndex} action: ${e.action}`);
  }

  onChange(e) {
    let id = e.sender.element.attr('id');
    let text = e.item.text();
    let newIndex = e.newIndex;
    let oldIndex = e.oldIndex;

    this.logger.log(`${id} change: ${text} newIndex: ${newIndex} oldIndex: ${oldIndex} action: ${e.action}`);
  }

  onCancel(e) {
    this.logger.log('cancel');
  }
}
