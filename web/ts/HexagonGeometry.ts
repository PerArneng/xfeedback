/// <reference path="../lib/three.d.ts" />

class HexagonGeometry {

    static createGeometry(radius:number = 1, depth:number = 1) : THREE.Geometry {

        var angle = 1.7320508075688767
        var h = angle * 0.5 // height of a triangle

        var points:THREE.Vector2[] = [
            new THREE.Vector2(0,   1),
            new THREE.Vector2(-h,  0.5),
            new THREE.Vector2(-h,  -0.5),
            new THREE.Vector2(0,   -1),
            new THREE.Vector2(h,   -0.5),
            new THREE.Vector2(h,   0.5)
        ];

        var extrudeOptions = {
        	amount: 0.2,
        	bevelEnabled: true,
        	bevelThickness: 0.02,
        	steps: 10
        };

        return new THREE.ExtrudeGeometry(new THREE.Shape(points), extrudeOptions);

    }

}