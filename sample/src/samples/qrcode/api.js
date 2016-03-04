import {bindable} from 'aurelia-templating';

export class Api {

  @bindable qrValue = 'Hello World';
  @bindable errorCorrection = 'L';
  @bindable encoding = 'ISO_8859_1';
  @bindable backgroundColor = '#FFFFFF';
  @bindable moduleColor = '#000000';
  @bindable size = '200';
  @bindable borderColor = '#FFFFFF';
  @bindable boderWidth = '0'

  errorCorrectionDataSource = [
    { errorCorrection: 'L', value: 'L' },
    { errorCorrection: 'M', value: 'M' },
    { errorCorrection: 'Q', value: 'Q' },
    { errorCorrection: 'H', value: 'H' }

  ];

  encodingDataSource = [
    { encoding: 'ISO_8859_1', value: 'ISO_8859_1' },
    { encoding: 'UTF_8', value: 'UTF_8' }
  ];

  propertyChanged() {
    this.qrcode.setOptions({
      value: this.qrValue,
      errorCorrection: this.errorCorrection,
      encoding: this.encoding,
      size: this.size,
      color: this.moduleColor,
      border: {
        width: this.borderWidth,
        color: this.borderColor
      },
      background: this.backgroundColor
    });
  }
}
