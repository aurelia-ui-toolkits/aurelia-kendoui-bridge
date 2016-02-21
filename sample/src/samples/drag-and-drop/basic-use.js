export class BasicUse {
  axis = '';
  cursorOffset = false;

  draggableOnDragStart(e) {
    $(this.draggableDiv).addClass('hollow');
    $(this.droptarget).text('Drop here.');
    $(this.droptarget).removeClass('painted');
  }

  droptargetOnDragEnter(e) {
    $(this.droptargetDiv).text('Now drop...');
    $(this.droptargetDiv).addClass('painted');
  }

  droptargetOnDragLeave(e) {
    $(this.droptargetDiv).text('Drop here.');
    $(this.droptargetDiv).removeClass('painted');
  }

  droptargetOnDrop(e) {
    $(this.droptargetDiv).text('You did great!');
    $(this.draggableDiv).removeClass('hollow');
  }

  onHint(e) {
    return $(this.draggableDiv).clone();
  }

  draggableOnDragEnd(e) {
    if (this.draggable.dropped) {
      // drag ended outside of any droptarget
      $(this.droptarget).text('Try again!');
    }

    $(this.draggableDiv).removeClass('hollow');
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
