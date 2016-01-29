import {Router} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';

@inject(Router)
export class Ajax {
    contentUrls = [
      'ajaxContent1.html',
      'ajaxContent2.html',
      'ajaxContent3.html',
      'ajaxContent4.html'
    ];

    constructor(router) {
    	// Hack for this sample page - Kendo doesn't know about SystemJS paths so will try to load from an absolute path or
    	// the root - here we create an absolute path to local content in the samples area
      this.contentUrls = this.contentUrls.map(file  => {
        return System.baseURL + 'src' + router.baseUrl + file;
      });
    }
}
