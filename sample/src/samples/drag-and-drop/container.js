export class Container {
  hint() {
    return kendo.jQuery(this.draggable).clone();
  }
}
