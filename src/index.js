import {KendoConfigBuilder} from './config-builder';
import 'jquery';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}
