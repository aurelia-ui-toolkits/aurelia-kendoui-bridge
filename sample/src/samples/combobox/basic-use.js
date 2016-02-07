export class BasicUse {
  data = [
    { text: 'Cotton', value: '1' },
    { text: 'Polyester', value: '2' },
    { text: 'Cotton/Polyester', value: '3' },
    { text: 'Rib Knit', value: '4' }
  ];

  fabric = '3';

  buyCap() {
    alert(`Thank you! Your Choice is:\n\nFabric ID: ${this.fabric} and Size: ${this.size}`);
  }
}
