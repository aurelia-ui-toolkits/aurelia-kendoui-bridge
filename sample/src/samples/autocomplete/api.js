export class API {
  items = [
    'Red-violet',
    'Red',
    'Red-orange',
    'Orange',
    'Yellow-orange',
    'Yellow',
    'Yellow-green',
    'Green',
    'Blue-green',
    'Blue',
    'Blue-violet',
    'Violet'
  ];

  getValue() {
    alert(this.autocomplete.value());
  }
}
