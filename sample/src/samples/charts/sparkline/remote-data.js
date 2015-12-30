export class RemoteData {
  months = [];

  constructor() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June'];
    for (let i = 0; i < months.length; i++) {
      this.months.push({
        name: months[i],
        dataSource: {
          transport: {
            read: {
              url: '//demos.telerik.com/kendo-ui/service/Weather/SOFIA/2012/' + (i + 1),
              dataType: 'jsonp'
            }
          }
        }
      });
    }
  }
}
