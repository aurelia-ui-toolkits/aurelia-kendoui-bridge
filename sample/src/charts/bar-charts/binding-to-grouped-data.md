The Kendo UI chart can be bound to a grouped data by using [Kendo UI DataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) as a mediator. To do so follow the steps below:

1. Bind the chart to a [Kendo UI DataSource instance](http://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/chart#configuration-dataSource).
2. Set the [DataSource.group.field property](http://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/chart#configuration-dataSource) to the name of the column in the underlying data which will be the criteria for grouping the chart series items into series (symbol in this example)
3. Bind the series.field setting to the “close” field in the underlying data source
4. Bind the categoryAxis.field attribute to the "date" field in the source

This will result in as many series as the number of distinct values in the column (i.e., DataSource.group.field). For each value there will be chart series in the chart.
