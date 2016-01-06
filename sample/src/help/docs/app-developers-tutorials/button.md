<br>

### 4. Button
<br>

##### File k-button.html

```html
<template>
    <require from="./k-button.css"></require>
    <section>
        <br>
        <h3>Basic KendoUI Button API sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/button">See KendoUI Bridge button folder for more details</a>
        <br>
        <br>

        <button k-button="k-enable.bind: enabled; k-icon: ungroup" k-on-click.trigger="test()">Kendo UI Button</button>
        <br>
        <br>
        <button k-button click.delegate="disable()">Disable</button>
        &nbsp;&nbsp
        <button k-button click.delegate="enable()">Enable</button>

    </section>
</template>
```

<br>

##### File k-button.js

```javascript
export class ButtonApi {
    enabled = true;

    disable() {
      this.enabled = false;
    }

    enable() {
      this.enabled = true;
    }

    test() {
      alert('You clicked me');
    }
}
```

<br>


##### File k-button.css

```
.demo-section {
    text-align: center;
}
.box .k-textbox {
    margin: 0;
    width: 80px;
}
```

<br>
* * *
<br>
#### Next page: [Chart component](http://localhost:3000/#/help/docs/app_developers_tutorials/5._chart_component)

