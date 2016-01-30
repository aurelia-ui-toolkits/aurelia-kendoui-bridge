import {bindable} from 'aurelia-templating';

export class RangeSelection {
    @bindable startTime = '8:00 AM';

    attached() {
      this.startTimePicker = this.start.kWidget;
      this.endTimePicker = this.end.kWidget;

      this.startTimePicker.min('8:00 AM');
      this.startTimePicker.max('6:00 PM');

      this.endTimePicker.min('8:00 AM');
      this.endTimePicker.max('7:30 AM');
    }

    startTimeChanged() {
      if (this.startTime) {
        let time = new Date(this.startTime);

        this.endTimePicker.max(time);

        time.setMinutes(time.getMinutes() + this.endTimePicker.options.interval);

        this.endTimePicker.min(time);
        this.endTimePicker.value(time);
      }
    }
}
