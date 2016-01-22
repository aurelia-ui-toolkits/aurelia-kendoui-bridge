export class Images {

      constructor() {
        this.imagesData = [
          {
            text: 'Inbox', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/mail.png',
            items: [
              { text: 'Read Mail', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/readmail.png' }
            ]
          },
          {
            text: 'Drafts', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/edit.png'
          },
          {
            text: 'Search Folders', expanded: true, imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/search.png',
            items: [
              { text: 'Categorized Mail', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/search.png' },
              { text: 'Large Mail', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/search.png' },
              { text: 'Unread Mail', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/search.png' }
            ]
          },
          {
            text: 'Settings', imageUrl: 'http://demos.telerik.com/kendo-ui/content/web/treeview/settings.png'
          }
        ];

        this.spritesData = [{
          text: 'My Documents', expanded: true, spriteCssClass: 'rootfolder', items: [
            {
              text: 'Kendo UI Project', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'about.html', spriteCssClass: 'html' },
                { text: 'index.html', spriteCssClass: 'html' },
                { text: 'logo.png', spriteCssClass: 'image' }
              ]
            },
            {
              text: 'New Web Site', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'mockup.jpg', spriteCssClass: 'image' },
                { text: 'Research.pdf', spriteCssClass: 'pdf' }
              ]
            },
            {
              text: 'Reports', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'February.pdf', spriteCssClass: 'pdf' },
                { text: 'March.pdf', spriteCssClass: 'pdf' },
                { text: 'April.pdf', spriteCssClass: 'pdf' }
              ]
            }
          ]
        }];

        this.spritesData1 = [{
          text: 'My Documents', expanded: true, spriteCssClass: 'rootfolder', items: [
            {
              text: 'Kendo UI Project', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'about.html', spriteCssClass: 'html' },
                { text: 'index.html', spriteCssClass: 'html' },
                { text: 'logo.png', spriteCssClass: 'image' }
              ]
            },
            {
              text: 'New Web Site', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'mockup.jpg', spriteCssClass: 'image' },
                { text: 'Research.pdf', spriteCssClass: 'pdf' }
              ]
            },
            {
              text: 'Reports', expanded: true, spriteCssClass: 'folder', items: [
                { text: 'February.pdf', spriteCssClass: 'pdf' },
                { text: 'March.pdf', spriteCssClass: 'pdf' },
                { text: 'April.pdf', spriteCssClass: 'pdf' }
              ]
            }
          ]
        }];
      }
}
