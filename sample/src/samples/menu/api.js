export class Api {
  dataSource = [
    {
      text: 'First Item',
      items: [
        { text: 'Sub Item 1' },
        { text: '<strong>Sub Item 2</strong>', encoded: false },
        { text: 'Sub Item 3' },
        { text: 'Sub Item 4' }
      ]
    },
    {
      text: '<strong>Second Item</strong>',
      encoded: false,
      items: [
        { text: 'Sub Item 1' },
        { text: 'Sub Item 2' },
        { text: 'Sub Item 3' },
        { text: 'Sub Item 4' }
      ]
    },
    {
      text: '<strong>Third Item</strong>',
      encoded: false,
      items: [
        { text: 'Sub Item 1' },
        { text: 'Sub Item 2' },
        { text: 'Sub Item 3' },
        { text: 'Sub Item 4' }
      ]
    },
    {
      text: 'Fourth Item',
      cssClass: 'redText',
      items: [
        { text: 'Sub Item 1' },
        { text: '<strong>Sub Item 2</strong>', encoded: false },
        { text: 'Sub Item 3' },
        { text: 'Sub Item 4' }
      ]
    },
    {
      text: 'Fifth Item',
      items: [
        { text: 'Sub Item 1' },
        { text: 'Sub Item 2', cssClass: 'redText' },
        { text: 'Sub Item 3' },
        { text: 'Sub Item 4' }
      ]
    }
  ];

  getItem(target) {
    let itemIndexes = target.val().split(/[.,]/);
    let item = this.menu.element;

    if (itemIndexes[0] !== '') {
      for (let i = 0, len = itemIndexes.length; i < len; i++) {
        item = item.children('li').eq(itemIndexes[i]);
        if (i < len - 1) {
          item = item.find('ul:first');
        }
      }
    }

    return item;
  }

  toggleItem() {
    let item = this.getItem(kendo.jQuery('#toggleIndex'));
    this.menu.enable(item, item.hasClass('k-state-disabled'));
  }

  toggleTextItems() {
    let items = kendo.jQuery(this.menuDiv).find('.k-link:contains(Sub Item 3)').parent();
    this.menu.enable(items, items.hasClass('k-state-disabled'));
  }

  toggleStrongItems() {
    let items = kendo.jQuery(this.menuDiv).find(':has(> strong)').parent();
    this.menu.enable(items, items.hasClass('k-state-disabled'));
  }

  toggleRedTextItems() {
    let items = kendo.jQuery(this.menuDiv).find('.redText');
    this.menu.enable(items, items.hasClass('k-state-disabled'));
  }

  removeItem() {
    this.menu.remove(this.getItem(kendo.jQuery('#removeIndex')));
  }

  appendItem() {
    this.menu.append({
      text: kendo.jQuery('#appendText').val()
    }, this.getItem(kendo.jQuery('#appendIndex')));
  }

  beforeItem() {
    this.menu.insertBefore({
      text: kendo.jQuery('#beforeText').val()
    }, this.getItem(kendo.jQuery('#beforeIndex')));
  }

  afterItem() {
    this.menu.insertAfter({
      text: kendo.jQuery('#afterText').val()
    }, this.getItem(kendo.jQuery('#afterIndex')));
  }

  triggerItem() {
    let item = this.getItem(kendo.jQuery('#triggerIndex'));
    if (item.hasClass('k-state-active')) {
      this.menu.close(item);
    } else {
      this.menu.open(item);
    }
  }

}
