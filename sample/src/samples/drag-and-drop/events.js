export class Events {
  draggableOnDragStart(e) {
    this.logger.log('drag start');
    $(this.draggableDiv).addClass('hollow');
    $(this.droptarget).text('Drop here.');
    $(this.droptarget).removeClass('painted');
  }

  droptargetOnDragEnter(e) {
    this.logger.log('droptarget enter');
    $(this.droptargetDiv).text('Now drop...');
    $(this.droptargetDiv).addClass('painted');
  }

  droptargetOnDragLeave(e) {
    this.logger.log('droptarget leave');
    $(this.droptargetDiv).text('Drop here.');
    $(this.droptargetDiv).removeClass('painted');
  }

  droptargetOnDrop(e) {
    this.logger.log('drop');
    $(this.droptargetDiv).text('You did great!');
    $(this.draggableDiv).removeClass('hollow');
  }

  onHint(e) {
    return $(this.draggableDiv).clone();
  }

  draggableOnDragEnd(e) {
    this.logger.log('drag end');

    if (this.draggable.dropped) {
      // drag ended outside of any droptarget
      $(this.droptarget).text('Try again!');
    }

    $(this.draggableDiv).removeClass('hollow');
  }
}
