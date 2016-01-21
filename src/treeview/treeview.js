import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.treeview.min';

@customAttribute('k-treeview')
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase)
export class TreeView {

    @bindable options = {};

    constructor(element, widgetBase) {
      widgetBase.linkViewModel(this, element, 'kendoTreeView');

      // kendo tree view has a wrong default value for the dataSource
      this.kDataSource = undefined;
    }

    bind() {
      this.widgetBase.createWidget(this.element);
    }

    append(nodeData, parentNode, success) {
      if (this.widget) {
        return this.widget.append(nodeData, parentNode, success);
      }
    }

    collapse(nodes) {
      if (this.widget) {
        this.widget.collapse(nodes);
      }
    }

    dataItem(node) {
      if (this.widget) {
        return this.widget.dataItem(node);
      }
    }

    destroy() {
      if (this.widget) {
        this.widget.destroy();
      }
    }

    detach(node) {
      if (this.widget) {
        return this.widget.detach(node);
      }
    }

    enable(nodes, enable) {
      if (this.widget) {
        return this.widget.enable(nodes, enable === undefined ? true : enable);
      }
    }

    expand(nodes) {
      if (this.widget) {
        this.widget.expand(nodes);
      }
    }

    expandPath(path, complete) {
      if (this.widget) {
        this.widget.expandPath(path, complete);
      }
    }

    expandTo(targetNode) {
      if (this.widget) {
        this.widget.expandTo(targetNode);
      }
    }

    findByText(text) {
      if (this.widget) {
        return this.widget.findByText(text);
      }
    }

    findByUid(text) {
      if (this.widget) {
        return this.widget.findByUid(text);
      }
    }

    insertAfter(nodeData, referenceNode) {
      if (this.widget) {
        this.widget.insertAfter(nodeData, referenceNode);
      }
    }

    insertBefore(nodeData, referenceNode) {
      if (this.widget) {
        this.widget.insertBefore(nodeData, referenceNode);
      }
    }


    parent(node) {
      if (this.widget) {
        return this.widget.parent(node);
      }
    }

    remove(node) {
      if (this.widget) {
        this.widget.remove(node);
      }
    }

    select(node) {
      if (this.widget) {
        if (node === undefined) {
          return this.widget.select();
        }
        return this.widget.select(node);
      }
    }

    setDataSource(dataSource) {
      if (this.widget) {
        this.widget.setDataSource(dataSource);
      }
    }

    text(node, newText) {
      if (this.widget) {
        return this.widget.text(node, newText);
      }
    }


    toggle(node) {
      if (this.widget) {
        this.widget.toggle(node);
      }
    }


    updateIndeterminate(node) {
      if (this.widget) {
        this.widget.updateIndeterminate(node);
      }
    }
}
