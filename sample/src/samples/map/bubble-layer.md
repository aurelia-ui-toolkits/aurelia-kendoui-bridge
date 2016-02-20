### Templates

Unfortunately, Kendo does not ask "angular" to compile templates when the `kendo.template()` function is used. This means that Aurelia templates can't be used for the situations that use `kendo.template()`.


This retrieves the template from the `<script>` tag:
`this.emptyInfoTemplate.innerHTML`

Passing this template to `kendo.template()` returns a function that can be called :

`let template = kendo.template(this.emptyInfoTemplate.innerHTML);`

And you can pass an object when calling this function:

`let result = template({ Some: 'variable' })`

The result is HTML which you can put in the DOM:

`this.myDiv.innerHTML = result;`
