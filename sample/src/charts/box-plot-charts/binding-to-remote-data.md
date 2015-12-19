The Kendo UI chart supports binding to remote data via RESTful services.

For remote data binding you need to specify a remote endpoint or web service returning data in JSON/JSONP format and utilize the DataSource in-between the chart and the underlying data. To make the connection to the remote endpoint and process the data properly, the data source needs information about the web service URL(s), the request type, the response data type, and the structure (schema) of the response, in case it is more complex than a plain array of objects.

In this example the chart fetches its data from a remote endpoint assigned via the DataSource read configuration. You can find more information about the data-binding capabilities of the Kendo UI chart in this [help article](http://docs.telerik.com/kendo-ui/dataviz/chart/data-binding).
