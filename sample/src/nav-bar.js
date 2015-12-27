import {bindable} from 'aurelia-framework';
import 'jquery';

export class NavBar {
  @bindable router = null;

  attached() {
    this.dialog = jQuery(this.themeSelector).kendoWindow({
      width: '800px',
      title: 'Themes',
      actions: [
        'Pin',
        'Minimize',
        'Maximize',
        'Close'
      ]
    }).data('kendoWindow');

    jQuery(this.themeSelector).parent().addClass('theme-window');

    jQuery(this.menu).kendoMenu();
  }

  showThemeDialog() {
    this.dialog.open();
    this.dialog.center();
  }
}
