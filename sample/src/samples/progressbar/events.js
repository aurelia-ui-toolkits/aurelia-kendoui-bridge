export class Events {

  canStart = true;

  start() {
    this.canStart = false;
    this.progress();
  }

  progress() {
    this.pb.value(0);

    this.interval = setInterval(() => {
      if (this.pb.value() < 10) {
        this.pb.value(this.pb.value() + 1);
      } else {
        clearInterval(this.interval);
      }
    }, 100);
  }

  onChange(e) {
    this.logger.log(`Change event :: value is ${e.value}`);
  }

  onComplete(e) {
    this.canStart = true;
    this.logger.log(`Complete event :: value is ${e.value}`);
  }

  detached() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
