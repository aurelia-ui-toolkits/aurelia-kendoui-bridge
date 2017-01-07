import samples from 'https://aurelia-ui-toolkits.github.io/aurelia-kendoui-samples/samples.json!';

export class Index {
  configureRouter(config, router) {
    config.title = 'Samples';

    let routes = [{ name: 'default', route: '', redirect: 'generic' }];

    samples.categories.forEach(category => {
      this.normalizeCategory(category);

      let keys = Object.keys(category.samples);
      keys.forEach(key => {
        let sample = category.samples[key];
        sample = this.normalizeSample(category, key, sample);

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

    config.map(routes);
    this.router = router;
  }

  normalizeCategory(category) {
    category.dashed = category.title.toLowerCase().replace(/ /g, '-');
  }

  normalizeSample(category, name, sample) {
    if (typeof sample !== 'object') {
      sample = {
        gist: sample
      };
    }

    if (!sample.route) {
      sample.route = `${category.dashed}-${name}`;
    }
    if (!sample.title) {
      sample.title = name.replace(/-/g, ' ');
      sample.title = sample.title.charAt(0).toUpperCase() + sample.title.slice(1);
    }

    sample.control = category.dashed;

    return sample;
  }
}
