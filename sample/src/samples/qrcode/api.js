import {bindable} from 'aurelia-templating';

export class Api {

  @bindable value = '1234567';
  @bindable showText = true;
  @bindable showChecksum = true;
  typesDataSource = [
    { type: 'EAN8', value: '1234567' },
    { type: 'EAN13', value: '123456789987' },
    { type: 'UPCE', value: '123456' },
    { type: 'UPCA', value: '12345678998' },
    { type: 'Code11', value: '1234567' },
    { type: 'Code39', value: 'HELLO' },
    { type: 'Code39Extended', value: 'Hi!' },
    { type: 'Code128', value: 'Hello World!' },
    { type: 'Code93', value: 'HELLO' },
    { type: 'Code93Extended', value: 'Hello' },
    { type: 'Code128A', value: 'HELLO' },
    { type: 'Code128B', value: 'Hello' },
    { type: 'Code128C', value: '123456' },
    { type: 'MSImod10', value: '1234567' },
    { type: 'MSImod11', value: '1234567' },
    { type: 'MSImod1010', value: '1234567' },
    { type: 'MSImod1110', value: '1234567' },
    { type: 'GS1-128', value: '12123456' },
    { type: 'POSTNET', value: '12345' }
  ];

  setOptions() {
    let validValue = this.validValue;

    try {
      this.barcode.setOptions({
        value: this.value,
        checksum: this.showChecksum,
        text: {
          visible: this.showText
        },
        type: this.type
      });

      validValue.innerHTML = '';
    } catch (error) {
      validValue.innerHTML = error.message;
    }
  }

  propertyChanged() {
    this.setOptions();
  }
}
