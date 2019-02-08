import * as THREE from 'three';
import Framework from './modules/framework';

window.onload = function() {
	const framework = new Framework();

	let geometry = new THREE.SphereGeometry(2, 30, 30);
	let material = new THREE.MeshNormalMaterial();
	let cube = new THREE.Mesh(geometry, material);
	let normals = new THREE.FaceNormalsHelper(cube, 0.5);

	framework.scene.add(cube);
	framework.scene.add(normals);
};
