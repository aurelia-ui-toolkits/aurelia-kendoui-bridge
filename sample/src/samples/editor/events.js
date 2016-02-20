export class Events {

  resizable = {
    content: false,
    toolbar: true
  };

  onChange(e) {
    this.logger.log('value change');
  }

  onSelect(e) {
    this.logger.log('selection change');
  }

  onExecute(e) {
    this.logger.log('command :: ' +  e.name);
  }

  onPaste(e) {
    this.logger.log('paste :: '  + kendo.htmlEncode(e.html));
  }
}
