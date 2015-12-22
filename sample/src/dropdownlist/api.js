export class Api {
    data = [{
        text: "The Shawshank Redemption",
        value: "1"
    }, {
        text: "The Godfather",
        value: "2"
    }, {
        text: "The Godfather: Part II",
        value: "3"
    }, {
        text: "Il buono, il brutto, il cattivo.",
        value: "4"
    }, {
        text: "Pulp Fiction",
        value: "5"
    }, {
        text: "12 Angry Men",
        value: "6"
    }, {
        text: "Schindler's List",
        value: "7"
    }, {
        text: "One Flew Over the Cuckoo's Nest",
        value: "8"
    }, {
        text: "Inception",
        value: "9"
    }, {
        text: "The Dark Knight",
        value: "10"
    }];

    getValue() {
        alert(this.movies.widget.value());
    }

    getText() {
        alert(this.movies.widget.text());
    }

    setValue(val) {
        this.movies.widget.value(val);
    }

    setIndex(val) {
        var index = parseInt(val);
        this.movies.widget.select(index);
    }

    setSearch(val) {
        this.movies.widget.search(val);
    }
}
