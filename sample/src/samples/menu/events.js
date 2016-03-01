export class Events {
  onOpen(e) {
    this.logger.log('Opened: ' + ($(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onClose(e) {
    this.logger.log('Closed: ' + ($(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onSelect(e) {
    this.logger.log('Selected: ' + $(e.item).children('.k-link').text());
  }

  onActivate(e) {
    this.logger.log('Activated: ' + ($(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onDeactivate(e) {
    this.logger.log('Deactivated: ' + ($(e.item).children('.k-link').text() || 'ContextMenu'));
  }
}
