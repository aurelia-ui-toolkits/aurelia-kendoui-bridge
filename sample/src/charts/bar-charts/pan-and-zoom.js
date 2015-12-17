export class PanAndZoom {

    renderAs = "canvas";

    dataSource= {
        data: data
    };

   categoryAxis= {
        min: 0,
        max: 10,
        labels: {
            rotation: "auto"
        }
    };

    series= [{
        type: "column",
        field: "value",
        categoryField: "category"
    }];

    // pannable= {
    //     lock: "y"
    // };

    // zoomable= {
    //     mousewheel: {
    //         lock: "y"
    //     },
    //     selection: {
    //         lock: "y"
    //     }
    // }

    generateData() {
        let data = [];
        for (var i = 0; i < 100; i++) {
          let val = Math.round(Math.random() * 10);
          data.push({
            category: "C" + i,
            value: val
          });
        }
    }
}


