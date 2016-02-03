export class CapitalizeValueConverter {
  toView(text) {
    if (text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
}
