export class Area {
  hint() {
    return $(this.dragDiv).clone();
  }

  draggableOnDragStart(e) {
    $(this.dragDiv).addClass('hollow');
    $(this.dropDiv).html('<div class="test1">(Drop here)</div><div class="test2">(Drop here)</div>');
  }

  droptargetOnDragEnter(e) {
    $(e.dropTarget).text('Now you can drop it.');
  }

  droptargetOnDragLeave(e) {
    $(e.dropTarget).text('(Drop here)');
  }

  droptargetOnDrop(e) {
    $(e.dropTarget).text('You did great!');
    $(this.dragDiv).removeClass('hollow');
  }

  draggableOnDragEnd(e) {
    if (!this.drag.dropped) {
      // drag ended outside of any droptarget
      $(this.dropDiv).html('<div class="test1">(Try again)</div><div class="test2">(Try again)</div>');
    }

    $(this.dragDiv).removeClass('hollow');
  }
}
