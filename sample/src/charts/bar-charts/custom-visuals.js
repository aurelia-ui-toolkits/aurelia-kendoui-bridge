export class CustomVisuals {
  seriesDefaults = {
    type: "column"
  };

  series = [{
      name: "Total Visits",
      data: [56000, 63000, 74000, 91000, 117000, 138000, 128000, 115000, 102000, 98000, 123000, 113000]
  }, {
      name: "Unique visitors",
      data: [52000, 34000, 23000, 48000, 67000, 83000, 40000, 50000, 64000, 72000, 75000, 81000]
  }];



   panes= [{
        clip: false
    }];

    valueAxis: {
        line: {
            visible: false
        }
    };

    categoryAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        majorGridLines: {
            visible: false
        },
        line: {
            visible: false
        }
    };

  tooltip = {
      visible: true,

  }
}
