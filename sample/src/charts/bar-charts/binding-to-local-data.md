The Kendo UI chart can be instructed to display data from local data storage via its data source property configuration. This is possible because of its built-in data-binding capabilities. In the example above the data for the chart is defined via a JSON array and assigned to the chart via the dataSource data attribute. Thus the chart fetches the data and displays its series and categoryAxis values by setting their field properties to match the relevant data items attribute names in the source.

To instantiate a Kendo UI chart, you need to specify an empty div with an id on the page, select this div with a jQuery selector and invoke the kendoChart() function. As a result, the chart is registered as a standard jQuery plugin.

Additional information about how to utilize the data-binding capabilities of the Kendo UI chart widget can be found in [this section](http://docs.telerik.com/kendo-ui/dataviz/chart/data-binding) of the product documentation.
