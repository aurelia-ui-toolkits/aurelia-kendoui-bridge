export class Editing {
  connectionsDataSource = {
    batch: false,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramConnections',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramConnections/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramConnections/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramConnections/Create',
        dataType: 'jsonp'
      },
      parameterMap: (options, operation) => {
        if (operation !== 'read') {
          return { models: kendo.stringify(options.models || [options]) };
        }
      }
    },
    schema: {
      model: {
        id: 'id',
        fields: {
          id: { from: 'Id', type: 'number', editable: false },
          from: { from: 'FromShapeId', type: 'number' },
          to: { from: 'ToShapeId', type: 'number' },
          fromX: { from: 'FromPointX', type: 'number' },
          fromY: { from: 'FromPointY', type: 'number' },
          toX: { from: 'ToPointX', type: 'number' },
          toY: { from: 'ToPointY', type: 'number' }
        }
      }
    }
  };

  shapesDataSource = {
    batch: false,
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramShapes',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramShapes/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramShapes/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/DiagramShapes/Create',
        dataType: 'jsonp'
      },
      parameterMap: (options, operation) => {
        if (operation !== 'read') {
          return { models: kendo.stringify(options.models || [options]) };
        }
      }
    },
    schema: {
      model: {
        id: 'id',
        fields: {
          id: { from: 'Id', type: 'number', editable: false },
          JobTitle: { type: 'string' },
          Color: { type: 'string' }
        }
      }
    }
  };

  visualTemplate(options) {
    let dataviz = kendo.dataviz;
    let g = new dataviz.diagram.Group();
    let dataItem = options.dataItem;

    if (dataItem.JobTitle === 'President') {
      g.append(new dataviz.diagram.Circle({
        radius: 60,
        stroke: {
          width: 2,
          color: dataItem.Color || '#586477'
        },
        fill: '#e8eff7'
      }));
    } else {
      g.append(new dataviz.diagram.Rectangle({
        width: 240,
        height: 67,
        stroke: {
          width: 0
        },
        fill: '#e8eff7'
      }));

      g.append(new dataviz.diagram.Rectangle({
        width: 8,
        height: 67,
        fill: dataItem.Color,
        stroke: {
          width: 0
        }
      }));
    }

    return g;
  }

  constructor() {
    this.shapeDefaults = {
      visual: this.visualTemplate,
      content: {
        template: '#= dataItem.JobTitle #',
        fontSize: 17
      }
    };
  }

  onDataBound(e) {
    setTimeout(() => {
      this.diagram.bringIntoView(this.diagram.shapes);
    }, 0);
  }
}
