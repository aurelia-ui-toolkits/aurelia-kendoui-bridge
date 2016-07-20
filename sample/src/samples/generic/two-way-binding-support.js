export class Binding {
  enabled = true;
  isReadonly = true;
  selectedDate = new Date();

  randomDate() {
    let min = new Date();
    let max = new Date(2025, 1, 1);

    this.selectedDate = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
  }
}
