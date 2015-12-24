export class BasicUse {

  series = [{
    type: 'waterfall',
    data: [180, -60, -20, 10, 30],
    labels: {
      visible: true
    }
  }];

  categoryAxis = {
    categories: ['In stock', 'Damaged', 'Reserved', 'In transit', 'Refurbished'],
    labels: {
      rotation: 'auto'
    }
  };
}
