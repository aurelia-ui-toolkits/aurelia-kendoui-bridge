export class Events {
  onChange(e) {
    this.logger.log(`Change :: new value is: ${e.value}`);
  }

  onSlide(e) {
    this.logger.log(`Slide :: new slide value is: ${e.value}`);
  }
}
