<br>

### 3. Generation of bindable properties
<br>

Before discovering the optimization described in this note, Aurelia-KendoUI control wrappers had this "classic" form shown below (using KendoUI button control as the model). The pattern consists of enumerating all control attributes that we want to expose to the view, decorate them with the @bindable decorator and made them available to the view via `return Object.assign({}, this.options, options);` statement

<br>

```
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

  @bindable enable = true;
  @bindable icon;
  @bindable imageUrl;
  @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
  }
}
```
<br> <br>

After we had made a couple of these wrappers, some patterns started to emerge. We noticed that almost all bindable properties had to be passed to the Kendo's (native) control. We also wanted to see if these bindable properties could be generated somehow, because looking them up in Telerik's docs, and setting the correct default value was a hassle, took a lot of time, and resulted in a few avoidable errors.
<br><br>

We looked at how the **[Angular-Kendo implementation](http://docs.telerik.com/kendo-ui/AngularJS/introduction)** did this, and found that each Kendo control has an `options` object, containing all supported properties and their default values. For example, when you run `kendo.ui.Button.prototype.options` in your Chrome's console, this is the result:
<br>

![Imgur](http://i.imgur.com/FtCMiyc.png)

Every Kendo control (class) has this options object defined within. We can iterate over the properties of this object, and create a bindable property for each one. But before we dive into that part, let's take a look at other ways to get to this object. In our wrappers, we initialized the kendo control via `$(div).kendoButton()` or `$(div).kendoGrid()`. So, we wanted to get the properties of a Kendo control via `kendoGrid` or `kendoButton`.
<br><br>

Luckily this was possible with this syntax: `jQuery.fn[controlName].widget.prototype.options` where controlName is 'kendoGrid' or 'kendoButton' or any other Kendo control. The result is the same, it is an object with properties that we can iterate over.

**Note:** More about this process can be found in **[Harvesting bindable variables](#/help/docs/bridge_developers_notes/8._harvesting_bindable_variables)**
<br><br>

Now, instead of using the `@bindable` property decorator, we needed to generate bindable properties from code. The old syntax was this: `@bindable kEnable = true;`. This is a [class field](https://github.com/jeffmo/es-class-fields-and-static-properties#es-class-fields--static-properties) named `kEnable`, with a default value of `true`, and made bindable by the `@bindable` decorator.
<br><br>

Because we wanted to do this dynamically, we had to look at the implementation of the bindable decorator, and possibly create our own. We found the decorator in the `decorators.js` file of the `aurelia-templating` repository. It looks like this:
<br><br>

```javascript
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let controlProperties = (Container.instance || new Container()).get(ControlProperties);
    let optionKeys = controlProperties.getProperties(controlName);

    optionKeys.push('widget');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
      }

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
```
<br>

Now, we extracted the most important parts of this decorator implementation, and it turned out to be quite simple to create a bindable property from any decorator:
<br><br>

```
let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
let nameOrConfigOrTarget = { name: 'myBindablePropertyName' };
prop = new BindableProperty(nameOrConfigOrTarget);
return prop.registerWith(target, behaviorResource, descriptor2);
```
<br>

That's all you need to create a bindable property. Now that we knew this was possible, we started on our own decorator that would generate all bindables for us. We needed to pass along 'kendoGrid' or 'kendoButton' so that the decorator could look up the properties it needs to generate. We called it `generateBindables` and could use it like this:
<br><br>

```
@customAttribute('au-kendo-button')
@generateBindables('kendoButton')
@inject(Element)
export class AuKendoButton {

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
  }
}
```
<br>

Note, the `@bindable` property declarations are gone, and the `@generateBindables()` decorator is used instead. Our full implementation of this decorator can be found [here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/blob/master/src/common/decorators.js).

<br><br>

**Note:** see the **[Harvesting bindable variables](#/help/docs/bridge_developers_notes/8._harvesting_bindable_variables)** note for more information on the "Generation of bindable properties" subject.

* * *
