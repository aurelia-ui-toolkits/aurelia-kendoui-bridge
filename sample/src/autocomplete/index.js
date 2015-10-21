import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Autocomplete';
	    config.map([
	      { route: ['','basic-use'],  moduleId: './basic-use',      nav: true, title:'Basic Use' },
	      { route: 'remote-data',  moduleId: './remote-data',      nav: true, title:'Remote Data' },
	  	]);

	    this.router = router;
	}
}