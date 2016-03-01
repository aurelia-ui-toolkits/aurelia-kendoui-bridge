export class Events {

  contentUrls = [undefined, undefined, undefined, 'http://kendo.jeroenvinke.nl/shared/web/panelbar/ajax/ajaxContent1.html', 'error.html'];

  onSelect(e) {
    this.logger.log('Select: ' + $(e.item).find('> .k-link').text());
  }

  onExpand(e) {
    this.logger.log('Expand: ' + $(e.item).find('> .k-link').text());
  }

  onCollapse(e) {
    this.logger.log('Collapse: ' + $(e.item).find('> .k-link').text());
  }

  onActivate(e) {
    this.logger.log('Activate: ' + $(e.item).find('> .k-link').text());
  }

  onContentLoad(e) {
    this.logger.log('Content loaded in <b>' + $(e.item).find('> .k-link').text() +
      '</b> and starts with <b>' + $(e.contentElement).text().substr(0, 20) + '...</b>');
  }

  onError(e) {
    this.logger.error('Loading failed with ' + e.xhr.statusText + ' ' + e.xhr.status);
  }
}
