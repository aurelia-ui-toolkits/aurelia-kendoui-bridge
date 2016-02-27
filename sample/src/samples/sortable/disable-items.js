export class DisableItems {
  hint(e) {
    return $(e).clone().addClass('sortable-basic-use-hint');
  }

  placeholder(e) {
    return $(e).clone().addClass('sortable-basic-use-placeholder').text('drop here');
  }
}
