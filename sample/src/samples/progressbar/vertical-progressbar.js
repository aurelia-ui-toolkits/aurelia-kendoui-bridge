export class VerticalProgressbar {

  itemsToLoad = ['styles', 'scripts', 'images', 'fonts'];

  attached() {
    this.load();
  }

  onChange(e) {
    $('.loadingStatus').text(e.value + '%');
  }

  onComplete() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    let pb1 = this.pb1.kWidget;

    let total = +pb1.value();
    total ++;
    pb1.value(total);

    if (total < pb1.options.max) {
      $('.chunkStatus').text(total + 1);
      $('.loadingInfo h2').text(`Loading ${this.itemsToLoad[total]}`);

      this.load();
    }
  }

  onTotalComplete() {
    $('.loadingInfo h2').text('All items loaded');
    $('.statusContainer').hide();
    $('.reloadButton').show();
  }

  load() {
    let pb2 = this.pb2.kWidget;
    pb2.value(0);

    this.interval = setInterval(() => {
      if (pb2.value() < 100) {
        pb2.value(pb2.value() + 1);
      } else {
        clearInterval(this.interval);
      }
    }, 30);
  }

  reload() {
    let pb1 = this.pb1.kWidget;
    let pb2 = this.pb2.kWidget;

    $(this.reloadButton).hide();
    $('.statusContainer').show();

    pb1.value(0);
    pb2.value(0);
    $('.loadingInfo h2').text(`Loading ${this.itemsToLoad[0]}`);
    $('.chunkStatus').text(1);

    this.load();
  }

  detached() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
