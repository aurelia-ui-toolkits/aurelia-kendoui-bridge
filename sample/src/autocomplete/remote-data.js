import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class RemoteData {
	datasource;

	constructor() {
		this.datasource = {
                            type: "odata",
                            serverFiltering: true,
                            transport: {
                                read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
                            }
                        };
	}	

	attached() {
		$(document).ready(function() {
		  $('code').each(function(i, block) {
		    hljs.highlightBlock(block);
		  });
		});   
	}
}