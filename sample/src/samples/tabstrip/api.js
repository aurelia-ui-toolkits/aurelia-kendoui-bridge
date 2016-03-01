export class API {
  beforeText = 'Item';
  afterText = 'Item';
  appendText = 'Item';
  tabIndex = '0';

  getItem(index) {
    return this.tabStrip.tabGroup.children('li').eq(index);
  }

  selectTab() {
    this.tabStrip.select(this.getItem(this.tabIndex));
  }

  toggleTab() {
    let tab = this.tabStrip.select();
    this.tabStrip.enable(tab, tab.hasClass('k-state-disabled'));
  }

  removeItem() {
    let tab = this.tabStrip.select();
    let otherTab = tab.next();
    otherTab = otherTab.length ? otherTab : tab.prev();

    this.tabStrip.remove(tab);
    this.tabStrip.select(otherTab);
  }

  appendItem() {
    this.tabStrip.append({
      text: this.appendText,
      content: '<br>'
    });
  }

  beforeItem() {
    this.tabStrip.insertBefore({
      text: this.beforeText,
      content: '<br>'
    }, this.tabStrip.select());
  }

  afterItem() {
    this.tabStrip.insertAfter({
      text: this.afterText,
      content: '<br>'
    }, this.tabStrip.select());
  }
}
