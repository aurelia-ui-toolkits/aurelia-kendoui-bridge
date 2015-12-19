export class BindingToRemoteData {
    seriesDefaults = {
        type: ""
    };

    legend = {
        visible: false
    }

    series = [{

    }];

    valueAxis = {
        labels: {
            format: "{0}%"
        },
        line: {
            visible: false
        },
        axisCrossingValue: 0
    };

    categoryAxis = {
        categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
        line: {
            visible: false
        },
        labels: {
            padding: {top: 135}
        }
    };

    tooltip = {
      visible: true,
      format: "{0}%",
      template: "${series.name} ${value}"
    }
}