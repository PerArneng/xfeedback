/// <reference path="../lib/three.d.ts" />

class StatusIndicator {

	private _mesh:THREE.Mesh;

	constructor() {
		var geometry:THREE.Geometry = HexagonGeometry.createGeometry();
		var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
		this._mesh = new THREE.Mesh( geometry, material );
		this._mesh.rotation.x -= 0.785398163;
	}

	get mesh():THREE.Mesh {
		return this.mesh;
	}


}
