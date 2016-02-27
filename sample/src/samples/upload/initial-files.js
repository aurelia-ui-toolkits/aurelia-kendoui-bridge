export class InitialFiles {
  asyncUpload = {
    saveUrl: 'http://demos.telerik.com/kendo-ui/upload/save',
    removeUrl: 'http://demos.telerik.com/kendo-ui/upload/remove',
    autoUpload: false
  };

  constructor() {
    if (sessionStorage.initialFiles === undefined) {
      sessionStorage.initialFiles = '[]';
    }

    this.initialFiles = JSON.parse(sessionStorage.initialFiles);
  }

  onSuccess(e) {
    let currentInitialFiles = JSON.parse(sessionStorage.initialFiles);
    for (let i = 0; i < e.files.length; i++) {
      let current = {
        name: e.files[i].name,
        extension: e.files[i].extension,
        size: e.files[i].size
      };

      if (e.operation === 'upload') {
        currentInitialFiles.push(current);
      } else {
        let indexOfFile = currentInitialFiles.indexOf(current);
        currentInitialFiles.splice(indexOfFile, 1);
      }
    }
    sessionStorage.initialFiles = JSON.stringify(currentInitialFiles);
  }
}
