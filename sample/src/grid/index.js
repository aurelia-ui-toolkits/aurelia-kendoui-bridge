import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router){
        config.title = 'Grid';
        config.map([
          { route: ['','basic-use'],    moduleId: './basic-use',         nav: true, title:'Basic use' },
          { route: 'html-config',       moduleId: './html-config',       nav: true, title:'HTML configuration' },

          ]);

        this.router = router;
    }
}
