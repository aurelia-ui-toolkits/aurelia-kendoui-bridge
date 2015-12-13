import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router){
        config.title = 'Grid';
        config.map([
          { route: ['','basic-use'],                 moduleId: './basic-use',                      nav: true,  title:'Basic use' },
          { route: 'initialization-from-table',      moduleId: './initialization-from-table',      nav: true,  title:'Initialization from table' },
          { route: 'binding-to-local-data',          moduleId: './binding-to-local-data',          nav: true,  title:'Binding to local data' },
          { route: 'binding-to-remote-data',         moduleId: './binding-to-remote-data',         nav: true,  title:'Binding to remote data' },
        //{ route: 'binding-to-signalr',             moduleId: './binding-to-signalr',             nav: true,  title:'Binding to SignalR' },
        //{ route: 'binding-to-websocket',           moduleId: './binding-to-websocket',           nav: true,  title:'Binding to websocket' },
          { route: 'working-offline',                moduleId: './working-offline',                nav: true,  title:'Working offline' },
          { route: 'batch-editing',                  moduleId: './batch-editing',                  nav: true,  title:'Batch editing' },
          { route: 'inline-editing',                 moduleId: './inline-editing',                 nav: true,  title:'Inline editing' },
          { route: 'popup-editing',                  moduleId: './popup-editing',                  nav: true,  title:'Popup editing' },
        //{ route: 'editing-custom.editor',          moduleId: './editing-custom.editor',          nav: true,  title:'Editing custom editor' },
        //{ route: 'virtualization-of-local-data',   moduleId: './virtualization-of-local-data',   nav: true,  title:'Virtualization of local data' },
        //{ route: 'virtualization-of-remote-data',  moduleId: './virtualization-of-remote-data',  nav: true,  title:'Virtualization of remote data' },
        //{ route: 'virtualization-of-remote-data-without-button',  moduleId: './virtualization-of-remote-data-without-button',  nav: true,  title:'Virtualization of remote data without button' },
          { route: 'frozen-columns',                 moduleId: './frozen-columns',                   nav: true,  title:'Frozen columns' }
          //{ route: '',       moduleId: '',       nav: true, title:'' },

          ]);

        this.router = router;
    }
}
