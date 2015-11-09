// TODO: Do we import the common styles here or let the user do it in their app?
import 'kendo-ui/src/styles/web/kendo.common.core.css!';

export function configure(aurelia, configCallback) {

	var resources = [];

	if (configCallback !== undefined && typeof(configCallback) === 'function') {
   		resources = configCallback();
	}

	if(typeof resources === "string")
		resources = [resources];
	
	// Resources are located in e.g. button/button but we don't want the user passing that
	// they should just specify 'button' so map each control name to it's folder 
	resources = resources.map(r => r + "/" + r);

	aurelia.globalResources(resources);
}