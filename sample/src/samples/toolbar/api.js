export class Api {

  deleteId = '#delete';

  getSelected() {
    $(this.selectedFromGroup).text(this.toolbar.getSelectedFromGroup('player').text());
  }

  togglePlayerControls(e) {
    let buttonGroup = $('#playerControls');
    let isVisible = buttonGroup.is(':visible');

    if (isVisible) {
      this.toolbar.hide(buttonGroup);
      $(e.target).text('Show player controls');
    } else {
      this.toolbar.show(buttonGroup);
      $(e.target).text('Hide player controls');
    }
  }

  enableDisabledRepeat() {
    let repeat = $('#repeat');
    let isDisabled = repeat.hasClass('k-state-disabled');

    this.toolbar.enable(repeat, isDisabled);
  }

  hideRepeat(e) {
    let repeatButton = $('#repeat');
    let isVisible = repeatButton.is(':visible');

    if (isVisible) {
      this.toolbar.hide(repeatButton);
      $(e.target).text('Show Repeat');
    } else {
      this.toolbar.show(repeatButton);
      $(e.target).text('Hide Repeat');
    }
  }

  removeById() {
    this.toolbar.remove(this.deleteId);
  }

  addButton() {
    this.toolbar.add({ type: 'button', text: this.buttonText, id: this.buttonID, togglable: this.buttonToggable});
  }

  addSplitButton() {
    this.toolbar.add({
      type: 'splitButton',
      text: 'New SplitButton',
      menuButtons: [
        { text: 'Option 1' },
        { text: 'Option 2' }
      ]
    });
  }

  addButtonGroup() {
    this.toolbar.add({
      type: 'buttonGroup',
      buttons: [
        { text: 'Left' },
        { text: 'Middle' },
        { text: 'Right' }
      ]
    });
  }
}
