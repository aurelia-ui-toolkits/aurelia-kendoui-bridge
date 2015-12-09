export class BindingToWebSocket {
  // constructor() {
  //   if (typeof WebSocket === "undefined") {
  //     alert('This demo requires <a href="http://en.wikipedia.org/wiki/WebSocket">WebSocket</a> support.<a href="http://updateyourbrowser.net/" title="Update Your Browser"><img src="http://updateyourbrowser.net/uyb.jpg" border="0" alt="Update Your Browser" /></a>');
  //     return;
  //   }
  //
  //   var host = "wss://kendoui-ws-demo.herokuapp.com";
  //   var ws = new WebSocket(host);
  //
  //   //Bind the grid when the socket connects
  //   ws.onopen = () => {
  //     this.grid._component.dataSource.fetch();
  //   };
  //
  //   //Close the socket when the browser window is closed.
  //   window.onbeforeunload = function() {
  //     ws.close();
  //   }
  //
  //   //Helper function to send data through the socket
  //   function send(ws, request, callback) {
  //     if (ws.readyState != 1) {
  //       alert("Socket was closed. Please reload the page.");
  //       return;
  //     }
  //
  //     //Assign unique id to the request. Will use that to distinguish the response.
  //     request.id = kendo.guid();
  //
  //     //Listen to the "message" event to get server response
  //     ws.addEventListener("message", function(e) {
  //       var result = JSON.parse(e.data);
  //
  //       //Check if the response is for the current request
  //       if (result.id == request.id) {
  //         //Stop listening
  //         ws.removeEventListener("message", arguments.callee);
  //
  //         //Invoke the callback with the result
  //         callback(result);
  //       }
  //     });
  //
  //     //Send the data to the server
  //     ws.send(JSON.stringify(request));
  //   }
  //
  //   this.datasource = {
  //     push: function(e) {
  //       alert('success');
  //     },
  //     autoSync: true,
  //     schema: {
  //         model: {
  //             id: "ProductID",
  //             fields: {
  //                 "ProductID": { editable: false, nullable: true },
  //                 "CreatedAt": { type: "date" },
  //                 "UnitPrice": { type: "number" }
  //             }
  //         },
  //         data: "data"
  //     },
  //     sort: [ { field: "CreatedAt", dir: "desc" }],
  //     transport: {
  //         push: function(options) {
  //             //Listen to the "message" event fired when the server pushes data
  //             ws.addEventListener("message", function(e) {
  //                 var result = JSON.parse(e.data);
  //
  //                 //Check what the push type is and invoke the corresponding callback.
  //                 if (result.type == "push-update") {
  //                     options.pushUpdate(result);
  //                 } else if (result.type == "push-destroy") {
  //                     options.pushDestroy(result);
  //                 } else if (result.type == "push-create") {
  //                     options.pushCreate(result);
  //                 }
  //             });
  //         },
  //         read: function(options) {
  //             var request = { type: "read" };
  //
  //             send(ws, request, function(result) {
  //                 options.success(result);
  //             });
  //         },
  //         update: function(options) {
  //             var request = { type: "update", data: [options.data] };
  //
  //             send(ws, request, options.success);
  //         },
  //         destroy: function(options) {
  //             var request = { type: "destroy", data: [options.data] };
  //
  //             send(ws, request, options.success);
  //         },
  //         create: function(options) {
  //             var request = { type: "create", data: [options.data] };
  //
  //             send(ws, request, options.success);
  //         }
  //     }
  //   }
  // }
}
