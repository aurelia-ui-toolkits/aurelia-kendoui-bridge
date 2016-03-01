export class Direction {
  direction = 'bottom';
  customValue = 'top left';

  apply() {
    let direction = this.direction;

    if (this.customValue && !this.direction) {
      direction = this.customValue;
    }

    this.menuVM.kDirection = direction;
    this.menuVM.recreate();
  }
}
