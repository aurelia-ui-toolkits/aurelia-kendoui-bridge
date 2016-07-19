import {delayed} from 'aurelia-kendoui-bridge/common/decorators';

export class VerticalProgressbar {

  itemsToLoad = ['styles', 'scripts', 'images', 'fonts'];

  @delayed()
  attached() {
    this.load();
  }

  onChange(e) {
    kendo.jQuery('.loadingStatus').text(e.value + '%');
  }

  onComplete() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    let total = +this.pb1.value();
    total ++;
    this.pb1.value(total);

    if (total < this.pb1.options.max) {
      kendo.jQuery('.chunkStatus').text(total + 1);
      kendo.jQuery('.loadingInfo h2').text(`Loading ${this.itemsToLoad[total]}`);

      this.load();
    }
  }

  onTotalComplete() {
    kendo.jQuery('.loadingInfo h2').text('All items loaded');
    kendo.jQuery('.statusContainer').hide();
    kendo.jQuery('.reloadButton').show();
  }

  load() {
    this.pb2.value(0);

    this.interval = setInterval(() => {
      if (this.pb2.value() < 100) {
        this.pb2.value(this.pb2.value() + 1);
      } else {
        clearInterval(this.interval);
      }
    }, 30);
  }

  reload() {
    kendo.jQuery(this.reloadButton).hide();
    kendo.jQuery('.statusContainer').show();

    this.pb1.value(0);
    this.pb2.value(0);
    kendo.jQuery('.loadingInfo h2').text(`Loading ${this.itemsToLoad[0]}`);
    kendo.jQuery('.chunkStatus').text(1);

    this.load();
  }

  detached() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
