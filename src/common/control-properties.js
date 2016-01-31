import bindables from './bindables.json!';

export class ControlProperties {
  cache = [];

  getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    let options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);
    let options2 = bindables[controlName];
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));

    keys.push('widget');

    this.cache[controlName] = keys;

    return keys;
  }
}
