export class ChunkProgressbar {
  attached() {
    kendo.jQuery(this.birthdayInput).kendoDatePicker();

    kendo.jQuery(this.birthdayInput).change(function() {
      let currentDate = kendo.parseDate(this.value);
      if (!currentDate) {
        this.value = '';
      }
    });

    kendo.jQuery('.forms input').change(() => {
      let completeness = 5;
      kendo.jQuery('.forms input').each((index, input) => {
        if (input.value === '') {
          completeness--;
        }
      });

      this.pb.value(completeness);
      kendo.jQuery(this.completed).text((completeness * 20) + '%');
    });
  }
}
