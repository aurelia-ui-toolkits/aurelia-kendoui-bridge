export class BindingToLocalData {
    hydroData = [{
            "source": "Hydro",
            "percentage": 22,
            "explode": true
        }, {
            "source": "Solar",
            "percentage": 2
        }, {
            "source": "Nuclear",
            "percentage": 49
        }, {
            "source": "Wind",
            "percentage": 27
    }];

    legend = {
        position: "bottom"
    }

    series = [{
        type: "donut",
        field: "percentage",
        categoryField: "source",
        explodeField: "explode"
    }];

    seriesColors= ["#42a7ff", "#666666", "#999999", "#cccccc"];

    tooltip = {
        visible: true,
        template: "${ category } - ${ value }%"
    }
}