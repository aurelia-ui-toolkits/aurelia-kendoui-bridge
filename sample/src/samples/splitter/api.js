export class Api {
  paneIndex = '0';
  panes = [
    { collapsible: true, size: '100px' },
    { collapsible: false, contentUrl: 'http://kendo.jeroenvinke.nl/shared/web/splitter/ajax/ajaxContent1.html' },
    { collapsible: true, size: '20%' }
  ];

  getPane(index) {
    index = Number(index);

    let panes = $(this.splitterElement).children('.k-pane');

    if (!isNaN(index) && index < panes.length) {
      return panes[index];
    }
  }

  toggle() {
    let pane = this.getPane($('#index').val());

    this.splitter.toggle(pane, $(pane).width() <= 0);
  }

  setSize() {
    let pane = this.getPane($('#index').val());

    if (!pane) return;

    this.splitter.size(pane, $('#size').val());
  }

  setMinSize() {
    let pane = this.getPane($('#index').val());

    if (!pane) return;

    this.splitter.min(pane, $('#min').val());
  }

  setMaxSize() {
    let pane = this.getPane($('#index').val());

    if (!pane) return;

    this.splitter.max(pane, $('#max').val());
  }

  appendPane() {
    this.splitter.append().html('appended pane');
  }

  removePane() {
    this.splitter.remove(this.splitter.element.children('.k-pane').eq($('#index').val()));
  }

  insertBefore() {
    this.splitter.insertBefore({}, this.splitter.element.children('.k-pane').eq($('#index').val())).html('inserted before');
  }

  insertAfter() {
    this.splitter.insertAfter({}, this.splitter.element.children('.k-pane').eq($('#index').val())).html('inserted after');
  }
}
