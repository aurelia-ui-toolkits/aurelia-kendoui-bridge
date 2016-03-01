export class Events {
  panes = [
    { collapsible: true, size: '100px' },
    { collapsible: false, contentUrl: 'http://kendo.jeroenvinke.nl/shared/web/splitter/ajax/ajaxContent1.html' },
    { collapsible: true, size: '20%' }
  ];

  resize(e) {
    this.logger.log('Resized :: Splitter <b>#' + e.sender.element[0].id + '</b>');
  }

  expand(e) {
    this.logger.log('Expanded :: Pane <b>#' + e.pane.id + '</b> from splitter <b>#' + this.splitter.element[0].id + '</b> expanded');
  }

  collapse(e) {
    this.logger.log('Collapsed :: Pane <b>#' + e.pane.id + '</b> from splitter <b>#' + this.splitter.element[0].id + '</b> collapsed');
  }

  contentLoad(e) {
    this.logger.log('Content loaded in <b>#' + e.pane.id + '</b> and starts with <b>' + $(this.splitter.pane).text().substr(0, 20) + '...</b>');
  }
}
