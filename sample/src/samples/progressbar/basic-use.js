export class BasicUse {

  progressbars = [];

  bind(ctx) {
    this.progressbars.push(this.fastAndFurious);
    this.progressbars.push(this.nowYouSeeMe);
    this.progressbars.push(this.theHelp);
    this.progressbars.push(this.theInternship);
    this.progressbars.push(this.thePerks);
  }

  castVote() {
    let first = $(this.favouriteMovie1).val();
    let second = $(this.favouriteMovie2).val();
    let third = $(this.favouriteMovie3).val();

    if (first !== '' && second !== '' && third !== '' && first !== second && second !== third && first !== third) {
      this.progressbars.forEach(pb => {
        pb.value = 0;
      });

      this[first].value = 50;
      this[second].value = 30;
      this[third].value = 10;

      this.progressbars.forEach(pb => {
        if (pb.value === 0) {
          pb.value = 5;
        }
      });
    } else {
      alert('Please select three different movies');
    }
  }
}
