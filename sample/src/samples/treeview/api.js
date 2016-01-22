export class API {
  constructor() {
    this.data = [
      { text: 'Item 1', expanded: true, items: [
        { text: 'Item 1.1' },
        { text: 'Item 1.2' },
        { text: 'Item 1.3' }]
      },
      { text: 'Item 2', items: [
        { text: 'Item 2.1' },
        { text: 'Item 2.2' },
        { text: 'Item 2.3' }]
      },
      { text: 'Item 3' }
    ];

    this.appendNodeText = '';
    this.filterText = '';
    this.ascending = false;
  }

  expandAllNodes() {
    this.treeview.expand('.k-item');
  }

  collapseAllNodes() {
    this.treeview.collapse('.k-item');
  }

  disableNode() {
    let selectedNode = this.treeview.select();
    this.treeview.enable(selectedNode, false);
  }

  enableAllNodes() {
    this.treeview.select();
    this.treeview.enable('.k-item');
  }

  appendNodeToSelected() {
    let selectedNode = this.treeview.select();
    this.treeview.append({ text: this.appendNodeText }, selectedNode);
  }

  removeNode() {
    let selectedNode = this.treeview.select();
    this.treeview.remove(selectedNode);
  }

  sort() {
    this.treeview.dataSource.sort({
      field: 'text',
      dir: this.ascending ? 'asc' : 'desc'
    });

    this.ascending = !this.ascending;
  }

  filterByText() {
    if (this.filterText !== '') {
      this.treeview.dataSource.filter({
        field: 'text',
        operator: 'contains',
        value: this.filterText
      });
    } else {
      this.treeview.dataSource.filter({});
    }
  }
}
