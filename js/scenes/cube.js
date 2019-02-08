let totalTime = 0;

function addCube() {
		let geometry = new THREE.BoxGeometry(1, 1, 1);
		let material = new THREE.MeshBasicMaterial({ color: 0x333333 });
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
	};

function start() {
	addCube();
}

function update(dt) {
	cube.position.x = Math.sin(totalTime * 2) * 2;
	cube.rotation.y += dt * 5;
	totalTime += dt;
}