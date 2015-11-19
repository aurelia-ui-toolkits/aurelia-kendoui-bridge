// TODO: Do we import the common styles here or let the user do it in their app?
import 'kendo-ui/src/styles/web/kendo.common.core.css!';

export function configure(aurelia, configCallback) {

    var builder = new kendoConfigBuilder();

    if (configCallback !== undefined && typeof(configCallback) === 'function') {
        configCallback(builder);
    }

    // Provide core if nothing was specified
    if (builder.resources.length === 0) {
        console.warn("Nothing specified for kendo configuration - using defaults for Kendo Core");
        builder.core();
    }

    // Pull the data off the builder
    var resources = builder.resources;

    // Convert the resource names to paths
    resources = resources.map(r => r + "/" + r);

    aurelia.globalResources(resources);
}

class kendoConfigBuilder {

	resources = [];

	core() {
		this.kendoButton()
			.kendoTabStrip();
		return this;
	}

	pro() {
		this.core()
			.kendoAutoComplete();
		return this;
	}

	kendoButton() {
		this.resources.push("button");
	    return this;
	}

	kendoTabStrip() {
		this.resources.push("tabstrip");
		return this;
	}

	kendoAutoComplete() {
	    this.resources.push("autocomplete");
	    return this;
	}
}

