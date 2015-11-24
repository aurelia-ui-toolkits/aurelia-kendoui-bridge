import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'kendo-ui-css-core!css';
import 'kendo-ui-css-bootstrap!css';

export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';
        config.map([{
            route: '',
            redirect: 'grid'
        }, {
            route: 'grid',
            moduleId: 'grid/index',
            nav: true,
            title: 'Grid'
        }, {
            route: 'button',
            moduleId: 'button/index',
            nav: true,
            title: 'Button'
        },  {
            route: 'comboboc',
            moduleId: 'combobox/index',
            nav: true,
            title: 'Combobox'
        },  {
            route: 'autocomplete',
            moduleId: 'autocomplete/index',
            nav: true,
            title: 'Autocomplete'
        }, {
            route: 'tabstrip',
            moduleId: 'tabstrip/index',
            nav: true,
            title: 'TabStrip'
        },]);

        this.router = router;
    }
}
