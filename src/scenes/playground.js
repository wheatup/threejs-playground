import Scene from '../core/scene';
import * as THREE from 'three';

export default class Playground extends Scene {
	start() {
		this.engine.renderer.shadowMap.enabled = true;
		this.engine.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
		let geo = new THREE.BoxGeometry(3, 3, 3);
		let cube = new THREE.Mesh(geo, mat);
		cube.castShadow = true;
		cube.position.z = -6;
		cube.position.y = 1.5;

		geo = new THREE.SphereGeometry(2, 32, 32);
		let sphere = new THREE.Mesh(geo, mat);
		sphere.position.z = 0;
		sphere.castShadow = true;
		sphere.position.y = 2;

		geo = new THREE.ConeGeometry(3, 4, 20, 1, true);
		let cone = new THREE.Mesh(geo, mat);
		cone.position.z = 6;
		cone.castShadow = true;
		cone.position.y = 2;

		let groundGeo = new THREE.PlaneBufferGeometry(50, 50);
		let groundMat = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
		let ground = new THREE.Mesh(groundGeo, groundMat);
		ground.position.y = -0;
		ground.rotation.x = -Math.PI / 2;
		ground.receiveShadow = true;
		this.engine.scene.add(ground);

		let light = new THREE.DirectionalLight(0xffffff, 0.5);
		light.position.x = 1.5;
		light.position.y = 1;
		light.position.z = 1.25;
		light.castShadow = true;
		this.engine.scene.add(light);

		this.engine.scene.add(cube);
		this.engine.scene.add(sphere);
		this.engine.scene.add(cone);
	}

	update(dt) {}
}
