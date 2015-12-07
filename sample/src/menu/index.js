import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Menu';
	    config.map([
	      { route: ['','basic-use'],       moduleId: './basic-use',          nav: true, title:'Basic Use' }
	  	]);

	    this.router = router;
	}
}
