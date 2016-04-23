import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import 'jquery';

@inject(EventAggregator)
export class NavBar {
  @bindable router = null;

  constructor(ea) {
    this.ea = ea;

    this.subscription = this.ea.subscribe('router:navigation:complete', () => this.routeChanged());
  }

  attached() {
    this.dialog = jQuery(this.themeSelector).kendoWindow({
      width: '800px',
      visible: false,
      title: 'Themes',
      actions: [
        'Pin',
        'Minimize',
        'Maximize',
        'Close'
      ]
    }).data('kendoWindow');

    jQuery(this.themeSelector).parent().addClass('theme-window');

    jQuery(this.menu).kendoMenu({
      select: (e) => {
        $(this.menu).find('.k-state-selected').removeClass('k-state-selected');
        $(e.item).addClass('k-state-selected');
      }
    });
  }

  routeChanged() {
    $(this.menu).find('.k-state-selected').removeClass('k-state-selected');

    let route = this.router.currentInstruction;

    // prefix hash to the fragment
    let fragment = `#${route.fragment}`;

    // check if any anchor's href is at the start of the fragment
    jQuery('a', this.menu).each((i, anchor) => {
      let href = jQuery(anchor).attr('href');

      if (href !== '#' && fragment.startsWith(href)) {
        jQuery(anchor).addClass('k-state-selected');
      }
    });
  }

  showThemeDialog() {
    this.dialog.open();
    this.dialog.center();
  }

  detached() {
    if (this.subscription) {
      this.subscription.dispose();
    }
  }
}
