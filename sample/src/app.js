export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';

        config.map([
            { name: 'about', route: 'about', moduleId: 'about/about', title: 'About' },
            { name: 'catalog-index', route: 'catalog-index', moduleId: 'catalog-index/controls', title: 'Catalog-index' },
            { name: 'documentation', route: 'documentation', moduleId: 'documentation/documentation', title: 'Documentation' },
            { name: 'help', route: 'help', moduleId: 'help/index', title: 'Help' },
            { name: 'test', route: 'test', moduleId: 'test/index', title: 'Test' },
            { name: 'test1', route: 'test1', moduleId: 'test1/index', title: 'Test1' },
            { name: 'test2', route: 'test2', moduleId: 'test2/index', title: 'Test2' },
            { name: 'test3', route: 'test3', moduleId: 'test3/index', title: 'Test3' },
            { name: 'test4', route: 'test4', moduleId: 'test4/index', title: 'Test4' },
            { name: 'test5', route: 'test5', moduleId: 'test5/index', title: 'Test5' },
            { name: 'home', route: '', redirect: 'about/about' },
            { name: 'installation', route: 'installation', moduleId: 'installation/installation', title: 'Installation' },
            { name: 'samples', route: 'samples', moduleId: 'samples/index', title: 'Samples' },
            { name: 'gist-list', route: 'gist-list', moduleId: 'shared/gist-list', title: 'Gist list' }
        ]);

        this.router = router;
    }
}