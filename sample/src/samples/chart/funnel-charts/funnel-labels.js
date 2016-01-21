import {bindable} from 'aurelia-framework';

export class BindingToLocalData {

  @bindable positionType = 'center';
  @bindable alignType = 'center';
  @bindable showBorder = true;
  @bindable showLabels = true;

  seriesDefaults = {
    dynamicHeight: false,
    labels: {
      template: '#= category #',
      visible: true,
      font: '15px sans-serif',
      align: 'center',
      position: 'center',
      background: 'transparent',
      color: '#000',
      padding: 5,
      border: {
        width: 1,
        dashType: 'dot',
        color: '#000'
      },
      format: 'N0'
    }
  };

  legend = {
    position: 'top'
  };

  series = [{
    type: 'funnel',
    data: [{
      category: 'Awareness',
      value: 4
    }, {
      category: 'Interest',
      value: 3
    }, {
      category: 'Desire',
      value: 2
    }, {
      category: 'Action',
      value: 1
    }]
  }];

  tooltip = {
    visible: true,
    template: '#= category # - #= kendo.format("{0:P}", percentage) #'
  }


  propertyChanged(prop) {
    if (prop !== 'positionType' &&
    prop !== 'alignType' &&
    prop !== 'showBorder' &&
    prop !== 'showLabels') {
      return;
    }

    this.refresh();
  }

  refresh() {
    let borderOptions = this.showBorder ? {
      width: 1,
      dashType: 'dot',
      color: '#000'
    } : {
      width: 0
    };

    this.seriesDefaults.labels.font = `${this.slider.value()}px sans-serif`;
    this.seriesDefaults.labels.color = this.colorpicker.value();
    this.seriesDefaults.labels.align = this.alignType;
    this.seriesDefaults.labels.position = this.positionType;
    this.seriesDefaults.labels.visible = this.showLabels;
    this.seriesDefaults.labels.border = borderOptions;
    this.funnel.recreate();
  }
}
