export class AnimationEffects {
  animation = 'expand:vertical';
  opacity = true;

  getEffects() {
    if (!this.animation && !this.opacity) {
      return false;
    }

    let anim = '';
    if (this.opacity) {
      anim += 'fadeIn';
    }

    if (this.animation) {
      anim += ' ' + this.animation;
    }
    console.log(anim);
    return anim;
  }

  attached() {
    $('input').change(() => {
      this.tabstripVM.kAnimation = {
        open: {
          effects: this.getEffects()
        }
      };

      console.log(this);

      this.tabstripVM.recreate();
    });
  }
}
