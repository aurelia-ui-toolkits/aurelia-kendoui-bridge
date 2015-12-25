export class RadarArea {
  series = [{
    name: 'Andrew Dodsworth',
    data: [10, 3, 3, 10, 2, 10]
  }, {
    name: 'Margaret Peacock',
    data: [9, 7, 7, 9, 6, 7]
  }, {
    name: 'Nancy Callahan',
    data: [4, 10, 10, 5, 5, 4]
  }];

  categoryAxis = {
    categories: [
      'Experience', 'Communication', 'Friendliness',
      'Subject knowledge', 'Presentation', 'Education'
    ],
    majorGridLines: {
      visible: false
    }
  };
}
