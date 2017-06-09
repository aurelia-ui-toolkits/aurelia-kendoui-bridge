import { delayed } from 'aurelia-kendoui-bridge/common/decorators';

export class Test2 {

    constructor() {

        this.videos = new kendo.data.DataSource({
            data: [{
                title: "Telerik Platform - Enterprise Mobility. Unshackled.",
                poster: "http://img.youtube.com/vi/N3P6MyvL-t4/1.jpg",
                source: "https://www.youtube.com/watch?v=N3P6MyvL-t4"
            }, {
                title: "Learn How York Solved Its Database Problem",
                poster: "http://img.youtube.com/vi/_S63eCewxRg/1.jpg",
                source: "https://www.youtube.com/watch?v=_S63eCewxRg"
            }, {
                title: "Responsive Website Delivers for Reeves Import Motorcars",
                poster: "http://img.youtube.com/vi/DYsiJRmIQZw/1.jpg",
                source: "https://www.youtube.com/watch?v=DYsiJRmIQZw"
            }, {
                title: "Digital Transformation: A New Way of Thinking",
                poster: "http://img.youtube.com/vi/gNlya720gbk/1.jpg",
                source: "https://www.youtube.com/watch?v=gNlya720gbk"
            }, {
                title: "Take a Tour of the Telerik Platform",
                poster: "http://img.youtube.com/vi/rLtTuFbuf1c/1.jpg",
                source: "https://www.youtube.com/watch?v=rLtTuFbuf1c"
            }, {
                title: "Why Telerik Analytics - Key Benefits For Your Applications",
                poster: "https://i.ytimg.com/vi/CpHKm2NruYc/1.jpg",
                source: "https://www.youtube.com/watch?v=CpHKm2NruYc"
            }]
        });
    }

    onChange() {
        let index = this.listView.select().index();
        let data = this.videos.view()[index];

        this.mediaPlayer.media(data);
    }

    @delayed()
    onDataBound(e) {
        var listView = e.sender;

        listView.select(listView.element.children().first());
    }
}