import {TaskQueue, inject} from 'aurelia-framework';

@inject(TaskQueue)
export class ServerImportExport {
  ALLOWED_EXTENSIONS = ['.xlsx', '.csv', '.txt', '.json'];

  select(e) {
    let extension = e.files[0].extension.toLowerCase();
    if (this.ALLOWED_EXTENSIONS.indexOf(extension) === -1) {
      alert('Please, select a supported file format');
      e.preventDefault();
    }
  }

  success(e) {
    // Load the converted document into the spreadsheet
    this.spreadsheet.fromJSON(e.response);
  }

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      $.getJSON('https://demos.telerik.com/kendo-ui/content/web/spreadsheet/products.json')
      .done(sheets => this.spreadsheet.fromJSON({ sheets: sheets }));
    });

    $('.download').click((e) => {
      $('#download-data').val(JSON.stringify(this.spreadsheet.toJSON()));
      $('#download-extension').val($(e.target).data('extension'));
    });
  }
}
