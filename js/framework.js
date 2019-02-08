var scene,
	camera,
	renderer,
	start,
	update;

window.onload = function() {
	let init = function() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x556677);
		var viewportHeight;
		var viewportWidth;
		if (document.compatMode === 'BackCompat') {
			viewportHeight = document.body.clientHeight;
			viewportWidth = document.body.clientWidth;
		} else {
			viewportHeight = document.documentElement.clientHeight;
			viewportWidth = document.documentElement.clientWidth;
		}

		camera = new THREE.PerspectiveCamera(30, viewportWidth / viewportHeight, 1, 1000);
		camera.position.z = 5;

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(viewportWidth, viewportHeight);

		let container = document.createElement('div');
		container.className = 'container';
		container.style.width = '100vw';
		container.style.height = '100vh';
		container.style.overflow = 'hidden';
		container.appendChild(renderer.domElement);
		document.body.appendChild(container);
	};

	// main animation loop - calls 50-60 in a second.
	let lastUpdateTime = 0;
	let mainLoop = function() {
		let dt = 0;
		if (lastUpdateTime) {
			dt = (new Date().getTime() - lastUpdateTime) * 0.001;
		}
		lastUpdateTime = new Date().getTime();
		renderer.render(scene, camera);
		if (update) {
			update(dt);
		}
		requestAnimationFrame(mainLoop);
	};

	init();
	if (start) {
		start();
	}
	mainLoop();
};