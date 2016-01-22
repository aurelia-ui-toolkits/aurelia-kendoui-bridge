export class BasicUse {

  castVote() {
    let first = this.favouriteMovie1.value();
    let second = this.favouriteMovie2.value();
    let third = this.favouriteMovie3.value();

    if (first !== '' && second !== '' && third !== '' && first !== second && second !== third && first !== third) {
      let progressbars = [this.fastAndFurious,
                          this.nowYouSeeMe,
                          this.theHelp,
                          this.theInternship,
                          this.thePerks];

      progressbars.forEach(pb => {
        pb.value(0);
      });

      this.theInternship.value(50);
      this.fastAndFurious.value(30);
      this.nowYouSeeMe.value(10);

      progressbars.forEach(pb => {
        if (pb.value() === 0) {
          pb.value(5);
        }
      });
    } else {
      alert('Please select three different movies');
    }
  }
}
