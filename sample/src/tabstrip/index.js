import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'TabStrip';
	    config.map([
	      { route: ['','basic-use'],       moduleId: './basic-use',          nav: true, title:'Basic Use' },
          { route: ['images'],             moduleId: './images',             nav: true, title:'Images' },
          { route: ['animation-effects'],  moduleId: './animation-effects',  nav: true, title:'Animation effects' },
          { route: ['tab-position'],       moduleId: './tab-position',       nav: true, title:'Tab position' },
          { route: ['scrollable-tabs'],    moduleId: './scrollable-tabs',    nav: true, title:'Scrollable tabs' },
          { route: ['api'],                moduleId: './api',                nav: true, title:'API' }
	  	]);

	    this.router = router;
	}
}