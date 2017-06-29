export class Test {
  toolbar = {
    position: 'right',
    tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
  };

  datasource = {
    transport: {
      read: {
        dataType: 'jsonp',
        url: 'https://demos.telerik.com/kendo-ui/service/Customers'
      }
    }
  };

  draggable = {
    placeholder: function(draggedItem) {
      return draggedItem
        .clone()
        .addClass('custom-placeholder')
        .removeClass('k-ghost');
    }
  }
}