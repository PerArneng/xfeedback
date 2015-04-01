/// <reference path="../lib/three.d.ts" />

class HexagonGeometry extends THREE.Geometry {

    constructor(radius:number = 1, depth:number = 1) {
        super();

        var angle = 1.7320508075688767
        var h = angle * 0.5 // height of a triangle

        this.vertices.push(new THREE.Vector3(0,   0,      1));
        this.vertices.push( new THREE.Vector3(0,   1,      1));
        this.vertices.push( new THREE.Vector3(-h,  0.5,    1));
        this.vertices.push( new THREE.Vector3(-h,  -0.5,   1));
        this.vertices.push( new THREE.Vector3(0,   -1,     1));
        this.vertices.push( new THREE.Vector3(h,   -0.5,   1));
        this.vertices.push( new THREE.Vector3(h,   0.5,    1));
        this.vertices.map( vertex => vertex.multiply(new THREE.Vector3(radius, radius, radius * depth)));
        
        this.faces.push(new THREE.Face3(0, 1, 2));
        this.faces.push(new THREE.Face3(0, 2, 3));
        this.faces.push(new THREE.Face3(0, 3, 4));
        this.faces.push(new THREE.Face3(0, 4, 5));
        this.faces.push(new THREE.Face3(0, 5, 6));
        this.faces.push(new THREE.Face3(0, 6, 1));
    }

}