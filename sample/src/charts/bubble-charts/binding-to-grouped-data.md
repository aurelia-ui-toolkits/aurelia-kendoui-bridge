The Kendo UI chart widget can be bound to grouped data using [Kendo UI DataSource]9http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) as a mediator. To do so follow the steps below:

1.Bind the chart to a [Kendo UI DataSource instance.](http://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/chart#configuration-dataSource)

2.Set the [DataSource.group.field](http://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/chart#configuration-dataSource) property to the name of the column (e.g., the “country” field) in the underlying data which will be the criteria for grouping the chart series items into series

3.Bind the xField, yField and sizeField values of the series to **the year, standing and number** fields
