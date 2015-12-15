export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';

        config.map([{
            name: 'about',
            route: ['','about'],
            moduleId: 'about/about',
            title: 'About'
        },  {
            route: 'installation/:page',
            moduleId: './installation-wizard/wizard',
            name: 'install',
            href: '#/installation/begin',
            title:'Installation wizard'
        },  {
            name: 'autocomplete',
            route: 'autocomplete',
            moduleId: 'autocomplete/index',
            title: 'Autocomplete'
        },  {
            name: 'button',
            route: 'button',
            moduleId: 'button/index',
            title: 'Button'
        },  {
            name: 'area-charts',
            route: 'area-charts',
            moduleId: 'charts/area-charts/index',
            title: 'Area Charts'
        },  {
            name: 'line-charts',
            route: 'line-charts',
            moduleId: 'charts/line-charts/index',
            title: 'Line Charts'
        },  {
            name: 'grid',
            route: 'grid',
            moduleId: 'grid/index',
            title: 'Grid'
        }]);

        this.router = router;
    }
}
