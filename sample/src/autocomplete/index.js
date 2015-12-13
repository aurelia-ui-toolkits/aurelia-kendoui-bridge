import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Autocomplete';
	    config.map([
	      { route: ['','basic-use'],         moduleId: './basic-use',              nav: true, title:'Basic use' },
	      { route: 'remote-data',            moduleId: './remote-data',            nav: true, title:'Remote data' },
        { route: 'customizing-templates',  moduleId: './customizing-templates',  nav: true, title:'Customizing templates' },
        { route: 'api',                    moduleId: './api',                    nav: true, title:'API' },
        { route: 'events',                 moduleId: './events',                 nav: true, title:'Events' },
        { route: 'grouping',               moduleId: './grouping',               nav: true, title:'Grouping' },
        { route: 'virtualization',         moduleId: './virtualization',         nav: true, title:'Virtualization' },
	  	]);

	    this.router = router;
	}
}
