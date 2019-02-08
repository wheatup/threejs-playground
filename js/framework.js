var scene, camera, renderer, controls;

window.onload = function() {
	let _hasUpdate = false;

	let init = function() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x556677);
		camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.set(16, 8, 0);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		controls = new THREE.OrbitControls(camera, renderer.domElement);
		//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
		controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.dampingFactor = 0.25;
		controls.screenSpacePanning = false;
		controls.minDistance = 1;
		controls.maxDistance = 100;
		controls.maxPolarAngle = Math.PI;


		let container = document.createElement('div');
		container.className = 'container';
		container.style.width = '100vw';
		container.style.height = '100vh';
		container.style.overflow = 'hidden';
		container.appendChild(renderer.domElement);
		document.body.appendChild(container);

		window.addEventListener('resize', onWindowResize, false);

		_hasUpdate = typeof update === 'function';
	};

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	let lastUpdateTime = 0;
	let tick = function() {
		let dt = 0;
		if (lastUpdateTime) {
			dt = (new Date().getTime() - lastUpdateTime) * 0.001;
		}
		lastUpdateTime = new Date().getTime();
		renderer.render(scene, camera);
		if (_hasUpdate) {
			update(dt);
		}
		controls.update();
		requestAnimationFrame(tick);
	};

	init();
	if (typeof start === 'function') {
		start();
	}
	tick();
};
