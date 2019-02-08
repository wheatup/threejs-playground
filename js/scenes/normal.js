let cube;

function addCube() {}

function start() {
	let geometry = new THREE.SphereGeometry(2, 30, 30);
	let material = new THREE.MeshNormalMaterial();
	cube = new THREE.Mesh(geometry, material);
	normals = new THREE.FaceNormalsHelper(cube, 0.5);

	scene.add(cube);
	scene.add(normals);
}


function update(dt) {}
