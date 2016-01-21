export class Api {
  data = [{
    text: 'The Shawshank Redemption',
    value: '1'
  }, {
    text: 'The Godfather',
    value: '2'
  }, {
    text: 'The Godfather: Part II',
    value: '3'
  }, {
    text: 'Il buono, il brutto, il cattivo.',
    value: '4'
  }, {
    text: 'Pulp Fiction',
    value: '5'
  }, {
    text: '12 Angry Men',
    value: '6'
  }, {
    text: 'Schindler\'s List',
    value: '7'
  }, {
    text: 'One Flew Over the Cuckoo\'s Nest',
    value: '8'
  }, {
    text: 'Inception',
    value: '9'
  }, {
    text: 'The Dark Knight',
    value: '10'
  }];

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

  setSearch(val) {
    this.movies.search(val);
  }
}
