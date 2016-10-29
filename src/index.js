import {KendoConfigBuilder} from './config-builder';
import {RepeatStrategyLocator, ArrayRepeatStrategy} from 'aurelia-templating-resources';
import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo.data.min';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  const logger = LogManager.getLogger('aurelia-kendoui-bridge');
  logger.warn('This version of aurelia-kendoui-bridge has been deprecated. Please update to the 1.0.0 version or above');

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
export {generateBindables, delayed} from './common/decorators';
// build-index-remove end
