export class PanAndZoom {
  data = [];

  categoryAxis = {
    min: 0,
    max: 10,
    labels: {
      rotation: 'auto'
    }
  };

  series = [{
    type: 'column',
    field: 'value',
    categoryField: 'category'
  }];

  zoomable = {
    mousewheel: {
      lock: 'y'
    },
    selection: {
      lock: 'y'
    }
  };

  constructor() {
    for (let i = 0; i < 100; i++) {
      let val = Math.round(Math.random() * 10);
      this.data.push({
        category: 'C' + i,
        value: val
      });
    }
  }
}
