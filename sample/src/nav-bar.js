import {bindable} from 'aurelia-framework';
import 'jquery';

export class NavBar {
  @bindable router = null;
  chartRoutes = [
    'area-charts', 'bar-charts', 'box-plot-charts', 'bubble-charts', 'bullet-charts', 'donut-charts',   'funnel-charts',
    'line-charts', 'pie-charts', 'polar-charts',    'radar-charts',  'range-charts',  'scatter-charts', 'waterfall-charts'
  ];

  attached() {
    this.dialog = jQuery(this.themeSelector).kendoWindow({
      width: '800px',
      title: 'Themes',
      actions: [
        'Pin',
        'Minimize',
        'Maximize',
        'Close'
      ]
    }).data('kendoWindow');

    jQuery(this.themeSelector).parent().addClass('theme-window');
  }

  showThemeDialog() {
    this.dialog.open();
    this.dialog.center();
  }
}
