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

        return new THREE.ExtrudeGeometry(new THREE.Shape(points), {amount: 0.01});

    }

}