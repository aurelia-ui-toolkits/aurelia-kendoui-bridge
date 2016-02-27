import {TaskQueue, inject} from 'aurelia-framework';

@inject(TaskQueue)
export class API {
  newShapeX = 0;
  newShapeY = 0;
  fromShapeIndex = 0;
  toShapeIndex = 0;
  selectShapeIndex = 0;
  zoom = 1;
  panX = 0;
  panY = 0;

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      let shape1 = this.diagram.addShape({x: 100, y: 100});
      let shape2 = this.diagram.addShape({ x: 300, y: 100 });
      this.diagram.connect(shape1, shape2);
    });
  }

  addShape() {
    this.diagram.addShape({ x: this.newShapeX, y: this.newShapeY });
  }

  remove() {
    this.diagram.remove(this.diagram.select());
  }

  select() {
    this.diagram.select(this.diagram.shapes[this.selectShapeIndex]);
  }

  zoomDiagram() {
    this.diagram.zoom(this.zoom);
  }

  pan() {
    this.diagram.pan(new kendo.dataviz.diagram.Point(this.panX, this.panY));
  }

  addConnection() {
    let total = this.diagram.shapes.length;
    if (this.fromShapeIndex < total && this.toShapeIndex < total) {
      this.diagram.connect(this.diagram.shapes[this.fromShapeIndex], this.diagram.shapes[this.toShapeIndex]);
    }
  }
}
