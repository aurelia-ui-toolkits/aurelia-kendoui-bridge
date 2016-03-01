export class Ajax {
  content = {
    url: 'http://kendo.jeroenvinke.nl/shared/web/tooltip/ajax/ajaxContent1.html'
  };

  onRequestStart(e) {
    if (e.target.data('id')) {
      e.options.url = `http://kendo.jeroenvinke.nl/shared/web/tooltip/ajax/ajaxContent${e.target.data('id')}.html`;
    }
  }
}
