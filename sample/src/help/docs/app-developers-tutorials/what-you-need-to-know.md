
<br>

## 7. What you need to know
<br>
There are a few things you should know when working with the aurelia-kendoui-bridge.
<br>
<br>
#### Conventions
Just like Aurelia, we use conventions. All our custom elements and custom attributes use the `k-` and `k-on-` conventions.

For example, the [kendo API documentation](http://docs.telerik.com/kendo-ui/api/javascript/ui/button#configuration-enable) of the Button control, mentions an `enable` property.

This translates into this HTML tag:

`<input k-button="k-enable.bind: true"/>`

Notice the `k-` convention for the attribute and for the property.
<br><br>

It is also possible to delegate Kendo events. We use the `k-on-` convention here.

To illustrate this, we'll take a look at the [open](http://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete#events-open) event of the Autocomplete control. This translates into:
<br><br>

	  <input k-autocomplete
	         k-on-open.delegate="myFunction($event.detail)">
<br><br>

Notice the `k-on-` prefix. The $event's detail property contains the original event raised by the Kendo control. In order to pass this to the `myFunction` function directly, we use `$event.detail`.
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

	<div k-progress-bar k-progress-bar.ref="progressBar"></div>
<br>

the `progressBar` variable is now a reference to the wrapper, not the original Kendo control. Every wrapper has a `kWidget` property, which can be used: `this.progressBar.kWidget`.
<br><br>

#### k-widget.two-way
An easier way would be to bind to the `k-widget`property:

	<input k-autocomplete="k-widget.two-way: autocomplete"/>
<br><br>

You can then use the `autocomplete` variable to communicate with the original Kendo widget.

**Note**: you have to use `.two-way` binding for now, there is a bug causing it not to work with `.bind`.

**IMPORTANT**: **the binding system has not finished in `attached()` causing the bound variable (`autocomplete` in the sample above) to be undefined. If you need to communicate with the widget from inside the `attached` or `bind` callback, use either the `view-model.ref` approach or use the taskque (sample below).**
<br><br>

#### Taskqueue


	import {TaskQueue, inject} from 'aurelia-framework';

	@inject(TaskQueue)
	export class Sample {
		constructor(taskQueue) {
			this.taskQueue = taskQueue;
		}

		attached() {
			this.taskQueue.queueTask(() => {
			  this.autocomplete.enable(false);
			});
		}
	}
<br>
<br>

### Current limitations
&nbsp;&nbsp;- `k-widget` binding only works with explicit two-way databinding on input controls: [tracked here](https://github.com/aurelia/templating/issues/253)
