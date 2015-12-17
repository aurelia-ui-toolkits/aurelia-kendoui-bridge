import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Line Charts';
      config.map([
            { route: ['','basic-use'],            moduleId: './basic-use',                 nav: true,    title:'Basic use' },
            { route: 'stacked-line',              moduleId: './stacked-line',              nav: true,    title:'Stacked Line' },
            { route: 'stepped-line',              moduleId: './stepped-line',              nav: true,    title:'Stepped line' },
            { route: 'smooth-line',               moduleId: './smooth-line',               nav: true,    title:'Smooth line' },
            { route: 'date-axis',                 moduleId: './date-axis',                 nav: true,    title:'Date axis' },
            { route: 'logarithmic-axis',          moduleId: './logarithmic-axis',          nav: true,    title:'Logarithmic axis' },
            { route: 'multi-axis',                moduleId: './multi-axis',                nav: true,    title:'Multi axis' },
            { route: 'error-bars',                moduleId: './error-bars',                nav: true,    title:'Error bars' },
            { route: 'binding-to-remote-data',    moduleId: './binding-to-remote-data',    nav: true,    title:'Binding to remote data' },
            { route: 'binding-to-local-data',     moduleId: './binding-to-local-data',     nav: true,    title:'Binding to local data' },
            { route: 'binding-to-grouped-data',   moduleId: './binding-to-grouped-data',   nav: true,    title:'Binding to grouped data' }
            //{ route: '',            moduleId: '',            nav: true, title:'' },

      ]);

      this.router = router;
  }
}