export class Events {
  contentUrls = [
    '',
    'http://kendo.jeroenvinke.nl/shared/web/tabstrip/ajax/ajaxContent1.html',
    'http://demos.telerik.com/kendo-ui/tabstrip/error.html'
  ];

  select(e) {
    this.logger.log('Selected: ' + $(e.item).find('> .k-link').text());
  }

  show(e) {
    this.logger.log('Shown: ' + $(e.item).find('> .k-link').text());
  }

  onActivate(e) {
    this.logger.log('Activated: ' + $(e.item).find('> .k-link').text());
  }

  contentLoad(e) {
    this.logger.log('Content loaded in <b>' + $(e.item).find('> .k-link').text() + '</b> and starts with <b>' + $(e.contentElement).text().substr(0, 20) + '...</b>');
  }

  error(e) {
    this.logger.error('Loading failed with ' + e.xhr.statusText + ' ' + e.xhr.status);
  }
}
