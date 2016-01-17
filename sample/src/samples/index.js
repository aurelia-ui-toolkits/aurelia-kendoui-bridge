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
      { name: 'grid',             route: 'grid',                moduleId: './grid/index',                    title: 'Grid'},
      { name: 'autocomplete',     route: 'autocomplete',        moduleId: './autocomplete/index',            title: 'Autocomplete'},
      { name: 'treeview',         route: 'treeview',            moduleId: './treeview/index',               title: 'Treeview'},
      { name: 'area-charts',      route: 'area-charts',         moduleId: './chart/area-charts/index',      title: 'Area Charts'},
      { name: 'bar-charts',       route: 'bar-charts',          moduleId: './chart/bar-charts/index',       title: 'Bar Charts'},
      { name: 'box-plot-charts',  route: 'box-plot-charts',     moduleId: './chart/box-plot-charts/index',  title: 'Box Plot Charts'},
      { name: 'bubble-charts',    route: 'bubble-charts',       moduleId: './chart/bubble-charts/index',    title: 'Bubble Charts'},
      { name: 'bullet-charts',    route: 'bullet-charts',       moduleId: './chart/bullet-charts/index',    title: 'Bullet Charts'},
      { name: 'button',           route: 'button',              moduleId: './button/index',                  title: 'Button'},
      { name: 'donut-charts',     route: 'donut-charts',        moduleId: './chart/donut-charts/index',     title: 'Donut Charts'},
      { name: 'dropdownlist',     route: 'dropdownlist',        moduleId: './dropdownlist/index',            title: 'Drop Down List'},
      { name: 'funnel-charts',    route: 'funnel-charts',       moduleId: './chart/funnel-charts/index',    title: 'Funnel Charts'},
      { name: 'line-charts',      route: 'line-charts',         moduleId: './chart/line-charts/index',      title: 'Line Charts'},
      { name: 'pie-charts',       route: 'pie-charts',          moduleId: './chart/pie-charts/index',       title: 'Pie Charts'},
      { name: 'polar-charts',     route: 'polar-charts',        moduleId: './chart/polar-charts/index',     title: 'Polar Charts'},
      { name: 'progressbar',      route: 'progressbar',         moduleId: './progressbar/index',             title: 'Progress Bar'},
      { name: 'radar-charts',     route: 'radar-charts',        moduleId: './chart/radar-charts/index',     title: 'Radar Charts'},
      { name: 'range-charts',     route: 'range-charts',        moduleId: './chart/range-charts/index',     title: 'Range Charts'},
      { name: 'scatter-charts',   route: 'scatter-charts',      moduleId: './chart/scatter-charts/index',   title: 'Scatter charts'},
      { name: 'slider',           route: 'slider',              moduleId: './slider/index',                  title: 'Slider'},
      { name: 'sparkline',        route: 'sparkline',           moduleId: './chart/sparkline/index',        title: 'Sparkline'},
      { name: 'stock',            route: 'stock',               moduleId: './chart/stock/index',            title: 'Stock'},
      { name: 'tabstrip',         route: 'tabstrip',            moduleId: './tabstrip/index',                title: 'Tabstrip'},
      { name: 'treemap',          route: 'treemap',             moduleId: './chart/treemap/index',          title: 'Treemap'},
      { name: 'waterfall-charts', route: 'waterfall-charts',    moduleId: './chart/waterfall-charts/index', title: 'Waterfall Charts'}
    ]);

    this.router = router;
  }
}
