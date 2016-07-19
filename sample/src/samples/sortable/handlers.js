export class Handlers {
  hint(e) {
    return kendo.jQuery(e).clone().addClass('sortable-handlers-hint');
  }
}
