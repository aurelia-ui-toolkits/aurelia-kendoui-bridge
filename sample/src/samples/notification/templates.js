export class Templates {
  showEmailNotification() {
    this.notification.show({
      title: 'New E-mail',
      message: 'You have 1 new mail message!'
    }, 'info');
  }

  showErrorNotification() {
    this.notification.show({
      title: 'Wrong Password',
      message: 'Please enter your password again.'
    }, 'error');
  }

  showSuccessNotification() {
    this.notification.show({
      message: 'Upload Successful'
    }, 'success');
  }

  hideAllNotifications() {
    this.notification.hide();
  }
}
