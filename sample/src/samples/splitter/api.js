export class Api {
  paneIndex = '0';
  panes = [
    { collapsible: true, size: '100px' },
    { collapsible: false, contentUrl: 'http://kendo.jeroenvinke.nl/shared/web/splitter/ajax/ajaxContent1.html' },
    { collapsible: true, size: '20%' }
  ];

  getPane(index) {
    index = Number(index);

    let panes = kendo.jQuery(this.splitterElement).children('.k-pane');

    if (!isNaN(index) && index < panes.length) {
      return panes[index];
    }
  }

  toggle() {
    let pane = this.getPane(kendo.jQuery('#index').val());

    this.splitter.toggle(pane, kendo.jQuery(pane).width() <= 0);
  }

  setSize() {
    let pane = this.getPane(kendo.jQuery('#index').val());

    if (!pane) return;

    this.splitter.size(pane, kendo.jQuery('#size').val());
  }

  setMinSize() {
    let pane = this.getPane(kendo.jQuery('#index').val());

    if (!pane) return;

    this.splitter.min(pane, kendo.jQuery('#min').val());
  }

  setMaxSize() {
    let pane = this.getPane(kendo.jQuery('#index').val());

    if (!pane) return;

    this.splitter.max(pane, kendo.jQuery('#max').val());
  }

  appendPane() {
    this.splitter.append().html('appended pane');
  }

  removePane() {
    this.splitter.remove(this.splitter.element.children('.k-pane').eq(kendo.jQuery('#index').val()));
  }

  insertBefore() {
    this.splitter.insertBefore({}, this.splitter.element.children('.k-pane').eq(kendo.jQuery('#index').val())).html('inserted before');
  }

  insertAfter() {
    this.splitter.insertAfter({}, this.splitter.element.children('.k-pane').eq(kendo.jQuery('#index').val())).html('inserted after');
  }
}
