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
            moduleId: 'installation-wizard/wizard',
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
            name: 'bar-charts',
            route: 'bar-charts',
            moduleId: 'charts/bar-charts/index',
            title: 'Bar Charts'
        },  {
            name: 'box-plot-charts',
            route: 'box-plot-charts',
            moduleId: 'charts/box-plot-charts/index',
            title: 'Box Plot Charts'
        },
        //     name: 'bubble-charts',
        //     route: 'bubble-charts',
        //     moduleId: 'charts/bubble-charts/index',
        //     title: 'Bubble Charts'
        // },  {
        //     name: 'bullet-charts',
        //     route: 'bullet-charts',
        //     moduleId: 'charts/bullet-charts/index',
        //     title: 'Bullet Charts'
        // },  {
        //     name: 'donut-charts',
        //     route: 'donut-charts',
        //     moduleId: 'charts/donut-charts/index',
        //     title: 'Donut Charts'
        // },  {
        //     name: 'funnel-charts',
        //     route: 'funnel-charts',
        //     moduleId: 'charts/funnel-charts/index',
        //     title: 'Funnel Charts'
        // },
        {
            name: 'line-charts',
            route: 'line-charts',
            moduleId: 'charts/line-charts/index',
            title: 'Line Charts'
        },
        // {
        //     name: 'pie-charts',
        //     route: 'pie-charts',
        //     moduleId: 'charts/pie-charts/index',
        //     title: 'Pie Charts'
        // },
        {
            name: 'polar-charts',
            route: 'polar-charts',
            moduleId: 'charts/polar-charts/index',
            title: 'Polar Charts'
        },
        {
            name: 'grid',
            route: 'grid',
            moduleId: 'grid/index',
            title: 'Grid'
        }
        ]);

        this.router = router;
    }
}
