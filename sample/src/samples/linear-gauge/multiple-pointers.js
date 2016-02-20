export class MultiplePointers {
  newValues = '100, 10, 80';
  pointer = [{
    value: 10,
    color: '#c20000',
    shape: 'arrow'
  }, {
    value: 70,
    color: '#ff7a00',
    margin: 10
  }, {
    value: 140,
    color: '#ffc700'
  }];

  sliderChanged(index, e) {
    this.gauge.pointers[index].value(e.value);
  }

  getAll() {
    alert(`All values: ${this.gauge.allValues().join(', ')}`);
  }

  setValues(values) {
    let split = values.split(',');

    values = $.map(split, val => parseInt(val, 0));

    this.gauge.allValues(values);
  }
}
