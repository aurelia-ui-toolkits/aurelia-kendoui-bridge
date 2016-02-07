export class Api {
  data = [
    {text: '12 Angry Men', value: '1'},
    {text: 'Il buono, il brutto, il cattivo.', value: '2'},
    {text: 'Inception', value: '3'},
    {text: 'One Flew Over the Cuckoo\'s Nest', value: '4'},
    {text: 'Pulp Fiction', value: '5'},
    {text: 'Schindler\'s List', value: '6'},
    {text: 'The Dark Knight', value: '7'},
    {text: 'The Godfather', value: '8'},
    {text: 'The Godfather: Part II', value: '9'},
    {text: 'The Shawshank Redemption', value: '10'},
    {text: 'The Shawshank Redemption 2', value: '11'}
  ];

  getValue() {
    alert(this.movies.value());
  }

  getText() {
    alert(this.movies.text());
  }

  setValue(val) {
    this.movies.value(val);
  }

  setIndex(val) {
    let index = parseInt(val, 8);
    this.movies.select(index);
  }

  find(value) {
    this.movies.search(value === '' ? undefined : value);
  }

  filterTypeOnChanged() {
    this.movies.options.filter = this.filter;
  }
}
