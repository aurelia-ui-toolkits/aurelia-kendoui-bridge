export class Aurelia {
  weather = new kendo.data.DataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/Weather/SOFIA/2012/1',
        dataType: 'jsonp'
      }
    }
  });

  onSeriesHover(e) {
    let kendoEvent = e.detail;
    this.logger.log(`event :: seriesHover (${kendoEvent.value})`);
  }
}
