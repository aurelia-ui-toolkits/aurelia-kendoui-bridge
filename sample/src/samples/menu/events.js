export class Events {
  onOpen(e) {
    this.logger.log('Opened: ' + (kendo.jQuery(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onClose(e) {
    this.logger.log('Closed: ' + (kendo.jQuery(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onSelect(e) {
    this.logger.log('Selected: ' + kendo.jQuery(e.item).children('.k-link').text());
  }

  onActivate(e) {
    this.logger.log('Activated: ' + (kendo.jQuery(e.item).children('.k-link').text() || 'ContextMenu'));
  }

  onDeactivate(e) {
    this.logger.log('Deactivated: ' + (kendo.jQuery(e.item).children('.k-link').text() || 'ContextMenu'));
  }
}
