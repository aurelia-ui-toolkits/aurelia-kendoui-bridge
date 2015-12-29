export class CustomLabel {
  attached() {
    this.pb.widget.progressStatus.text('Empty');
  }

  onKeyUp() {
    this.pb.value(this.password.length);
  }

  submit() {
    let strength = this.pb.widget.progressStatus.first().text();
    alert(`${strength} password!`);
  }

  onChange(e) {
    let progressWrapper = this.pb.widget.progressWrapper;
    let progressStatus = this.pb.widget.progressStatus;

    progressWrapper.css({
      'background-image': 'none',
      'border-image': 'none'
    });

    if (e.value < 1) {
      progressStatus.text('Empty');
    } else if (e.value <= 3) {
      progressStatus.text('Weak');

      progressWrapper.css({
        'background-color': '#EE9F05',
        'border-color': '#EE9F05'
      });
    } else if (e.value <= 6) {
      progressStatus.text('Good');

      progressWrapper.css({
        'background-color': '#428bca',
        'border-color': '#428bca'
      });
    } else {
      progressStatus.text('Strong');

      progressWrapper.css({
        'background-color': '#8EBC00',
        'border-color': '#8EBC00'
      });
    }
  }
}
