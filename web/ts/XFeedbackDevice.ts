
/// <reference path="../lib/three.d.ts" />

class XFeedbackDevice {

    renderer:THREE.WebGLRenderer;
    scene:THREE.Scene;
    camera:THREE.Camera;
    clock:THREE.Clock;

    cube:THREE.Mesh;
    light:THREE.Light;

    constructor(canvas:HTMLCanvasElement) {
        this.renderer = new THREE.WebGLRenderer({antialias: true, canvas: canvas});
        this.renderer.setSize(canvas.width, canvas.height);
        this.renderer.setClearColor( 0x999999, 1);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 15;

        this.clock = new THREE.Clock();

        // create a point light
        this.light = new THREE.PointLight(0xFFFFFF);

        // set its position
        this.light.position.x = 10;
        this.light.position.y = 50;
        this.light.position.z = 130;

        // add to the scene
        this.scene.add(this.light);

        var geometry:THREE.Geometry = HexagonGeometry.createGeometry();

        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add(this.cube);
    }


    render() {
        requestAnimationFrame(() => this.render());

        var delta = this.clock.getDelta();
        this.cube.rotation.y += delta * 0.1;

        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.render();
    }

}