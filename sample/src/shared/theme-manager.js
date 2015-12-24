import {inject} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ThemeManager {

  constructor(ea) {
    this.ea = ea;
  }

  loadTheme(theme) {
    let path = this.getNormalizedThemePath(theme);

    this.removeOldThemes();

    this.deleteFromSystemJS(path);

    return System.import(path)
    .then(() => {
      let themable = ['Chart', 'TreeMap', 'Diagram', 'StockChart', 'Sparkline', 'RadialGauge', 'LinearGauge'];

      if (kendo.dataviz && theme) {
        for (let i = 0; i < themable.length; i++) {
          let widget = kendo.dataviz.ui[themable[i]];

          if (widget) {
            widget.fn.options.theme = theme;
          }
        }
      }

      this.ea.publish('kendo:skinChange', theme);
    });
  }

  deleteFromSystemJS(normalizedPath) {
    if (System.has(normalizedPath)) {
      System.delete(normalizedPath);
    }
  }

  getNormalizedThemePath(theme) {
    return System.normalizeSync(`kendo-ui/styles/kendo.${theme}.min.css!`);
  }

  removeOldThemes() {
    jQuery('head > link').each(function() {
      if (this.href.includes('styles/kendo.') && !this.href.includes('kendo.common.min')) {
        DOM.removeNode(this);
      }
    });
  }
}
