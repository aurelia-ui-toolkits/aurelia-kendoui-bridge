export class Api {
    disabled = false;

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }

    test() {
    	console.log("You clicked me");
    }
}
