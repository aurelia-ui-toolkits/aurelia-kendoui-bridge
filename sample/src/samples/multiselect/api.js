export class API {
  word = 'The';
  selectedValue = '1,2';
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

  selectByValue() {
    this.multiselect.dataSource.filter({});
    this.multiselect.value(this.selectedValue.split(','));
  }

  find() {
    this.multiselect.search(this.word);
  }

  getValues() {
    alert(this.multiselect.value());
  }

  filterChanged() {
    this.multiselect.options.filter = this.filter;
  }
}
