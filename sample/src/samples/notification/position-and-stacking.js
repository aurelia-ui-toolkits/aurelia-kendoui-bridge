export class PositionAndStacking {
  numericOptions = {
    decimals: 0,
    min: 0,
    format: 'n0',
    change: () => this.applyConfiguration()
  };

  hideAllNotifications() {
    this.centered.hide();
    this.configurable.hide();
  }

  showNotification() {
    let d = new Date();
    let message = kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), '000');
    this.centered.show(message);
  }

  showConfigurable() {
    let d = new Date();
    let message = kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), '000');
    this.configurable.show(message);
  }

  applyConfiguration() {
    this.configurable.hide();
    this.configurable.setOptions({
      position: {
        top: this.top.value(),
        left: this.left.value(),
        bottom: this.bottom.value(),
        right: this.right.value()
      },
      stacking: this.stacking
    });
  }

  onShow(e) {
    if (e.sender.getNotifications().length === 1) {
      let element = $(e.element).parent();
      let eWidth = element.width();
      let eHeight = element.height();
      let wWidth = $(window).width();
      let wHeight = $(window).height();
      let newTop;
      let newLeft;

      newLeft = Math.floor(wWidth / 2 - eWidth / 2);
      newTop = Math.floor(wHeight / 2 - eHeight / 2);

      $(e.element).parent().css({top: newTop, left: newLeft});
    }
  }
}
