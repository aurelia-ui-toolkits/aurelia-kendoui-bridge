import {bindable} from 'aurelia-framework';

export class CollapsePanel {
	@bindable title;
	@bindable footer;
	@bindable allowCollapse = true;
	@bindable collapsed = false;

	toggle() {
		this.collapsed = !this.collapsed;
	}
}