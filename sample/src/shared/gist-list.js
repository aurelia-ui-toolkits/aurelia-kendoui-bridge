import samples from 'samplesJSON/samples.json!';
import {Container, inject} from 'aurelia-framework';
import {RepeatStrategyLocator} from 'aurelia-templating-resources/repeat-strategy-locator';
import {createFullOverrideContext} from 'aurelia-templating-resources/repeat-utilities';

@inject(Container)
export class GistList {
  currentGist = '';

  constructor(container) {
    this.samples = samples;

    let repeatStrategyLocator = container.get(RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(items => typeof items[Symbol.iterator] === 'function', new IteratorStrategy());
  }

  switchGist(gist, category) {
    this.selectedGist = gist;
    this.selectedCategory = category;
    if (gist.gist) {
      this.currentGist = `https://gist.run/?id=${gist.gist}`;
    } else {
      this.currentGist = `https://gist.run/?id=${gist}`;
    }
  }
}

export class IterableValueConverter {
  toView(value = {}) {
    let index = 0;
    let propKeys = Reflect.ownKeys(value);
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (index < propKeys.length) {
          let key = propKeys[index];
          index++;
          return { value: [key, value[key]] };
        } else {
          return { done: true };
        }
      }
    };
  }
}

export class IteratorStrategy {
  instanceChanged(repeat: Repeat, items: any): void {
    let removePromise = repeat.viewSlot.removeAll(true);
    if (removePromise instanceof Promise) {
      removePromise.then(() => this._standardProcessItems(repeat, items));
      return;
    }
    this._standardProcessItems(repeat, items);
  }

  _standardProcessItems(repeat, items) {
    let index = 0;
    for (let [key, value] of items) {
      let overrideContext = createFullOverrideContext(repeat, value, index, undefined, key);
      let view = repeat.viewFactory.create();
      view.bind(overrideContext.bindingContext, overrideContext);
      repeat.viewSlot.add(view);
      ++index;
    }
  }

  instanceMutated(repeat: Repeat, items: any, changes: any): void {
  }

  getCollectionObserver(observerLocator: any, items: any): any {
  }
}