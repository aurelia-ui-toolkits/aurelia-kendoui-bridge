export class Events {
  draggableOnDragStart(e) {
    this.logger.log('drag start');
    kendo.jQuery(this.draggableDiv).addClass('hollow');
    kendo.jQuery(this.droptarget).text('Drop here.');
    kendo.jQuery(this.droptarget).removeClass('painted');
  }

  droptargetOnDragEnter(e) {
    this.logger.log('droptarget enter');
    kendo.jQuery(this.droptargetDiv).text('Now drop...');
    kendo.jQuery(this.droptargetDiv).addClass('painted');
  }

  droptargetOnDragLeave(e) {
    this.logger.log('droptarget leave');
    kendo.jQuery(this.droptargetDiv).text('Drop here.');
    kendo.jQuery(this.droptargetDiv).removeClass('painted');
  }

  droptargetOnDrop(e) {
    this.logger.log('drop');
    kendo.jQuery(this.droptargetDiv).text('You did great!');
    kendo.jQuery(this.draggableDiv).removeClass('hollow');
  }

  onHint(e) {
    return kendo.jQuery(this.draggableDiv).clone();
  }

  draggableOnDragEnd(e) {
    this.logger.log('drag end');

    if (this.draggable.dropped) {
      // drag ended outside of any droptarget
      kendo.jQuery(this.droptarget).text('Try again!');
    }

    kendo.jQuery(this.draggableDiv).removeClass('hollow');
  }
}
