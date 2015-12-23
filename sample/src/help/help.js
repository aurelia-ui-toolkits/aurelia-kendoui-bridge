export class Help {
  tabSelected(e) {
    if(jQuery(e.item).text() == "Gitter Chat") {
      this.gitter.toggleChat(true);
    }
  }
}
