export class CustomPanAndZoom {

  data = [];

  xAxis = {
      name: "xAxis",
      min: -2,
      max: 2,
      labels: {
          format: "{0:N1}"
      }
  };

  series = [{
      type: "scatterLine",
      xField: "x",
      yField: "y",
      style: "smooth",
      markers: {
          visible: false
      }
  }];

  constructor() {
    var step = Math.PI / 4;
    for (var x = -50; x < 50; x += step) {
        this.data.push({ x: x, y: Math.sin(x) });
    }
  }

  setRange(e) {
    var kendoEvent = e.detail;
    var chart = kendoEvent.sender;
    var options = chart.options;

    // Prevent document scrolling on mousewheel zoom
    kendoEvent.originalEvent.preventDefault();

    var xRange = kendoEvent.axisRanges.xAxis;
    if (xRange) {
      // Suggested axis ranges
      var xMin = xRange.min;
      var xMax = xRange.max;

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
