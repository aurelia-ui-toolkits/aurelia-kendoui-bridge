export class Ajax {
  content = {
    url: 'http://demos.telerik.com/kendo-ui/content/web/tooltip/ajax/ajaxContent1.html'
  };

  onRequestStart(e) {
    if (e.target.data('id')) {
      e.options.url = `http://demos.telerik.com/kendo-ui/content/web/tooltip/ajax/ajaxContent${e.target.data('id')}.html`;
    }
  }
}
