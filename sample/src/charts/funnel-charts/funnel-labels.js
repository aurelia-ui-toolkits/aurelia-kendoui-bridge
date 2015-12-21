export class BindingToLocalData {
    seriesDefaults = {
        dynamicHeight: false,
        labels: {
            template: "#= category #",
            visible: true,
            font: "15px sans-serif",
            align: "center",
            position: "center",
            background: "transparent",
            color: "#000",
            padding: 5,
            border: {
                width: 1,
                dashType: "dot",
                color: "#000"
            },
            format: "N0"
        }
    };

    legend = {
        position: "top"
    };

    series = [{
       type: "funnel",
        data: [{
            category: "Awareness",
            value: 4
        }, {
            category: "Interest",
            value: 3
        }, {
            category: "Desire",
            value: 2
        }, {
            category: "Action",
            value: 1
        }]
    }];

    tooltip = {
        visible: true,
        template: "#= category # - #= kendo.format('{0:P}', percentage) #"
    }
}
