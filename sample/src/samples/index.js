import {Container} from 'aurelia-dependency-injection';
import samples from './samples.json!';

export class Index {

  configureRouter(config, router) {
    config.title = 'Samples';

    let routes = [{ name: 'default', route: '', redirect: 'generic' }];

    samples.categories.forEach(category => {
      this.normalizeCategory(category);

      let keys = Object.keys(category.samples);
      keys.forEach(key => {
        let sample = category.samples[key];
        this.normalizeSample(category, key, sample);

        routes.push({
          name: sample.route,
          route: sample.route,
          moduleId: './sample-runner',
          title: sample.title,
          sample: sample,
          category: category
        });

        if (sample.default) {
          routes.push({
            name: category.dashed,
            route: category.dashed,
            redirect: sample.route
          });
        }
      });
    });

    Container.instance.registerInstance('SampleRouter', router);

    config.map(routes);
    this.router = router;
  }

  normalizeCategory(category) {
    category.dashed = category.title.toLowerCase().replace(' ', '-');
  }

  normalizeSample(category, name, sample) {
    if (!sample.route) {
      sample.route = `${category.dashed}-${name}`;
    }
    if (!sample.title) {
      sample.title = name.replace(/-/g, ' ');
      sample.title = sample.title.charAt(0).toUpperCase() + sample.title.slice(1);
    }

    sample.control = category.dashed;
    sample.routeName = '' + Math.floor((Math.random() * 10000000) + 1);
  }
}
