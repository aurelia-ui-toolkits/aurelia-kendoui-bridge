export class BindingToRemoteData {
    constructor() {
      this.serviceRoot = '//demos.telerik.com/kendo-ui/service';
      this.homogeneousData = {
        transport: {
          read: {
            url: this.serviceRoot + '/Employees',
            dataType: 'jsonp'
          }
        },
        schema: {
          model: {
            id: 'EmployeeId',
            hasChildren: 'HasEmployees'
          }
        }
      };
    }
}