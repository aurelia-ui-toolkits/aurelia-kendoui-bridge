import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  series = [{
    name: 'Proteins',
    type: 'radarColumn',
    field: 'score'
  }];
}
