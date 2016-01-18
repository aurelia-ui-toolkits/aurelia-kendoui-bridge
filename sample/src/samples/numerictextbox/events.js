export class Events {
    constructor() {

    }

    onSpin() {
      this.logger.log('Spin :: ' + this.numerictextbox.value());
    }

    onChange() {
      this.logger.log('Change :: ' + this.numerictextbox.value());
    }
}