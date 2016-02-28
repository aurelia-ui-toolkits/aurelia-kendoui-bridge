export class SortablePanels {
  hint(e) {
    return $(e).clone().addClass('sortable-panels-hint')
                .height($(e).height())
                .width($(e).width());
  }

  placeholder(e) {
    return $(e).clone().addClass('sortable-panels-placeholder');
  }
}
