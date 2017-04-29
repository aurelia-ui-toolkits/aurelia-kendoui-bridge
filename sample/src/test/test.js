export class Test {
  data = new kendo.data.DataSource({
        data : [
      { text: 'Cotton', value: '1', desc:'Cotton /Looong desc' },
      { text: 'Polyester', value: '2', desc:'Poly /Looong desc' },
      { text: 'Cotton/Polyester', value: '3', desc:'Both /Looong desc' },
      { text: 'Rib Knit', value: '4', desc:'Rib /Looong desc' }
      ]
    });

    fabric=3;

  onReady(w){
    // w.setOptions({autoWidth:true});
  }
}