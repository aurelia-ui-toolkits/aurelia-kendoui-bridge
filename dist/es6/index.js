// TODO: Do we import the common styles here or let the user do it in their app?
import 'kendo-ui/src/styles/web/kendo.common.core.css!';

export function configure(aurelia){

	var resources = [
		'button/button',
		'autocomplete/autocomplete'
	];
	
	aurelia.globalResources(resources);
}