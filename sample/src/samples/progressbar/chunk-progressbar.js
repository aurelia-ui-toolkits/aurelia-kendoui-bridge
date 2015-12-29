export class ChunkProgressbar {
  attached() {
    $(this.birthdayInput).kendoDatePicker();

    $(this.birthdayInput).change(function() {
      let currentDate = kendo.parseDate(this.value);
      if (!currentDate) {
        this.value = '';
      }
    });

    $('.forms input').change(() => {
      let completeness = 5;
      $('.forms input').each((index, input) => {
        if (input.value === '') {
          completeness--;
        }
      });

      this.pb.value(completeness);
      $(this.completed).text((completeness * 20) + '%');
    });
  }
}
