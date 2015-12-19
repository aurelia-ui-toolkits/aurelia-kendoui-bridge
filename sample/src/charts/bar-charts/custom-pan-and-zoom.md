In addition to the built-in pan and zoom functionality, the Kendo UI chart supports custom panning and zooming as well.

This example represents a custom implementation wiring the drag, dragEnd and zoom events of the chart. The idea is to intercept when these events are raised and fetch the data that has to be visualized in the chart, using a dynamical query by invoking the [query method](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource#methods-query) of the chart data source. Review the code snippets in the demo for more details.
