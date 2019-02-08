import * as THREE from 'three';
import Engine from './core/engine';
import Playground from './scenes/playground';

export default class App {
	constructor() {
		this.engine = new Engine(this.update.bind(this));
		let container = document.createElement('div');
		container.className = 'container';
		container.style.width = '100vw';
		container.style.height = '100vh';
		container.style.overflow = 'hidden';
		container.appendChild(this.engine.renderer.domElement);
		document.body.appendChild(container);
		window.addEventListener('resize', this.onWindowResize, false);
		this.start();
	}

	onWindowResize() {
		this.engine.camera.aspect = window.innerWidth / window.innerHeight;
		this.engine.camera.updateProjectionMatrix();
		this.engine.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	start() {
		this.scene = new Playground(this.engine);
	}

	update(dt) {
		if (this.scene) {
			this.scene.update(dt);
		}
	}
}
