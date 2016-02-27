import {TaskQueue, inject} from 'aurelia-framework';

@inject(TaskQueue)
export class VerticalProgressbar {

  itemsToLoad = ['styles', 'scripts', 'images', 'fonts'];

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.load();
    });
  }

  onChange(e) {
    $('.loadingStatus').text(e.value + '%');
  }

  onComplete() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    let total = +this.pb1.value();
    total ++;
    this.pb1.value(total);

    if (total < this.pb1.options.max) {
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
    $(this.reloadButton).hide();
    $('.statusContainer').show();

    this.pb1.value(0);
    this.pb2.value(0);
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
