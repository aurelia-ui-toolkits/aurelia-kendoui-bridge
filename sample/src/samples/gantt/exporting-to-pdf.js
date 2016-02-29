export class ExportingToPDF {
  pdf = {
    fileName: 'Kendo UI Gantt Export.pdf',
    proxyURL: '//demos.telerik.com/kendo-ui/service/export'
  };
  tasksDataSource = new kendo.data.GanttDataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/GanttTasks',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/GanttTasks/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/GanttTasks/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/GanttTasks/Create',
        dataType: 'jsonp'
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read') {
          return { models: kendo.stringify(options.models || [options]) };
        }
      }
    },
    schema: {
      model: {
        id: 'id',
        fields: {
          id: { from: 'ID', type: 'number' },
          orderId: { from: 'OrderID', type: 'number', validation: { required: true } },
          parentId: { from: 'ParentID', type: 'number', defaultValue: null, validation: { required: true } },
          start: { from: 'Start', type: 'date' },
          end: { from: 'End', type: 'date' },
          title: { from: 'Title', defaultValue: '', type: 'string' },
          percentComplete: { from: 'PercentComplete', type: 'number' },
          summary: { from: 'Summary', type: 'boolean' },
          expanded: { from: 'Expanded', type: 'boolean', defaultValue: true }
        }
      }
    }
  });

  dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/GanttDependencies',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/GanttDependencies/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/GanttDependencies/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/GanttDependencies/Create',
        dataType: 'jsonp'
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read') {
          return { models: kendo.stringify(options.models || [options]) };
        }
      }
    },
    schema: {
      model: {
        id: 'id',
        fields: {
          id: { from: 'ID', type: 'number' },
          predecessorId: { from: 'PredecessorID', type: 'number' },
          successorId: { from: 'SuccessorID', type: 'number' },
          type: { from: 'Type', type: 'number' }
        }
      }
    }
  });
}
