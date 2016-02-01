export class Events {
  onChange(e) {
    this.logger.log(`Change :: min: ${e.value[0]}, max: ${e.value[1]}`);
  }

  onSlide(e) {
    this.logger.log(`Slide :: min: ${e.value[0]}, max: ${e.value[1]}`);
  }
}
