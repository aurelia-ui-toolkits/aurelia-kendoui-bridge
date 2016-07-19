import '../../shared/signalr';

export class BindingToSignalr {
  constructor() {
    this.hubUrl = 'http://kendo.jeroenvinke.nl/signalr';
    this.connection = kendo.jQuery.hubConnection(this.hubUrl, { useDefaultPath: false});
    this.hub = this.connection.createHubProxy('productHub');
    this.hubStart = this.connection.start({ jsonp: true });

    this.dataSource = {
      type: 'signalr',
      autoSync: true,
      // Handle the push event to display notifications when push updates arrive
      push: (e) => {
        let notification = kendo.jQuery(this.notification).data('kendoNotification');
        notification.success(e.type);
      },
      schema: {
        model: {
          id: 'ID',
          fields: {
            'ID': { editable: false, nullable: true },
            'CreatedAt': { type: 'date' },
            'UnitPrice': { type: 'number' }
          }
        }
      },
      sort: [ { field: 'CreatedAt', dir: 'desc' }],
      transport: {
        signalr: {
          promise: this.hubStart,
          hub: this.hub,
          server: {
            read: 'read',
            update: 'update',
            destroy: 'destroy',
            create: 'create'
          },
          client: {
            read: 'read',
            update: 'update',
            destroy: 'destroy',
            create: 'create'
          }
        }
      }
    };
  }

  attached() {
    kendo.jQuery(this.notification).kendoNotification({
      width: '100%',
      position: {
        top: 0,
        left: 0
      }
    });
  }
}
