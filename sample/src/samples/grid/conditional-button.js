export class ConditionalButton {
  constructor() {
    this.datasource = {
      data: [
        { ContactName: 'Foo', IsEnabled: true },
        { ContactName: 'Foo', IsEnabled: false }
      ]
    };
  }
}
