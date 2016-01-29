export class ValueBinding {
  selectedValue = 'Charles';
  items = [
    'Charles',
    'Jedd',
    'Nikolaj',
    'Jeroen',
    'David',
    'Rob',
    'Matt',
    'Patrick',
    'Jason',
    'Martin',
    'Fredrick',
    'Alex'
  ];

  selectRandom() {
    this.selectedValue = this.items[Math.floor(Math.random() * this.items.length)];
  }
}
