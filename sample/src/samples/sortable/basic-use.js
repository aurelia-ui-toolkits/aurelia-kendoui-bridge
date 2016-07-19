export class BasicUse {
  hint(e) {
    return kendo.jQuery(e).clone().addClass('sortable-basic-use-hint');
  }

  placeholder(e) {
    return kendo.jQuery(e).clone().addClass('sortable-basic-use-placeholder').text('drop here');
  }
}
