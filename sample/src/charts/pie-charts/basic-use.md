The Kendo UI chart is a data visualization widget which allows you to output a graphical representation of your data. It is useful when you would like to utilize modern browser technologies such as SVG or Canvas  for interactive data visualizations. The chart supports various chart types such as area, bar, line, scatter, pie and donut, etc. as well as stock (OHLC).


Area chart type is suitable for displaying quantitative data as continuous lines that pass through points defined by their items' values. The portion of the graph beneath the lines is filled with a particular color for each series. The different colors in an Area chart are useful for emphasizing changes in values from several sets of similar data.


To instantiate a Kendo UI chart, you need to specify an empty div with an id on the page, select this div with a jQuery selector and invoke the kendoChart() function. As a result, the chart is registered as a standard jQuery plugin.


The chart can fetch data for its series from either local or remote data source. It can also use the Kendo UI DataSource as a mediator for processing data.
