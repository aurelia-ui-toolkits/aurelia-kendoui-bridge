export class FileAndImageBrowser {

  tools= [
    'insertImage',
    'insertFile'
  ];

  imageBrowser = {
    messages: {
      dropFilesHere: 'Drop files here'
    },
    transport: {
      read: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Read',
      destroy: {
        url: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Destroy',
        type: 'POST'
      },
      create: {
        url: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Create',
        type: 'POST'
      },
      thumbnailUrl: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Thumbnail',
      uploadUrl: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Upload',
      imageUrl: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Image?path={0}'
    }
  };

  fileBrowser = {
    messages: {
      dropFilesHere: 'Drop files here'
    },
    transport: {
      read: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Read',
      destroy: {
        url: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Destroy',
        type: 'POST'
      },
      create: {
        url: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Create',
        type: 'POST'
      },
      uploadUrl: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/Upload',
      fileUrl: 'http://demos.telerik.com/kendo-ui/service/ImageBrowser/File?fileName={0}'
    }
  };
}
