export class ContentTemplate {
  getTemplate(e) {
    return kendo.template($(this.template).html())(e);
  }
}
