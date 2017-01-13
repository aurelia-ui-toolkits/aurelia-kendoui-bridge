export class Test {
  test(e) {
    // console.log('TEST');
    if (e) {
      e.stopImmediatePropagation();
    }
  }
}