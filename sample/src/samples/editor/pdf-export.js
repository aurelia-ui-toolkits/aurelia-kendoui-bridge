export class PDFExport {
  tools = ['pdf'];
  stylesheets = ['http://demos.telerik.com/kendo-ui/content/web/editor/pdf-export-styles.css'];
  pdf = {
    fileName: 'NewDocument.pdf',
    proxyURL: '//demos.telerik.com/kendo-ui/service/export',
    paperSize: 'a4',
    margin: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20
    }
  };
}
