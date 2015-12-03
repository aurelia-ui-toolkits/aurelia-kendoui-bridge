export class Api {
    enabled = true;

    disable() {
        this.enabled = false;
    }

    enable() {
        this.enabled = true;
    }

    test() {
    	alert("You clicked me");
    }
}
