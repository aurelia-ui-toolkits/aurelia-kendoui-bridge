import {bindable} from 'aurelia-framework';

export class AnimationEffects {
  @bindable opacity = true;
  @bindable animation = 'expand';
  @bindable delay = '100';

  propertyChanged() {
    this.menuVM.kAnimation = { open: { effects: this.getEffects() }};
    this.menuVM.kHoverDelay = parseInt(this.delay, 0);
    this.menuVM.recreate();
  }

  getEffects() {
    let anim = this.animation;

    if (this.opacity) {
      anim += ' fadeIn';
    }

    return anim;
  }
}
