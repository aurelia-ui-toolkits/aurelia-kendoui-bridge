import {inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';

@inject(Registry)
export class Index {

  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    config.title = 'Samples';

    config.map([
      { name: 'default',          route: '',                    redirect: 'grid' },
      { name: 'autocomplete',     route: 'autocomplete',        moduleId: './autocomplete/index',           title: 'Autocomplete'},
      { name: 'area-charts',      route: 'area-charts',         moduleId: './chart/area-charts/index',      title: 'Area Charts',       settings: { pro: true } },
      { name: 'bar-charts',       route: 'bar-charts',          moduleId: './chart/bar-charts/index',       title: 'Bar Charts',        settings: { pro: true } },
      { name: 'barcode',          route: 'barcode',             moduleId: './barcode/index',                title: 'Barcode',           settings: { pro: true } },
      { name: 'box-plot-charts',  route: 'box-plot-charts',     moduleId: './chart/box-plot-charts/index',  title: 'Box Plot Charts',   settings: { pro: true } },
      { name: 'bubble-charts',    route: 'bubble-charts',       moduleId: './chart/bubble-charts/index',    title: 'Bubble Charts',     settings: { pro: true } },
      { name: 'bullet-charts',    route: 'bullet-charts',       moduleId: './chart/bullet-charts/index',    title: 'Bullet Charts',     settings: { pro: true } },
      { name: 'button',           route: 'button',              moduleId: './button/index',                 title: 'Button'},
      { name: 'buttongroup',      route: 'buttongroup',         moduleId: './buttongroup/index',            title: 'ButtonGroup'},
      { name: 'calendar',         route: 'calendar',            moduleId: './calendar/index',               title: 'Calendar'},
      { name: 'colorpicker',      route: 'colorpicker',         moduleId: './colorpicker/index',            title: 'Color Picker'},
      { name: 'combobox',         route: 'combobox',            moduleId: './combobox/index',               title: 'ComboBox'},
      { name: 'datepicker',       route: 'datepicker',          moduleId: './datepicker/index',             title: 'DatePicker'},
      { name: 'datetimepicker',   route: 'datetimepicker',      moduleId: './datetimepicker/index',         title: 'DateTimePicker'},
      { name: 'diagram',          route: 'diagram',             moduleId: './diagram/index',                title: 'Diagram',           settings: { pro: true } },
      { name: 'donut-charts',     route: 'donut-charts',        moduleId: './chart/donut-charts/index',     title: 'Donut Charts',      settings: { pro: true } },
      { name: 'drag-and-drop',    route: 'drag-and-drop',       moduleId: './drag-and-drop/index',          title: 'Drag and drop'},
      { name: 'dropdownlist',     route: 'dropdownlist',        moduleId: './dropdownlist/index',           title: 'Drop Down List'},
      { name: 'editor',           route: 'editor',              moduleId: './editor/index',                 title: 'Editor',            settings: { pro: true } },
      { name: 'funnel-charts',    route: 'funnel-charts',       moduleId: './chart/funnel-charts/index',    title: 'Funnel Charts',     settings: { pro: true } },
      { name: 'gantt',            route: 'gantt',               moduleId: './gantt/index',                  title: 'Gantt',              settings: { pro: true } },
      { name: 'grid',             route: 'grid',                moduleId: './grid/index',                   title: 'Grid',              settings: { pro: true } },
      { name: 'line-charts',      route: 'line-charts',         moduleId: './chart/line-charts/index',      title: 'Line Charts',       settings: { pro: true } },
      { name: 'linear-gauge',     route: 'linear-gauge',        moduleId: './linear-gauge/index',           title: 'Linear gauge',       settings: { pro: true } },
      { name: 'listview',         route: 'listview',            moduleId: './listview/index',               title: 'ListView' },
      { name: 'map',              route: 'map',                 moduleId: './map/index',                    title: 'Map',               settings: { pro: true } },
      { name: 'menu',             route: 'menu',                moduleId: './menu/index',                   title: 'Menu'},
      { name: 'maskedtextbox',    route: 'maskedtextbox',       moduleId: './maskedtextbox/index',          title: 'MaskedTextBox' },
      { name: 'multiselect',      route: 'multiselect',         moduleId: './multiselect/index',            title: 'Multiselect' },
      { name: 'notification',     route: 'notification',        moduleId: './notification/index',           title: 'Notification' },
      { name: 'numerictextbox',   route: 'numerictextbox',      moduleId: './numerictextbox/index',         title: 'NumericTextBox' },
      { name: 'panelbar',         route: 'panelbar',            moduleId: './panelbar/index',               title: 'Panel Bar'},
      { name: 'pie-charts',       route: 'pie-charts',          moduleId: './chart/pie-charts/index',       title: 'Pie Charts',        settings: { pro: true } },
      { name: 'pivotgrid',        route: 'pivotgrid',           moduleId: './pivotgrid/index',              title: 'PivotGrid',         settings: { pro: true } },
      { name: 'polar-charts',     route: 'polar-charts',        moduleId: './chart/polar-charts/index',     title: 'Polar Charts',      settings: { pro: true } },
      { name: 'progressbar',      route: 'progressbar',         moduleId: './progressbar/index',            title: 'Progress Bar'},
      { name: 'qrcode',           route: 'qrcode',              moduleId: './qrcode/index',                 title: 'QR Code',           settings: { pro: true } },
      { name: 'radar-charts',     route: 'radar-charts',        moduleId: './chart/radar-charts/index',     title: 'Radar Charts',      settings: { pro: true } },
      { name: 'radial-gauge',     route: 'radial-gauge',        moduleId: './radial-gauge/index',           title: 'Radial gauge',      settings: { pro: true } },
      { name: 'range-charts',     route: 'range-charts',        moduleId: './chart/range-charts/index',     title: 'Range Charts',      settings: { pro: true } },
      { name: 'rangeslider',      route: 'rangeslider',         moduleId: './rangeslider/index',            title: 'RangeSlider' },
      { name: 'responsivepanel',  route: 'responsivepanel',     moduleId: './responsivepanel/index',        title: 'Responsive panel' },
      { name: 'scatter-charts',   route: 'scatter-charts',      moduleId: './chart/scatter-charts/index',   title: 'Scatter charts',    settings: { pro: true } },
      { name: 'scheduler',        route: 'scheduler',           moduleId: './scheduler/index',              title: 'Scheduler',         settings: { pro: true } },
      { name: 'scrollview',       route: 'scrollview',          moduleId: './scrollview/index',             title: 'Scrollview' },
      { name: 'sortable',         route: 'sortable',            moduleId: './sortable/index',               title: 'Sortable'},
      { name: 'slider',           route: 'slider',              moduleId: './slider/index',                 title: 'Slider'},
      { name: 'sparkline',        route: 'sparkline',           moduleId: './chart/sparkline/index',        title: 'Sparkline',         settings: { pro: true } },
      { name: 'splitter',         route: 'splitter',            moduleId: './splitter/index',               title: 'Splitter'},
      { name: 'spreadsheet',      route: 'spreadsheet',         moduleId: './spreadsheet/index',            title: 'Spreadsheet',       settings: { pro: true } },
      { name: 'stock',            route: 'stock',               moduleId: './chart/stock/index',            title: 'Stock',             settings: { pro: true } },
      { name: 'switch',           route: 'switch',              moduleId: './switch/index',                 title: 'Switch'},
      { name: 'tabstrip',         route: 'tabstrip',            moduleId: './tabstrip/index',               title: 'Tabstrip'},
      { name: 'timepicker',       route: 'timepicker',          moduleId: './timepicker/index',             title: 'TimePicker'},
      { name: 'toolbar',          route: 'toolbar',             moduleId: './toolbar/index',                title: 'Toolbar'},
      { name: 'tooltip',          route: 'tooltip',             moduleId: './tooltip/index',                title: 'Tooltip'},
      { name: 'treemap',          route: 'treemap',             moduleId: './chart/treemap/index',          title: 'Treemap'},
      { name: 'treelist',         route: 'treelist',            moduleId: './treelist/index',               title: 'Treelist'},
      { name: 'treeview',         route: 'treeview',            moduleId: './treeview/index',               title: 'Treeview'},
      { name: 'validator',        route: 'validator',           moduleId: './validator/index',              title: 'Validator'},
      { name: 'valueconverters',  route: 'valueconverters',     moduleId: './valueconverters/index',        title: 'ValueConverters'},
      { name: 'upload',           route: 'upload',              moduleId: './upload/index',                 title: 'Upload',            settings: { pro: true } },
      { name: 'waterfall-charts', route: 'waterfall-charts',    moduleId: './chart/waterfall-charts/index', title: 'Waterfall Charts'},
      { name: 'window',           route: 'window',              moduleId: './window/index',                 title: 'Window'}
    ]);

    this.router = router;
  }
}
