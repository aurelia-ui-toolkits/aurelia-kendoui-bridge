#HTML API of Kendo Grid

### How is the Kendo Grid used?

Before we can explain how it works, we must first look at how it is used.

The Kendo Grid can be used and configured via the following section of HTML code - (process known as declarative programming:


    <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
      <au-col title="Contact Name" field="ContactName">
        <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
        <div class='customer-name'>${ContactName}</div>
      </au-col>
      <au-col title="Contact Name" field="ContactName"></au-col>
      <au-col title="Contact Title" field="ContactTitle"></au-col>
      <au-col title="Company Name" field="CompanyName"></au-col>
      <au-col field="Country"></au-col>
    </k-grid>

This is the **[Basic use](http://aurelia-ui-toolkits.github.io/demo-kendo/#/samples/grid/basic-use)** sample.
<br>
<br>
**What are we looking at here?**

We see two custom elements: `k-grid` and `au-col`. The `au-col` custom elements are inside of the `k-grid` custom element, making the `au-col` custom elements "children" of the `k-grid` custom element.

Both custom elements have some `@bindable` properties available, such as `k-data-source`, `title` and `command`. A bindable property is a property inside a view-model marked with the `@bindable` decorator. The `title` property is defined as `@bindable title`. Because of the `@bindable` decorator, we can now set these properties from HTML: `<k-grid k-title="my value"></k-grid>`, and respond to changes of these properties when needed.

The `au-col` custom element is a bit special, as it has a template defined within. Let's look at this more closely:


	<au-col title="Contact Name" field="ContactName">
		<div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
		<div class='customer-name'>${ContactName}</div>
	</au-col>


This `au-col` has three properties: **`title`**, **`field`** and **`template`**, where the **`title`** and **`field`** are  easy to spot, but the **`template`** is somewhat hidden. The `template` property is extracted by the `<au-col>` custom element from its inner content (innerHTML). 

### How does the au-col extract the template?
Let's take a look at the code of the [au-col custom element](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/master/src/grid/au-col.js). 

We use the `@bindable` properties, to configure them via attributes on the custom element. If we use `<au-col title="Contact Name" field="ContactName">`, then Aurelia sets the `title` property on the `au-col` view-model to "Contact Name" and the `field` property to "ContactName".

Now, how does it extract the template? This magic happens inside of the `@processContent` decorator. 

Aurelia's docs explain the @processContent decorator as follows: 
> The @processContent tells the compiler that the element's content requires special processing.

Basically, the `@processContent` decorator allows us to process the content of the custom element before anything else has happened to it. The implementation looks like this:


	@processContent((compiler, resources, element, instruction) => {
	  let html = element.innerHTML;
	  if (html !== '') {
	    instruction.template = html;
	  }
	
	  return true;
	})


The `@processContent` decorator passes us a few arguments we can use inside of the callback function. The things we care about are `element` and `instruction`. The `element` is the HTML tag of our custom-element, so in this case, `<au-col>`. It's the same thing as when you `@inject(Element)`. The `instruction` is a [BehaviorInstruction](http://aurelia.io/docs.html#/aurelia/templating/1.0.0-beta.1.0.1/doc/api/class/BehaviorInstruction). All you need to know is that this object is shared by both the `@processContent` and the actual view-model (`AuCol`). So, this means that we can **define properties** on this object from within the `@processContent` function, and access it from inside the view-model.

In our implementation of the `@processContent` function, we take the `innerHTML` of the `<au-col>` element, and put this in the `template` property of the `instruction`. We could have chosen any property name, but we chose the name **`template`**.

Now, in order for us to pull this `template` property of the [`instruction`](#instruction) inside the view-model, we need to inject the `TargetInstruction`, as shown below:

	@inject(TargetInstruction)
	export class AuCol {
	  @bindable title;
	  @bindable field;
	  template;
	
	  constructor(targetInstruction) {
	    this.template = targetInstruction.elementInstruction.template;
	  }
	}

The `targetInstruction` has an `elementInstruction` atttribute which contains the `template` we set inside the `@processContent` function. So now we can use just HTML to define all the column properties we need to pass onto Kendo's grid control! Great!

Now before we go on, let's take a look at `return true;` at the end of the `@processContent` function. What does this do? It tells Aurelia that we have handled content processing, and that no further processing should be done. This effectively removes the content of the custom element, and this is exactly what we want, because we don't want to see the template on the screen. We just want to store the template as a property of the AuClass, so we can pass this onto Kendo's grid.

### How does the `k-grid` element get to the properties of the `au-col` elements?

Let's take a step back, and look at the usage of the Grid control one more time:

    <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
      <au-col title="Contact Name" field="ContactName">
        <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
        <div class='customer-name'>${ContactName}</div>
      </au-col>
      <au-col title="Contact Name" field="ContactName"></au-col>
      <au-col title="Contact Title" field="ContactTitle"></au-col>
      <au-col title="Company Name" field="CompanyName"></au-col>
      <au-col field="Country"></au-col>
    </k-grid>

We said that all the `au-col` custom elements are "children" of the `<k-grid>` custom element. What we want is to reach all view-models behind the `au-col` elements, from within the view-model of the `<k-grid>`. Aurelia's got us covered. We need to do something else first though.

Since the `k-grid` custom element now has content, it has now become a view. For Aurelia to recognize this, in addition to the `grid.js` view-model, we need to create a `grid.html` file (see [Creating Components](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.3/doc/article/creating-components) article for more details). In this file, we define the following:
	
	<template>
	  <content></content>
	</template>

Notice the use of the `<content>` tag. This tells Aurelia to put the content of the `<k-grid>` tag, at that place in the view. More information about the `<content>` tag, can be found [here](http://patrickwalters.net/wielding-the-power-of-aurelia-content-selectors/).

Now we got this out of our way, we can get back to our problem. From inside the `Grid` view-model, we want to get the properties on the view-model's of all `<au-col>` custom elements. Luckily, Aurelia has made a nice decorator for this: `@children`. It is used as follows:

	@customElement('k-grid')
	export class Grid {
	
	  @children('au-col') columns; 
	
	}

That's it! The `Grid` class now has a `columns` property, containing all the view-models of all the `au-col` custom elements, as an array. The `'au-col'` bit is a css selector, so it is pretty powerful. 

### How are we communicating the column definitions to Kendo's Grid?

Now, if we would use Kendo Grid without Aurelia, the columns would be configured like this:

	$("#grid").kendoGrid({
	  columns: [
	     {
	      title: "Contact Name",
	      field: "ContactName",
	      template: '<div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
	        <div class='customer-name'>${ContactName}</div>'
	     },
	     {
	      title: "Contact Name",
	      field: "ContactName",
	     },
	     {
	      title: "Contact Title",
	      field: "ContactTitle",
	     },
	     {
	      title: "Company Name",
	      field: "CompanyName",
	     },
	     {
	      field: "Country",
	     }]
	});

If you remember, all these properties (title, field, template) are defined inside the view-model's of the `au-col` custom elements. Because we have the lovely `@children` decorator, all these view-models are available in the `columns` property of the `Grid`. So, we can just pass this array in when we initialize the grid!

```
$("#grid").kendoGrid({
  columns: this.columns
});
```

And there we have it, Kendo's Grid now knows about the columns we want to see, configured purely via HTML.

### High level overview
Let's take a look (at a high level) at the process.

The developer uses this piece of HTML code:

    <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
      <au-col title="Contact Name" field="ContactName">
        <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
        <div class='customer-name'>${ContactName}</div>
      </au-col>
      <au-col title="Contact Name" field="ContactName"></au-col>
      <au-col title="Contact Title" field="ContactTitle"></au-col>
      <au-col title="Company Name" field="CompanyName"></au-col>
      <au-col field="Country"></au-col>
    </k-grid>

The `AuCol` class uses `@processContent` to "extract" the template which can be found in the content of the `<au-col>` custom element, and the `AuCol` class also stores the `title` and `field` properties.

The `k-grid` custom element, uses `@children` to get an array of all these `AuCol` instances, which contain the `title`, `field` en `template` properties.

When Kendo's Grid gets initialized, this array of `AuCol` instances is passed along. In essence, Kendo's Grid is now initialized as follows:

	$("#grid").kendoGrid({
	  columns: [
	     {
	      title: "Contact Name",
	      field: "ContactName",
	      template: '<div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
	        <div class='customer-name'>${ContactName}</div>'
	     },
	     {
	      title: "Contact Name",
	      field: "ContactName",
	     },
	     {
	      title: "Contact Title",
	      field: "ContactTitle",
	     },
	     {
	      title: "Company Name",
	      field: "CompanyName",
	     },
	     {
	      field: "Country",
	     }]
	});

Notice how we use Aurelia's binding syntax inside the template? How we compile this template is can be better explained in a different article.