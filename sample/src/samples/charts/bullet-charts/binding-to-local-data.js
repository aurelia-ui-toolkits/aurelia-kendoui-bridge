export class BindingToLocalData {

  height = 120;

  legend = {
    visible: false
  };

  series_mmHg = [{
    type: 'verticalBullet',
    color: '#ffffff',
    opacity: 0.8,
    target: {
      color: '#ffffff'
    },
    currentField: 'current',
    targetField: 'target'
  }];

  series_hPa = [{
    type: 'verticalBullet',
    color: '#ffffff',
    opacity: 0.8,
    target: {
      color: '#ffffff'
    },
    currentField: 'current',
    targetField: 'target'
  }];

  chartArea = {
    margin: {
      left: 0
    }
  };

  categoryAxis_mmHg = {
    majorGridLines: {
      visible: false
    },
    majorTicks: {
      visible: false
    },
    title: {
      text: 'mmHg'
    },
    field: 'category'
  };

  categoryAxis_hPa = {
    majorGridLines: {
      visible: false
    },
    axisCrossingValue: 14,
    majorTicks: {
      visible: false
    },
    title: {
      text: 'hPa'
    },
    field: 'category'
  };

  valueAxis_mmHg = [{
    plotBands: [{
      from: 715, to: 752, color: '#2890cc', opacity: 0.5
    }, {
      from: 752, to: 772, color: '#2890cc', opacity: 0.7
    }, {
      from: 772, to: 790, color: '#2890cc', opacity: 0.5
    }, {
      from: 761, to: 761.5, color: '#ff0000', opacity: 1
    }],
    majorGridLines: {
      visible: false
    },
    min: 715,
    max: 790,
    minorTicks: {
      visible: true
    }
  }];

  valueAxis_hPa = [{
    plotBands: [{
      from: 955, to: 1002, color: '#8ebc00', opacity: 0.6
    }, {
      from: 1002, to: 1027, color: '#8ebc00', opacity: 0.8
    }, {
      from: 1027, to: 1050, color: '#8ebc00', opacity: 0.6
    }, {
      from: 1014, to: 1014.5, color: '#ff0000', opacity: 1
    }],
    majorGridLines: {
      visible: false
    },
    min: 955,
    max: 1050,
    minorTicks: {
      visible: true
    }
  }];

  tooltip = {
    visible: true,
    template: 'Maximum: #= value.target # <br /> Average: #= value.current #'
  }

  mmhgData = [
    { current: 750, target: 762.5, category: 1 }, { current: 754, target: 768.5, category: 2 },
    { current: 762, target: 770, category: 3 }, { current: 764, target: 773, category: 4 },
    { current: 753, target: 760, category: 5 }, { current: 748, target: 765, category: 6 },
    { current: 740, target: 760, category: 7 }, { current: 755, target: 758, category: 8 },
    { current: 765, target: 768, category: 9 }, { current: 776, target: 783, category: 10 },
    { current: 768, target: 770, category: 11 }, { current: 760, target: 762.5, category: 12 },
    { current: 763, target: 768, category: 13 }, { current: 758, target: 766, category: 14 }
  ];

  hPaData = [
    { current: 1001, target: 1017, category: 1 }, { current: 1005, target: 1024, category: 2 },
    { current: 1016, target: 1026, category: 3 }, { current: 1019, target: 1030, category: 4 },
    { current: 1004, target: 1013, category: 5 }, { current: 998, target: 1020, category: 6 },
    { current: 987, target: 1013, category: 7 }, { current: 1006.5, target: 1010, category: 8 },
    { current: 1020, target: 1023, category: 9 }, { current: 1035, target: 1044, category: 10 },
    { current: 1025, target: 1026, category: 11 }, { current: 1013, target: 1017, category: 12 },
    { current: 1017, target: 1023, category: 13 }, { current: 1010, target: 1021, category: 14 }
  ];
}
