export class Templates {
  asyncUpload = {
    saveUrl: 'http://demos.telerik.com/kendo-ui/upload/save',
    removeUrl: 'http://demos.telerik.com/kendo-ui/upload/remove',
    autoUpload: false
  };

  addExtensionClass(extension) {
    switch (extension) {
    case '.jpg':
    case '.img':
    case '.png':
    case '.gif':
      return 'img-file';
    case '.doc':
    case '.docx':
      return 'doc-file';
    case '.xls':
    case '.xlsx':
      return 'xls-file';
    case '.pdf':
      return 'pdf-file';
    case '.zip':
    case '.rar':
      return 'zip-file';
    default:
      return 'default-file';
    }
  }
}
