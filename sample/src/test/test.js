export class Test {
  colors = [{
      to: 25,
      color: '#0058e9'
  }, {
      from: 25,
      to: 50,
      color: '#37b400'
  }, {
      from: 50,
      to: 75,
      color: '#ffc000'
  }, {                    
      from: 75,
      color: '#f31700'
  }];

	constructor() {
		window.DialogFlowAgent = kendo.Class.extend({
			init: function (chat) {
				this.chat = chat;
				this.userInfo = {
					id: "botty",
					iconUrl: "../content/chat/InsuranceBot.png",
					name: "Botty McbotFace"
				};

				this.agent2 = new ApiAi.ApiAiClient({ accessToken: "280344fb165a461a8ccfef7e1bb47e65" });

				this.postEvent("Welcome");

				this._timestamp;
			},

			postEvent: function (event) {
				this.agent2
					.eventRequest(event)
					.then($.proxy(this.onResponse, this));
			},

			postMessage: function (text) {
				this.agent2
					.textRequest(text)
					.then($.proxy(this.onResponse, this));
			},

			onResponse: function (response) {
				this._timestamp = response.timestamp;

				if (response.result && response.result.fulfillment) {
					var fulfillment = response.result.fulfillment;
					var data = fulfillment.data;

					this.renderMessages(fulfillment.messages);

					if (data && data.null) {
						this.renderAttachments(data.null);

						this.renderSuggestedActions(data.null.suggestedActions);
					}
				}
			},

			renderMessages: function (messages) {
				var that = this;

				$(messages).each(function (index, message) {
					switch (message.type) {
						case 0:
							that.chat.renderMessage({ type: "text", text: message.speech, timestamp: that._timestamp }, that.userInfo);
							break;
						case 2:
							that.renderSuggestedActions(message.replies.map(function (reply) { return { title: reply, value: reply }; }));
							break;
						default:
					}
				});

			},

			renderAttachments: function (data) {
				var that = this;
				data.attachments = $(data.attachments).map(function (index, attachment) {
					return {
						contentType: attachment.type || "heroCard",
						content: attachment
					};
				}).toArray();

				this.chat.renderAttachments(data, this.userInfo);
			},

			renderSuggestedActions: function (suggestedActions) {
				this.chat.renderSuggestedActions($(suggestedActions).toArray());
			}
		});
	}

  toolbar = {
    position: 'right',
    tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
  };

  datasource = {
    transport: {
      read: {
        dataType: 'jsonp',
        url: 'https://demos.telerik.com/kendo-ui/service/Customers'
      }
    }
  };

  draggable = {
    placeholder: function(draggedItem) {
      return draggedItem
        .clone()
        .addClass('custom-placeholder')
        .removeClass('k-ghost');
    }
	}
	
	chatReady(e) {
		console.log(e);

		this.agent = new DialogFlowAgent(e);
	}
}