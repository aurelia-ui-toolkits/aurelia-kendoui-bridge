import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Bar Chart';
      config.map([
            { route: ['','basic-use'],                 moduleId: './basic-use',                      nav: true,    title:'Basic use' },
            { route: 'column-chart',                   moduleId: './column-chart',                   nav: true,    title:'Column chart' },
            { route: 'stacked-bars',                   moduleId: './stacked-bars',                   nav: true,    title:'Stacked bars' },
            { route: 'stacked-and-grouped-bars',       moduleId: './stacked-and-grouped-bars',       nav: true,    title:'Stacked and grouped bars' },
            { route: 'stacked-bars-100',               moduleId: './stacked-bars-100',               nav: true,    title:'100% Stacked-bars' },
            { route: 'stacked-and-grouped-bars-100',   moduleId: './stacked-and-grouped-bars-100',   nav: true,    title:'100% Stacked and grouped bars' },
            { route: 'date-axis',                      moduleId: './date-axis',                      nav: true,    title:'Date axis' },
            { route: 'logarithmic-axis',               moduleId: './logarithmic-axis',               nav: true,    title:'Logarithmic axis' },
            { route: 'multi-axis',                     moduleId: './multi-axis',                     nav: true,    title:'Multi axis' },
            { route: 'plot-bands',                     moduleId: './plot-bands',                     nav: true,    title:'Plot bands' },
            { route: 'gap-and-spacing',                moduleId: './gap-and-spacing',                nav: true,    title:'Gap and spacing' },
            { route: 'error-bars',                     moduleId: './error-bars',                     nav: true,    title:'Error bars' },
            { route: 'custom-visuals',                 moduleId: './custom-visuals',                 nav: true,    title:'Custom visuals' },
            { route: 'pan-and-zoom',                   moduleId: './pan-and-zoom',                   nav: true,    title:'Pan and zoom' },
            { route: 'custom-pan-and-zoom',            moduleId: './custom-pan-and-zoom',            nav: true,    title:'Custom pan and zoom' },
            { route: 'binding-to-remote-data',         moduleId: './binding-to-remote-data',         nav: true,    title:'Binding to remote data' },
            { route: 'binding-to-local-data',          moduleId: './binding-to-local-data',          nav: true,    title:'Binding to local data' },
            { route: 'binding-to-grouped-data',        moduleId: './binding-to-grouped-data',        nav: true,    title:'Binding to grouped data' }
            //{ route: '',            moduleId: '',            nav: true, title:'' },

      ]);

      this.router = router;
  }
}