export class BasicUse {
  data = [{
    text: 'Black',
    value: '1'
  }, {
    text: 'Orange',
    value: '2'
  }, {
    text: 'Grey',
    value: '3'
  }];

  capColor = '1';

  colorChanged() {
    $(this.cap)
    .toggleClass('black-cap', this.capColor === '1')
    .toggleClass('orange-cap', this.capColor === '2')
    .toggleClass('grey-cap', this.capColor === '3');
  }

  buyCap() {
    alert(`Thank you! Your Choice is:\n\nColor ID: ${this.capColor} and Size: ${this.capSize}`);
  }
}
