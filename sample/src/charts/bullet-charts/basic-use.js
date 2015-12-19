export class BasicUse {

    height = 120;

    legend = {
        visible: false
    };

    series_mmHg = [{
        type: "bullet",
        data: [[750, 762.5]]
    }];

    series_hPa = [{
        type: "bullet",
        data: [[1001, 1017]]
    }];

   series_hum = [{
        type: "bullet",
        data: [[45, 60]]
    }];

   series_temp = [{
        type: "bullet",
        data: [[25, 22]]
    }];

    chartArea = {
        margin: {
            left: 0
        }
    };

    categoryAxis = {
       majorGridLines: {
            visible: false
        },
        majorTicks: {
            visible: false
        }
    };

   valueAxis_mmHg = {
       plotBands: [{
            from: 715, to: 752, color: "#ccc", opacity: .6
        }, {
            from: 752, to: 772, color: "#ccc", opacity: .3
        }],
        majorGridLines: {
            visible: false
        },
        min: 715,
        max: 795,
        minorTicks: {
            visible: true
        }
    };

   valueAxis_hPa = {
       plotBands: [{
            from: 715, to: 752, color: "#ccc", opacity: .6
        }, {
            from: 752, to: 772, color: "#ccc", opacity: .3
        }],
        majorGridLines: {
            visible: false
        },
        min: 715,
        max: 795,
        minorTicks: {
            visible: true
        }
    };

   valueAxis_hum = {
       plotBands: [{
            from: 715, to: 752, color: "#ccc", opacity: .6
        }, {
            from: 752, to: 772, color: "#ccc", opacity: .3
        }],
        majorGridLines: {
            visible: false
        },
        min: 715,
        max: 795,
        minorTicks: {
            visible: true
        }
    };

   valueAxis_temp = {
       plotBands: [{
            from: 715, to: 752, color: "#ccc", opacity: .6
        }, {
            from: 752, to: 772, color: "#ccc", opacity: .3
        }],
        majorGridLines: {
            visible: false
        },
        min: 715,
        max: 795,
        minorTicks: {
            visible: true
        }
    };

    tooltip_mmHg = {
      visible: true,
      format: "{0}%",
      template: "${series.name} ${value}"
    }
}