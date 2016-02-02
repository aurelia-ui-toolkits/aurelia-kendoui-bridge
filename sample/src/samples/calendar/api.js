export class Api {
  dateVal = '10/10/2000';

  getDate() {
    alert(this.calendar.value());
  }

  navigate() {
    switch (this.view) {
    case 'up':
      this.calendar.navigateUp();
      break;
    case 'down':
      this.calendar.navigateDown(this.calendar.value());
      break;
    case 'past':
      this.calendar.navigateToPast();
      break;
    default:
      this.calendar.navigateToFuture();
      break;
    }
  }
}
