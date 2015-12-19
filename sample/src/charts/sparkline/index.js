import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

  configureRouter(config, router){
      config.title = 'Sparkline';
      config.map([
            { route: ['','basic-use'],            moduleId: './basic-use',                 nav: true,    title:'Basic use' },
            { route: 'aurelia',                   moduleId: './aurelia',                   nav: true,    title:'Aurelia' }
      ]);

      this.router = router;
  }
}
