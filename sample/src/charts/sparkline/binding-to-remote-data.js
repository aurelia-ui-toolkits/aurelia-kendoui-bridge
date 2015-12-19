export class BindingToRemoteData {
  // sparkles = [];
  months = ["January", "February", "March", "April", "May", "June"];

  attached() {
    jQuery(this.body).empty();

    var template = kendo.template($(this.template).html());

    this.months.forEach((month, i) => {
      var monthNumber = i + 1;

      var row = $(this.body)
          .append(template({
            month: month,
            dataSource: new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "//demos.telerik.com/kendo-ui/service/Weather/SOFIA/2012/" + (i + 1),
                        dataType: "jsonp"
                    }
                }
            }),
            tMaxSeries: [{
                type: "column",
                field: "TMax",
                color: "#ff0000",
                negativeColor: "#0099ff"
            }],
            wndSeries: [{
                field: "Wind",
                color: "#5b8f00"
            }],
            rainSeries: [{
                type: "area",
                field: "Rain",
                color: "#0099ff"
            }]
          }))
          .find("tr:last");
    });
    // this.months.forEach((month, index) => {
    //   this.sparkles.push({
    //     month: month,
    //     dataSource: new kendo.data.DataSource({
    //         transport: {
    //             read: {
    //                 url: "//demos.telerik.com/kendo-ui/service/Weather/SOFIA/2012/" + (index + 1),
    //                 dataType: "jsonp"
    //             }
    //         }
    //     }),
    //     tMaxSeries: [{
    //         type: "column",
    //         field: "TMax",
    //         color: "#ff0000",
    //         negativeColor: "#0099ff"
    //     }],
    //     wndSeries: [{
    //         field: "Wind",
    //         color: "#5b8f00"
    //     }],
    //     rainSeries: [{
    //         type: "area",
    //         field: "Rain",
    //         color: "#0099ff"
    //     }]
    //   });
    // });
    //
    // console.log(this.sparkles);
  }
}
