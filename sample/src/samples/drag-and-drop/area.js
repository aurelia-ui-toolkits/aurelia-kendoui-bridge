export class Area {
  hint() {
    return kendo.jQuery(this.dragDiv).clone();
  }

  draggableOnDragStart(e) {
    kendo.jQuery(this.dragDiv).addClass('hollow');
    kendo.jQuery(this.dropDiv).html('<div class="test1">(Drop here)</div><div class="test2">(Drop here)</div>');
  }

  droptargetOnDragEnter(e) {
    kendo.jQuery(e.dropTarget).text('Now you can drop it.');
  }

  droptargetOnDragLeave(e) {
    kendo.jQuery(e.dropTarget).text('(Drop here)');
  }

  droptargetOnDrop(e) {
    kendo.jQuery(e.dropTarget).text('You did great!');
    kendo.jQuery(this.dragDiv).removeClass('hollow');
  }

  draggableOnDragEnd(e) {
    if (!this.drag.dropped) {
      // drag ended outside of any droptarget
      kendo.jQuery(this.dropDiv).html('<div class="test1">(Try again)</div><div class="test2">(Try again)</div>');
    }

    kendo.jQuery(this.dragDiv).removeClass('hollow');
  }
}
