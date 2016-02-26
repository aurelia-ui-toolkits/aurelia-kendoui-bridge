export class Events {
  buttonClickHandler(e) {
    this.logger.log(e.target.text() + ' "click" event is fired.');
  }

  buttonToggleHandler(e) {
    this.logger.log(e.target.text() + ' "toggle" event is fired.');
  }

  splitButtonClickHandler(e) {
    this.logger.log('SplitButton event: ' + e.id + ' is clicked.');
  }

  click(e) {
    this.logger.log('ToolBar "click" event is fired for element with id: ' + e.id);
  }

  toggle(e) {
    if (e.group === 'radio') {
      this.logger.log('Toolbar "toggle" event: ' + e.id + ' button is selected from group: ' + e.group);
    } else {
      this.logger.log('ToolBar "toggle" event: ' + e.id + ' button is changed');
    }
  }

  overflowOpen(e) {
    this.logger.log('Overflow container open');
  }

  overflowClose(e) {
    this.logger.log('Overflow container close');
  }

  open(e) {
    this.logger.log('SplitButton popup open');
  }

  close(e) {
    this.logger.log('SplitButton popup close');
  }
}
