export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: ['', 'about'],         moduleId: 'about/about',                           title: 'About' },
      { name: 'test',             route: 'test',                moduleId: 'test/index',                            title: 'Test pages' },
      { name: 'autocomplete',     route: 'autocomplete',        moduleId: 'samples/autocomplete/index',            title: 'Autocomplete'},
      { name: 'area-charts',      route: 'area-charts',         moduleId: 'samples/charts/area-charts/index',      title: 'Area Charts'},
      { name: 'bar-charts',       route: 'bar-charts',          moduleId: 'samples/charts/bar-charts/index',       title: 'Bar Charts'},
      { name: 'box-plot-charts',  route: 'box-plot-charts',     moduleId: 'samples/charts/box-plot-charts/index',  title: 'Box Plot Charts'},
      { name: 'bubble-charts',    route: 'bubble-charts',       moduleId: 'samples/charts/bubble-charts/index',    title: 'Bubble Charts'},
      { name: 'bullet-charts',    route: 'bullet-charts',       moduleId: 'samples/charts/bullet-charts/index',    title: 'Bullet Charts'},
      { name: 'button',           route: 'button',              moduleId: 'samples/button/index',                  title: 'Button'},
      { name: 'donut-charts',     route: 'donut-charts',        moduleId: 'samples/charts/donut-charts/index',     title: 'Donut Charts'},
      { name: 'dropdownlist',     route: 'dropdownlist',        moduleId: 'samples/dropdownlist/index',            title: 'Drop Down List'},
      { name: 'funnel-charts',    route: 'funnel-charts',       moduleId: 'samples/charts/funnel-charts/index',    title: 'Funnel Charts'},
      { name: 'grid',             route: 'grid',                moduleId: 'samples/grid/index',                    title: 'Grid'},
      { name: 'help',             route: 'help',                moduleId: 'help/help',                             title: 'Help' },
      { name: 'install',          route: 'installation/:page',  moduleId: 'installation-wizard/wizard',            title: 'Installation wizard', href: '#/installation/begin' },
      { name: 'line-charts',      route: 'line-charts',         moduleId: 'samples/charts/line-charts/index',      title: 'Line Charts'},
      { name: 'pie-charts',       route: 'pie-charts',          moduleId: 'samples/charts/pie-charts/index',       title: 'Pie Charts'},
      { name: 'polar-charts',     route: 'polar-charts',        moduleId: 'samples/charts/polar-charts/index',     title: 'Polar Charts'},
      { name: 'progressbar',      route: 'progressbar',         moduleId: 'samples/progressbar/index',             title: 'Progress Bar'},
      { name: 'radar-charts',     route: 'radar-charts',        moduleId: 'samples/charts/radar-charts/index',     title: 'Radar Charts'},
      { name: 'range-charts',     route: 'range-charts',        moduleId: 'samples/charts/range-charts/index',     title: 'Range Charts'},
      { name: 'project-status',   route: 'project-status',      moduleId: 'project-status/controls',               title: 'Project status'},
      { name: 'scatter-charts',   route: 'scatter-charts',      moduleId: 'samples/charts/scatter-charts/index',   title: 'Scatter charts'},
      { name: 'slider',           route: 'slider',              moduleId: 'samples/slider/index',                  title: 'Slider'},
      { name: 'sparkline',        route: 'sparkline',           moduleId: 'samples/charts/sparkline/index',        title: 'Sparkline'},
      { name: 'stock',            route: 'stock',               moduleId: 'samples/charts/stock/index',            title: 'Stock'},
      { name: 'tabstrip',         route: 'tabstrip',            moduleId: 'samples/tabstrip/index',                title: 'Tabstrip'},
      { name: 'treemap',          route: 'treemap',             moduleId: 'samples/charts/treemap/index',          title: 'Treemap'},
      { name: 'waterfall-charts', route: 'waterfall-charts',    moduleId: 'samples/charts/waterfall-charts/index', title: 'Waterfall Charts'}
    ]);

    this.router = router;
  }
}
