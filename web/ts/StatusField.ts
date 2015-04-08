

class StatusField {

	scene:THREE.Scene;
	indicators:StatusIndicator[] = [];

	constructor(scene:THREE.Scene) {
		this.scene = scene;

		var indicator = new StatusIndicator();
		scene.add(indicator.mesh);
		this.indicators.push(indicator);
	}

}
