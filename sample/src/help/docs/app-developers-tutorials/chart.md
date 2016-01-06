<br>

### 5. Chart
<br>

##### File k-chart.html

```html
<template>
    <section>
        <br>
        <h3>Basic KendoUI Chart sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/chart">See KendoUI Bridge chart folder for more details</a>
        <br>
        <br>

        <k-chart    k-title.bind="{text: 'Gross Domestic product growth \n /GDP annual %/'}"
                    k-legend.bind="{position: 'bottom'}"
                    k-series-defaults.bind="seriesDefaults"
                    k-series.bind="series"
                    k-value-axis.bind="valueAxis"
                    k-category-axis.bind="categoryAxis"
                    k-tooltip.bind="tooltip">
        </k-chart>
    </section>
</template>
```
<br>


##### File k-chart.js

```javascript
export class BasicUse {

  seriesDefaults = {
    type: 'line',
    line: {
      line: {
        style: 'smooth'
      }
    }
  };

  series = [{
    name: 'India',
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: 'World',
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }, {
    name: 'Haiti',
    data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    },
    axisCrossingValue: -10
  };

  categoryAxis = {
    categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
    majorGridLines: {
      visible: false
    },
    labels: {
      rotation: 'auto'
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${series.name} ${value}'
  }
}
```
<br>
* * *
<br>
#### Next page: [Grid component](http://localhost:3000/#/help/docs/app_developers_tutorials/6._grid_component)

