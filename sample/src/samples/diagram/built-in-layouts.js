export class BuiltInLayouts {

  subtype = 'down';

  constructor() {
    this.shapeDefaults = { visual: this.visualTemplate };

    this.dataSource = new kendo.data.HierarchicalDataSource({
      data: this.diagramNodes(),
      schema: {
        model: {
          children: 'items'
        }
      }
    });
  }

  diagramNodes() {
    let root = { name: '0', items: [] };
    this.addNodes(root, [3, 2, 2]);
    return [root];
  }

  addNodes(root, levels) {
    if (levels.length > 0) {
      for (let i = 0; i < levels[0]; i++) {
        let node = { name: '0', items: [] };
        root.items.push(node);

        this.addNodes(node, levels.slice(1));
      }
    }
  }

  subtypeChanged() {
    this.diagram.layout({
      subtype: this.subtype,
      type: 'tree',
      horizontalSeparation: 30,
      verticalSeparation: 20
    });
  }
}
