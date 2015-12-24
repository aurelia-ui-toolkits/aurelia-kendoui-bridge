export class CustomPanAndZoom {

  data = [];

  xAxis = {
    name: 'xAxis',
    min: -2,
    max: 2,
    labels: {
      format: '{0:N1}'
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

  setRange(e) {
    let kendoEvent = e.detail;
    let chart = kendoEvent.sender;

    // Prevent document scrolling on mousewheel zoom
    kendoEvent.originalEvent.preventDefault();

    let xRange = kendoEvent.axisRanges.xAxis;
    if (xRange) {
      // Suggested axis ranges
      let xMin = xRange.min;
      let xMax = xRange.max;

      // Limit maximum zoom-in
      if (xMax - xMin < 2) {
        return;
      }

      // Set X axis range
      chart.setOptions({
        xAxis: {
          min: xMin,
          max: xMax
        }
      });
    }
  }
}
