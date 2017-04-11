export class Test {
  bind() {
    console.log(this.myVM.subscribe('ready', () => console.log('called')));
  }
}