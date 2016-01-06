<br>

### 3. Autocomplete
<br>

##### File k-autocomplete.html


```html
<template>
  <section>
        <br>
        <h3>Basic KendoUI Autocomplete sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/autocomplete">See KendoUI Bridge autocomplete folder for more details</a>
        <br>
        <br>

        <p><strong>People:</strong></p>
        <input k-autocomplete="k-data-source.bind: items;" style="width: 300px;">
        <br>
        <br>
        <br>
        <p class="demo-hint" style="word-break: break-all">Type a name, available values in the list are: ${ items } </p>
  </section>
</template>
```
<br>
<br>

##### File k-autocomplete.js

```javascript
export class BasicUse {
  items = [
    'Charles',
    'Jedd',
    'Nikolaj',
    'Jeroen',
    'David',
    'Rob',
    'Matt',
    'Patrick',
    'Jason',
    'Martin',
    'Fredrick',
    'Alex'
  ]
}
```

<br>
<br>

* * *
<br>
#### Next page: [Button component](http://localhost:3000/#/help/docs/app_developers_tutorials/4._button_component)

