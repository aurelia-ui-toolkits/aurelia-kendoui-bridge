export class CustomTools {
  tools= [
    {
      name: 'fontName',
      items: [].concat(
        kendo.ui.Editor.prototype.options.fontName[8],
        [{ text: 'Garamond', value: 'Garamond, serif' }]
      )
    },
    {
      name: 'fontSize',
      items: [].concat(
        kendo.ui.Editor.prototype.options.fontSize[0],
        [{ text: '16px', value: '16px' }]
      )
    },
    {
      name: 'formatting',
      items: [].concat(
        kendo.ui.editor.FormattingTool.prototype.options.items[0],
        [{ text: 'Fieldset', value: 'fieldset' }]
      )
    },
    // you're probably better off not using the bridge if you want to use this custom template
    // by initializing the Kendo Editor yourself you get more control over timing, which is important
    // for this sample
    // {
    //     name: 'customTemplate',
    //     template: $('#backgroundColor-template').html()
    // },
    {
      name: 'custom',
      tooltip: 'Insert a horizontal rule',
      exec: function(e) {
        let editor = $(this).data('kendoEditor');
        editor.exec('inserthtml', { value: '<hr />' });
      }
    }
  ]
}
