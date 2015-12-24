export class PanAndZoom {

  data = [];

  xAxis = {
    min: -2,
    max: 2,
    labels: {
      format: '{0:n1}'
    }
  };

  yAxis = {
    labels: {
      format: '{0:n2}'
    }
  };

  series = [{
    type: 'scatterLine',
    xField: 'x',
    yField: 'y',
    style: 'smooth',
    markers: {
      visible: false
    }
  }];

  constructor() {
    let step = Math.PI / 4;
    for (let x = -50; x < 50; x += step) {
      this.data.push({ x: x, y: Math.sin(x) });
    }
  }
}
