export class Api {

    getItem(target) {
      let itemIndexes = target.val().split(/[.,]/);
      let rootItem = this.panelBar.element.children('li').eq(itemIndexes[0]);

      return itemIndexes.length > 1 ?
          rootItem.find('.k-group > .k-item').eq(itemIndexes[1]) :
          rootItem;
    }
    select(e) {
      if (e.type !== 'keypress' || kendo.keys.ENTER === e.keyCode) {
        this.panelBar.select(this.getItem($('#selectIndex')));
      }
    }

    append(e) {
      if (e.type !== 'keypress' || kendo.keys.ENTER === e.keyCode) {
        this.panelBar.append({
          text: $('#appendText').val()
        }, this.panelBar.select());
      }
    }
    before(e) {
      if (e.type !== 'keypress' || kendo.keys.ENTER === e.keyCode) {
        this.panelBar.insertBefore({
          text: $('#beforeText').val()
        }, this.panelBar.select());
      }
    }
    after(e) {
      if (e.type !== 'keypress' || kendo.keys.ENTER === e.keyCode) {
        this.panelBar.insertAfter({
          text: $('#afterText').val()
        }, this.panelBar.select());
      }
    }

    toggleItem() {
      let item = this.panelBar.select();
      this.panelBar.enable(item, item.hasClass('k-state-disabled'));
    }

    triggerItem() {
      let item = this.panelBar.select();

      if (item.hasClass('k-state-active')) {
        this.panelBar.collapse(item);
      } else {
        this.panelBar.expand(item);
      }
    }

    removeItem() {
      this.panelBar.remove(this.panelBar.select());
    }
}
