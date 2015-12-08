import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

	configureRouter(config, router){
	    config.title = 'Menu';
	    config.map([
	      { route: ['','basic-use'],     moduleId: './basic-use',          nav: true,  title:'Basic Use' },
          { route: 'images',             moduleId: './images',             nav: true,  title:'Images' },
          { route: 'direction',          moduleId: './direction',          nav: true,  title:'Direction' },
          { route: 'orientation',        moduleId: './orientation',        nav: true,  title:'Orientation' },
          { route: 'animation-effects',  moduleId: './animation-effects',  nav: true,  title:'Animation effects' },
          { route: 'api',                moduleId: './api',                nav: true,  title:'Api' },
          { route: 'context-menu',       moduleId: './context-menu',       nav: true,  title:'Context menu' }
          //{ route: '',       moduleId: '',       nav: true, title:'' },
	  	]);

	    this.router = router;
	}
}
