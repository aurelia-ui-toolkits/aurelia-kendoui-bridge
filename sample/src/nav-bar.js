import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  chartRoutes = ['area-charts', 'line-charts'];
}
