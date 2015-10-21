import {bindable} from 'aurelia-framework';

export class CollapsePanel {
	@bindable title;
	@bindable footer;
	@bindable allowCollapse = true;
	@bindable collapsed = false;
	@bindable panelClass = "default";

	toggle() {
		if(this.allowCollapse)
			this.collapsed = !this.collapsed;
	}
}