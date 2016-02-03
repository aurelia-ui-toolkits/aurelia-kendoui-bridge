export class Templates {

  date = new Date('2013/6/13');
  startTime = new Date('2013/6/13 10:00');
  endTime = new Date('2013/6/13 23:00');

  dataSource = [{
    title: 'Fast and furious 6',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/fast-and-furious.jpg',
    imdb: 'http://www.imdb.com/title/tt1905041/',
    start: new Date('2013/6/13 17:00'),
    end: new Date('2013/6/13 18:30')
  },
  {
    title: 'The Internship',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/the-internship.jpg',
    imdb: 'http://www.imdb.com/title/tt2234155/',
    start: new Date('2013/6/13 14:00'),
    end: new Date('2013/6/13 15:30')
  },
  {
    title: 'The Perks of Being a Wallflower',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/wallflower.jpg',
    imdb: 'http://www.imdb.com/title/tt1659337/',
    start: new Date('2013/6/13 16:00'),
    end: new Date('2013/6/13 17:30')
  },
  {
    title: 'The Help',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/the-help.jpg',
    imdb: 'http://www.imdb.com/title/tt1454029/',
    start: new Date('2013/6/13 12:00'),
    end: new Date('2013/6/13 13:30')
  },
  {
    title: 'Now You See Me',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/now-you-see-me.jpg',
    imdb: 'http://www.imdb.com/title/tt1670345/',
    start: new Date('2013/6/13 10:00'),
    end: new Date('2013/6/13 11:30')
  },
  {
    title: 'Fast and furious 6',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/fast-and-furious.jpg',
    imdb: 'http://www.imdb.com/title/tt1905041/',
    start: new Date('2013/6/13 19:00'),
    end: new Date('2013/6/13 20:30')
  },
  {
    title: 'The Internship',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/the-internship.jpg',
    imdb: 'http://www.imdb.com/title/tt2234155/',
    start: new Date('2013/6/13 17:30'),
    end: new Date('2013/6/13 19:00')
  },
  {
    title: 'The Perks of Being a Wallflower',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/wallflower.jpg',
    imdb: 'http://www.imdb.com/title/tt1659337/',
    start: new Date('2013/6/13 17:30'),
    end: new Date('2013/6/13 19:00')
  },
  {
    title: 'The Help',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/the-help.jpg',
    imdb: 'http://www.imdb.com/title/tt1454029/',
    start: new Date('2013/6/13 13:30'),
    end: new Date('2013/6/13 15:00')
  },
  {
    title: 'Now You See Me',
    image: 'http://demos.telerik.com/kendo-ui/content/web/scheduler/now-you-see-me.jpg',
    imdb: 'http://www.imdb.com/title/tt1670345/',
    start: new Date('2013/6/13 12:30'),
    end: new Date('2013/6/13 14:00')
  }];
}

export class MovieTimeValueConverter {
  toView(date) {
    if (date) {
      return `${date.getHours()}:${date.getMinutes()}`;
    }
  }
}
