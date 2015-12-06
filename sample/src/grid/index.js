import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router){
        config.title = 'Grid - templating branch';
        config.map([
          { route: ['','basic-use'],    moduleId: './basic-use',         nav: true, title:'Basic use' },
          { route: 'html-config',       moduleId: './html-config',       nav: true, title:'HTML configuration' },
          { route: 'templating-issue',  moduleId: './templating-issue',  nav: true, title:'Templating issue' }
          ]);

        this.router = router;
    }
}
