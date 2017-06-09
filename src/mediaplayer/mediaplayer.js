import { inject } from 'aurelia-dependency-injection';
import { customAttribute } from 'aurelia-templating';
import { WidgetBase } from '../common/widget-base';
import { generateBindables } from '../common/decorators';
import { constants } from '../common/constants';

@customAttribute(`${constants.attributePrefix}mediaplayer`)
@generateBindables('kendoMediaPlayer')
@inject(Element, WidgetBase)
export class MediaPlayer {

    constructor(element, widgetBase) {
        this.element = element;
        this.widgetBase = widgetBase
            .control('kendoMediaPlayer')
            .useElement(this.element)
            .linkViewModel(this);
    }

    subscribe(event, callback) {
        return this.widgetBase.subscribe(event, callback);
    }

    bind(ctx, overrideCtx) {
        this.widgetBase.useParentCtx(overrideCtx);
    }

    attached() {
        if (!this.kNoInit) {
            this.recreate();
        }
    }

    recreate() {
        this.kWidget = this.widgetBase.recreate();
    }

    destroy() {
        this.widgetBase.destroy(this.kWidget);
    }

    detached() {
        this.destroy();
    }
}