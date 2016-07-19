import {KendoConfigBuilder} from './config-builder';
import {RepeatStrategyLocator, ArrayRepeatStrategy} from 'aurelia-templating-resources';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  if (builder.registerRepeatStrategy) {
    let repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(items => items instanceof kendo.data.ObservableArray, new ArrayRepeatStrategy());
  }
}

// build-index-remove start
export * from './common/decorators';
// build-index-remove end
