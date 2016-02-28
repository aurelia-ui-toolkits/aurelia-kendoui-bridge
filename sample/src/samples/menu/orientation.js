export class Orientation {
  orientation = 'horizontal';
  orientations = [{ text: 'Horizontal', value: 'horizontal' },
                  { text: 'Vertical', value: 'vertical'}];

  apply() {
    this.menuVM.kOrientation = this.orientation;
    this.menuVM.recreate();
  }
}
