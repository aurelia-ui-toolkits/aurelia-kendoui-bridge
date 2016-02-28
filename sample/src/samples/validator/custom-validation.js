export class CustomValidation {
  rules = {
    greaterdate: (input) => {
      if (input.is('[data-greaterdate-msg]') && input.val() !== '') {
        let date = kendo.parseDate(input.val());
        let otherDate = kendo.parseDate($('[name="' + input.data('greaterdateField') + '"]').val());

        return otherDate === null || otherDate.getTime() < date.getTime();
      }

      return true;
    }
  };

  save() {
    if (this.validator.validate()) {
      alert('Employee saved!');
    }
  }
}
