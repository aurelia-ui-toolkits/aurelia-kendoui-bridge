import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'kendo-ui/styles/kendo.common.core.min.css!';
import 'kendo-ui/styles/kendo.bootstrap.min.css!';

export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';
        config.map([
        {
            route: '',
            redirect: 'autocomplete'
        }, {
            route: 'autocomplete',
            moduleId: 'autocomplete/index',
            nav: true,
            title: 'Autocomplete'
        },  {
            route: 'button',
            moduleId: 'button/index',
            nav: true,
            title: 'Button'
        },  {
            route: 'combobox',
            moduleId: 'combobox/index',
            nav: true,
            title: 'Combobox'
        },  {
            route: 'dropdownlist',
            moduleId: 'dropdownlist/index',
            nav: true,
            title: 'DropDownList'
        },  {
            route: 'grid',
            moduleId: 'grid/index',
            nav: true,
            title: 'Grid'
        }, {
            route: 'tabstrip',
            moduleId: 'tabstrip/index',
            nav: true,
            title: 'TabStrip'
        },]);

        this.router = router;
    }
}
