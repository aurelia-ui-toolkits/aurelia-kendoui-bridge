export class BasicUse {
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

  onChange(e) {
    let gantt = e.sender;
    let selection = gantt.select();

    if (selection.length) {
      let dataItem = gantt.dataItem(selection);
      this.logger.log('Gantt selection change :: ' + dataItem.title);
    }
  }

  onAdd(e) {
    this.logger.log('Task added');
  }

  onEdit(e) {
    this.logger.log('Task about to be edited :: ' + e.task.title);
  }

  onCancel(e) {
    this.logger.log('Cancel task edit :: ' + e.task.title);
  }

  onRemove(e) {
    this.logger.log('Task removed :: ' + e.task.title);
  }

  onSave(e) {
    this.logger.log('Task saved :: ' + e.task.title);
  }

  onDataBound() {
    this.logger.log('Gantt data bound');
  }

  onDataBinding() {
    this.logger.log('Gantt data binding');
  }

  onNavigate(e) {
    this.logger.log(kendo.format('navigate:: view:{0};', e.view));
  }

  onMoveStart(e) {
    this.logger.log('moveStart');
  }

  onMove(e) {
    this.logger.log('move');
  }

  onMoveEnd(e) {
    this.logger.log('moveEnd');
  }

  onResizeStart(e) {
    this.logger.log('resizeStart');
  }

  onResize(e) {
    this.logger.log('resize');
  }

  onResizeEnd(e) {
    this.logger.log('resizeEnd');
  }
}
