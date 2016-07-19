export class ContentTemplate {
  getTemplate(e) {
    return kendo.template(kendo.jQuery(this.template).html())(e);
  }
}
