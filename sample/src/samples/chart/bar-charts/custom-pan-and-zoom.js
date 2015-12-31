export class CustomPanAndZoom {
  // Minimum/maximum number of visible items
  MIN_SIZE = 10;
  MAX_SIZE = 20;

  // Optional sort expression
  // var SORT = { field: 'val', dir: 'asc' };
  SORT = {};

  // Minimum distance in px to start dragging
  DRAG_THR = 50;

  // Sample data
  data = [];

  // State variables
  viewStart = 0;
  viewSize = 10;
  newStart;

  constructor() {
    for (let i = 0; i < 100; i++) {
      let val = Math.round(Math.random() * 10);
      this.data.push({
        category: 'C' + i,
        val: val
      });
    }

    this.dataSource = {
      data: this.data,
      pageSize: this.viewSize,
      page: 0,
      sort: { field: 'val', dir: 'desc' }
    };
  }


  // Drag handler
  onDrag(e) {
    // get kendo's event args
    let kEvent = e.detail;
    let chart = kEvent.sender;
    let ds = chart.dataSource;
    let delta = Math.round(kEvent.originalEvent.x.initialDelta / this.DRAG_THR);

    if (delta !== 0) {
      this.newStart = Math.max(0, this.viewStart - delta);
      this.newStart = Math.min(this.data.length - this.viewSize, this.newStart);
      ds.query({
        skip: this.newStart,
        page: 0,
        pageSize: this.viewSize,
        sort: this.SORT
      });
    }
  }

  onDragEnd() {
    this.viewStart = this.newStart;
  }

  // Zoom handler
  onZoom(e) {
    // get kendo's event args
    let kEvent = e.detail;
    let chart = kEvent.sender;
    let ds = chart.dataSource;
    this.viewSize = Math.min(Math.max(this.viewSize + kEvent.delta, this.MIN_SIZE), this.MAX_SIZE);
    ds.query({
      skip: this.viewStart,
      page: 0,
      pageSize: this.viewSize,
      sort: this.SORT
    });

    // Prevent document scrolling
    kEvent.originalEvent.preventDefault();
  }
}
