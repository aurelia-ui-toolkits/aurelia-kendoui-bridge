export class GapAndSpacing {

  seriesDefaults = {
    type: "column"
  };

  series = [{
      name: "Total Visits",
      data: [56000, 63000, 74000, 91000, 117000, 138000]
  }, {
      name: "Unique visitors",
      data: [52000, 34000, 23000, 48000, 67000, 83000]
  }];

  valueAxis = {
      line: {
          visible: false
      }
  };

  categoryAxis = {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      majorGridLines: {
          visible: false
      }
  };

  tooltip = {
      visible: true,
      template: "${series.name} ${value}"
  }
}
