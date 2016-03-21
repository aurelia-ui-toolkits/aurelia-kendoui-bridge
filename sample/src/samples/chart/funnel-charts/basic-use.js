export class BasicUse {

  octData = [
    {
      category: 'Impressions ',
      value: 434823,
      color: '#0e5a7e'
    }, {
      category: 'Clicks',
      value: 356854,
      color: '#166f99'
    }, {
      category: 'Unique Visitors',
      value: 280022,
      color: '#2185b4'
    }, {
      category: 'Downloads',
      value: 190374,
      color: '#319fd2'
    }, {
      category: 'Purchases',
      value: 120392,
      color: '#3eaee2'
    }
  ];

  novData =  [
    {
      category: 'Impressions ',
      value: 984528,
      color: '#0e5a7e'
    }, {
      category: 'Clicks',
      value: 856287,
      color: '#166f99'
    }, {
      category: 'Unique Visitors',
      value: 643694,
      color: '#2185b4'
    }, {
      category: 'Downloads',
      value: 567843,
      color: '#319fd2'
    }, {
      category: 'Purchases',
      value: 389137,
      color: '#3eaee2'
    }
  ];

  decData = [
    {
      category: 'Impressions ',
      value: 1200528,
      color: '#0e5a7e'
    }, {
      category: 'Clicks',
      value: 989287,
      color: '#166f99'
    }, {
      category: 'Unique Visitors',
      value: 885694,
      color: '#2185b4'
    }, {
      category: 'Downloads',
      value: 788843,
      color: '#319fd2'
    }, {
      category: 'Purchases',
      value: 694137,
      color: '#3eaee2'
    }
  ];

  constructor() {
    this.series_oct = [{
      data: this.octData,
      type: 'funnel'
    }];

    this.series_nov = [{
      data: this.novData,
      type: 'funnel'
    }];

    this.series_dec = [{
      data: this.decData,
      type: 'funnel'
    }];
  }

  seriesDefaults = {
    labels: {
      visible: true,
      background: 'transparent',
      color: 'white',
      format: 'N0'
    },
    dynamicSlope: false,
    dynamicHeight: false
  };

  title = {
    position: 'bottom'
  };

  legend = {
    visible: false
  }

  tooltip = {
    visible: true,
    template: '#= category #'
  }

  refresh() {
    let chartNames = ['oct', 'nov', 'dec'];

    chartNames.forEach(idx => {
      let chart = this[idx];

      let options = {
        seriesDefaults: {
          neckRatio: this.slider.value(),
          dynamicHeight: this.dynamicHeight.checked,
          dynamicSlope: this.dynamicSlope.checked,
          labels: {
            visible: true,
            background: 'transparent',
            color: 'white',
            format: 'N0'
          }
        }
      };

      chart.setOptions(options);
      this.slider.enable(!options.seriesDefaults.dynamicSlope);
    });
  }
}
