import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Grid';
	    config.map([
	      { route: ['','page1'],  moduleId: './page1',      nav: true, title:'Page1' },
	      { route: 'page2',  moduleId: './page2',      nav: true, title:'Page2' },
	  	]);

	    this.router = router;
	}
}