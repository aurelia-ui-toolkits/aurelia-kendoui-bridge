<br>

### 8. Harvesting bindable variables
<br>

In order to reduce the amount of code we have to write per wrapper, we use the `@generateBindables` decorator introduced in the **[Generation of bindable properties](#/help/docs/bridge_developers_notes/3._generation_of_bindables)** note. This decorator generates `@bindable` properties based on a list of strings, which is actually a list of properties that each Kendo control supports. So we need to maintain a list of possible properties per Kendo control.
<br><br>

![image](https://i.imgur.com/OD02UDd.png)

<br><br>

We currently use two different techniques to "harvest" possible properties so they can be generated using the `@generateBindables` decorator.
<br>

1. properties from the `options` object inside each Kendo control
2. properties from the typescript definitions
<br>

In order to get the most accurate list of supported properties possible, we combine these two lists of properties into a single list. We pass this list to the `@generateBindables` decorator, which generates `@bindable` properties for us in a wrapper.
<br><br>

#### 8.1 Properties from the `options` object inside each Kendo control
<br>
The first list of possible properties for a Kendo control is retrieved from the `options` object which is inside every Kendo control. It is possible to get to this object by running `jQuery.fn["kendoChart"].widget.prototype.options`. Note that the name of any Kendo control can be used here, but kendoChart is used to display the output. This statement returns us the following object:
<br>

![image](https://i.imgur.com/Q7tmuTn.png)
<br>

This object contains both keys (`autoBind`, `categoryAxis`) and values (`true`, ` "chart"`). We only care about the keys of this object, which gives us a list of properties that the Kendo control allows. However, this list is not always complete, so we need to augment this list with some other source.
<br><br>
#### 8.2 Properties from the typescript definitions
<br>
Telerik maintains [typescript definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/kendo-ui/kendo-ui.d.ts) which contains interface definitions, that in turn contains a list of available properties for a control:
<br>
![image](https://i.imgur.com/ajTUzqm.png)

<br><br>

#### Merge

At this point we have two lists of available properties for a Kendo control, one extracted from the `options` object inside each Kendo control, and one from the Kendo typescript definitions. We merge these two lists together into one list that is most accurate. This list gets passed onto the `@generateBindables` decorator which creates bindable properties based on this list.