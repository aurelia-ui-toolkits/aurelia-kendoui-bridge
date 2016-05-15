
<br>

## 7. What you need to know
<br>
There are a few things you should know when working with the aurelia-kendoui-bridge.
<br>
<br>
#### Conventions
Just like Aurelia, we use conventions. All our custom elements and custom attributes use the `ak-`, `k-` and `k-on-` conventions.

For example, the [kendo API documentation](http://docs.telerik.com/kendo-ui/api/javascript/ui/button#configuration-enable) of the Button control, mentions an `enable` property.

This translates into this HTML tag:

`<input ak-button="k-enable.bind: true" k-on-click.delegate="btnClicked($event.detail)"/>`

Notice the `ak-` convention for the attribute and `k-` for the property.
Events, like the `click` event shown above, use the `k-on-` convention.
The $event's detail property contains the original event raised by the Kendo control. In order to pass this to the `myFunction` function directly, we use `$event.detail`.
<br>
<br>
#### Binding
Using Aurelia's `.bind` syntax on a property allows it to do two things: binding to a variable and type parsing.
<br>

If you would use `k-visible="true"` without `.bind`, the `k-visible` property will contain the value of "true" (as string, not as boolean).
<br>

By adding `.bind` after the property name, it is parsed by Aurelia's binding syntax as a boolean, which is what we need. `k-visible.bind="true"` is the correct syntax. So for integers, strings and objects, use `.bind`.
<br><br>

A couple of examples:

	k-title="my string title"
	k-visible.bind="true"
	k-max-integer-value.bind="15"
	k-type.bind="{ name: 'a' }"
	k-title.bind="aPropertyOnMyViewModel"
	k-my-array-value.bind="['a', 'b']"
<br>
<br>
### How to get to the original Kendo control

There are two ways to get a reference of the original Kendo control: via `view-model.ref` and via the `k-widget` property.
<br><br>

#### view-model.ref
**Note**: For custom elements use `view-model.ref` and for custom attributes use the name of the attribute with `.ref` as suffix:
<br>

	<div ak-progress-bar ak-progress-bar.ref="progressBar"></div>
<br>

the `progressBar` variable is now a reference to the wrapper, **not the actual Kendo control instance.**
<br><br>

#### k-widget.two-way
An easy way to get to the Kendo control instance would be to bind to the `k-widget` property:
```
<ak-autocomplete k-widget.two-way="autocomplete">
  <input/>
</ak-autocomplete>
```
<br><br>

You can then use the `autocomplete` variable to communicate with the Kendo Autocomplete widget instance.

**IMPORTANT**: **the binding system has not finished in `attached()` causing the bound variable (`autocomplete` in the sample above) to be undefined. If you need to communicate with the widget from the `attached` callback, take a look at [this sample](#/samples/generic/use-widget-on-initialization)**
<br><br>
