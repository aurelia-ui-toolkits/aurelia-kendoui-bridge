export class Advanced {
  datasource = {
    data: [{
      ContactName: 'jeroen',
      PhoneNumbers: ['12345678', '87654321']
    }, {
      ContactName: 'charles',
      PhoneNumbers: ['12345678', '87654321']
    }, {
      ContactName: 'nikolaj',
      PhoneNumbers: ['12345678', '87654321']
    }]
  }

  showAlert(message) {
    alert(message);
  }
}
