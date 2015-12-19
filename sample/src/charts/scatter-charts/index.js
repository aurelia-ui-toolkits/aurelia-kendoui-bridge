import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Scatter Charts';
      config.map([
            { route: ['','basic-use'],            moduleId: './basic-use',                 nav: true,    title:'Basic use' },

            { route: 'scatter-line-chart',        moduleId: './scatter-line-chart',        nav: true,    title:'Scatter line chart' },
            { route: 'smooth-scatter-line',       moduleId: './smooth-scatter-line',       nav: true,    title:'Smooth scatter line' },

            { route: 'date-axis',                 moduleId: './date-axis',                 nav: true,    title:'Date axis' },
            { route: 'multi-axis',                moduleId: './multi-axis',                nav: true,    title:'Multi-axis' },
            { route: 'pan-and-zoom',              moduleId: './pan-and-zoom',              nav: true,    title:'Pan and zoom' },
            { route: 'custom-pan-and-zoom',       moduleId: './custom-pan-and-zoom',       nav: true,    title:'Custom Pan and zoom' },

            { route: 'binding-to-remote-data',    moduleId: './binding-to-remote-data',    nav: true,    title:'Binding to remote data' },
            { route: 'binding-to-local-data',     moduleId: './binding-to-local-data',     nav: true,    title:'Binding to local data' },
            { route: 'binding-to-grouped-data',   moduleId: './binding-to-grouped-data',   nav: true,    title:'Binding to grouped data' }

      ]);

      this.router = router;
  }
}
