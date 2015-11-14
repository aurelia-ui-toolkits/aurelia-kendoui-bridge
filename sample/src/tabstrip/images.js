export class Images {
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
}