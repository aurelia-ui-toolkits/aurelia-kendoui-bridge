export class BasicUse {
  data = [
    '12 Angry Men',
    'Il buono, il brutto, il cattivo.',
    'Inception',
    'One Flew Over the Cuckoo\'s Nest',
    'Pulp Fiction',
    'Schindler\'s List',
    'The Dark Knight',
    'The Godfather',
    'The Godfather: Part II',
    'The Shawshank Redemption'
  ];

  submit(event) {
    event.preventDefault();
    if (this.validator.validate()) {
      $(this.status).text('Hooray! Your tickets has been booked!')
      .removeClass('invalid')
      .addClass('valid');
    } else {
      $(this.status).text('Oops! There is invalid data in the form.')
      .removeClass('valid')
      .addClass('invalid');
    }
  }
}
