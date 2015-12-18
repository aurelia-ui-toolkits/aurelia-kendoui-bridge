import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Polar Chart';
      config.map([
            { route: ['','polar-line'],         moduleId: './polar-line',             nav: true,    title:'Polar line' },
            { route: 'smooth-polar-line',       moduleId: './smooth-polar-line',      nav: true,    title:'Smooth polar line' },
            { route: 'polar-scatter',           moduleId: './polar-scatter',          nav: true,    title:'Polar scatter' },
            { route: 'polar-area',              moduleId: './polar-area',             nav: true,    title:'Polar area' },
            { route: 'binding-to-remote-data',  moduleId: './binding-to-remote-data', nav: true,    title:'Binding to remote data' },
            { route: 'binding-to-local-data',   moduleId: './binding-to-local-data',  nav: true,    title:'Binding to local data' }
      ]);

      this.router = router;
  }
}
