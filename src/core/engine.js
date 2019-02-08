import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

export default class Engine {
	constructor(update) {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x556677);
		this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.set(16, 8, 0);

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
		this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		this.controls.dampingFactor = 0.25;
		this.controls.screenSpacePanning = false;
		this.controls.minDistance = 1;
		this.controls.maxDistance = 100;
		this.controls.maxPolarAngle = Math.PI;

		let lastUpdateTime = 0;
		let tick = () => {
			let dt = 0;
			if (lastUpdateTime) {
				dt = (new Date().getTime() - lastUpdateTime) * 0.001;
			}
			lastUpdateTime = new Date().getTime();
			this.renderer.render(this.scene, this.camera);
			this.controls.update();
			if (update) update(dt);
			requestAnimationFrame(tick);
		};

		tick();
	}
}
