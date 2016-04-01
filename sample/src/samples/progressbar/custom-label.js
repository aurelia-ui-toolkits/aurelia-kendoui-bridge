import {inject, TaskQueue} from 'aurelia-framework';

@inject(TaskQueue)
export class CustomLabel {
  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.pb.progressStatus.text('Empty');
    });
  }

  onKeyUp() {
    this.pb.value(this.password.length);
  }

  submit() {
    let strength = this.pb.progressStatus.first().text();
    alert(`${strength} password!`);
  }

  onChange(e) {
    let progressWrapper = this.pb.progressWrapper;
    let progressStatus = this.pb.progressStatus;

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
