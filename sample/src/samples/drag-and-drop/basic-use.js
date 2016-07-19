export class BasicUse {
  axis = '';
  cursorOffset = false;

  draggableOnDragStart(e) {
    kendo.jQuery(this.draggableDiv).addClass('hollow');
    kendo.jQuery(this.droptarget).text('Drop here.');
    kendo.jQuery(this.droptarget).removeClass('painted');
  }

  droptargetOnDragEnter(e) {
    kendo.jQuery(this.droptargetDiv).text('Now drop...');
    kendo.jQuery(this.droptargetDiv).addClass('painted');
  }

  droptargetOnDragLeave(e) {
    kendo.jQuery(this.droptargetDiv).text('Drop here.');
    kendo.jQuery(this.droptargetDiv).removeClass('painted');
  }

  droptargetOnDrop(e) {
    kendo.jQuery(this.droptargetDiv).text('You did great!');
    kendo.jQuery(this.draggableDiv).removeClass('hollow');
  }

  onHint(e) {
    return kendo.jQuery(this.draggableDiv).clone();
  }

  draggableOnDragEnd(e) {
    if (this.draggable.dropped) {
      // drag ended outside of any droptarget
      kendo.jQuery(this.droptarget).text('Try again!');
    }

    kendo.jQuery(this.draggableDiv).removeClass('hollow');
  }

  axisChanged() {
    this.draggable.options.axis = this.axis;
  }

  cursorOffsetChanged() {
    if (this.cursorOffset) {
      this.draggable.options.cursorOffset = { top: 10, left: 10 };
    } else {
      this.draggable.options.cursorOffset = null;
    }
  }
}
