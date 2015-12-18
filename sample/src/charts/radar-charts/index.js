import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Radar Chart';
      config.map([
            { route: ['','radar-line'],         moduleId: './radar-line',             nav: true,    title:'Radar line' },
            { route: ['smooth-radar-line'],     moduleId: './smooth-radar-line',      nav: true,    title:'Smooth radar line' },
            { route: ['radar-area'],            moduleId: './radar-area',             nav: true,    title:'Radar area' },
            { route: ['radar-column'],          moduleId: './radar-column',           nav: true,    title:'Radar column' },
            { route: 'binding-to-remote-data',  moduleId: './binding-to-remote-data', nav: true,    title:'Binding to remote data' },
            { route: 'binding-to-local-data',   moduleId: './binding-to-local-data',  nav: true,    title:'Binding to local data' },
            { route: 'binding-to-grouped-data',   moduleId: './binding-to-grouped-data',  nav: true,    title:'Binding to grouped data' }
      ]);

      this.router = router;
  }
}
