export class Handlers {
  hint(e) {
    return $(e).clone().addClass('sortable-handlers-hint');
  }
}
