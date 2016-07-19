export class SortablePanels {
  hint(e) {
    return kendo.jQuery(e).clone().addClass('sortable-panels-hint')
                .height(kendo.jQuery(e).height())
                .width(kendo.jQuery(e).width());
  }

  placeholder(e) {
    return kendo.jQuery(e).clone().addClass('sortable-panels-placeholder');
  }
}
