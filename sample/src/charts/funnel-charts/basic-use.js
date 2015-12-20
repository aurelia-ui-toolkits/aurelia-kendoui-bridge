export class BasicUse {

    octData = [
        {
            category: "Impressions ",
            value: 434823,
            color: "#0e5a7e"
        },{
            category: "Clicks",
            value: 356854,
            color: "#166f99"
        },{
            category: "Unique Visitors",
            value: 280022,
            color: "#2185b4"
        },{
            category: "Downloads",
            value: 190374,
            color: "#319fd2"
        },{
            category: "Purchases",
            value: 120392,
            color: "#3eaee2"
        }
    ];

    novData =  [
        {
            category: "Impressions ",
            value: 984528,
            color: "#0e5a7e"
        },{
            category: "Clicks",
            value: 856287,
            color: "#166f99"
        },{
            category: "Unique Visitors",
            value: 643694,
            color: "#2185b4"
        },{
            category: "Downloads",
            value: 567843,
            color: "#319fd2"
        },{
            category: "Purchases",
            value: 389137,
            color: "#3eaee2"
        }
    ];

    decData = [
        {
            category: "Impressions ",
            value: 1200528,
            color: "#0e5a7e"
        },{
            category: "Clicks",
            value: 989287,
            color: "#166f99"
        },{
            category: "Unique Visitors",
            value: 885694,
            color: "#2185b4"
        },{
            category: "Downloads",
            value: 788843,
            color: "#319fd2"
        },{
            category: "Purchases",
            value: 694137,
            color: "#3eaee2"
        }
    ];

    seriesDefaults = {
        labels: {
            visible: true,
            background: "transparent",
            color:"white",
            format: "N0"
        },
        dynamicSlope: false,
        dynamicHeight: false
    };

    title = {
        position: "bottom"
    };

    legend = {
        visible: false
    }

    seriesOct = [{
        type: "funnel",
    }];

    seriesNov = [{
        type: "funnel",
    }];

    seriesDec = [{
        type: "funnel",
    }];

    tooltip = {
        visible: true,
        template: "#= category #"
    }
}
