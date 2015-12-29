import {inject} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ThemeManager {

  commons = [
      { name: 'standard', value: 'common' },
      { name: 'bootstrap', value: 'common-bootstrap', relativity: 'larger' },
      { name: 'material', value: 'common-material', relativity: 'bold' },
      { name: 'nova', value: 'common-nova', relativity: 'bold' },
      { name: 'fiori', value: 'common-fiori', relativity: 'larger' },
      { name: 'office365', value: 'common-office365', relativity: 'bold' }
  ];

  constructor(ea) {
    this.ea = ea;
  }

  loadTheme(theme) {
    let common = (this.commons.find(i => i.name === theme) || this.commons.find(i => i.name === 'standard')).value;
    let commonPath = this.getNormalizedThemePath(common);
    let themePath = this.getNormalizedThemePath(theme);

    this.removeOldThemes();

    this.deleteFromSystemJS(themePath);
    this.deleteFromSystemJS(commonPath);

    return Promise.all([this.common(commonPath), this.theme(themePath)])
    .then(() => this.ea.publish('kendo:skinChange', theme));
  }

  theme(path) {
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
    });
  }

  common(path) {
    return System.import(path);
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
      if (this.href.includes('styles/kendo.')) {
        DOM.removeNode(this);
      }
    });
  }
}
