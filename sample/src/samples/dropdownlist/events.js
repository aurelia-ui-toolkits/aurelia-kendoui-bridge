export class Events {
  data = [
    {text: 'Item1', value: '1'},
    {text: 'Item2', value: '2'},
    {text: 'Item3', value: '3'}
  ];

  onSelect(e) {
    let dataItem = this.dropDownList.dataItem(e.item);
    this.logger.log(`event :: select (${dataItem.text} : ${dataItem.value})`);
  }
  onChange() {
    this.logger.log('change');
  }
  onClose() {
    this.logger.log('close');
  }
  onOpen() {
    this.logger.log('open');
  }
  onFiltering() {
    this.logger.log('filtering');
  }
}
