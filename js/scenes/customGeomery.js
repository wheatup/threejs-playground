let geometry, material, shape, time = 0;

function start(){
	geometry = new THREE.Geometry();

	geometry.vertices.push(new THREE.Vector3(0, 0, 3));
	geometry.vertices.push(new THREE.Vector3(0, 0, -3));
	geometry.vertices.push(new THREE.Vector3(2, 0, 0));
	geometry.vertices.push(new THREE.Vector3(-2, 0, 0));

	geometry.faces.push(new THREE.Face3(0, 1, 2));
	geometry.faces.push(new THREE.Face3(0, 1, 3));

	material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		side: THREE.DoubleSide,
		wireframe: true
	});

	shape = new THREE.Mesh(geometry, material);
	scene.add(shape);
}

function update(dt){
	time += dt;
	geometry.vertices[2].y = Math.sin(time * 16) * 2;
	geometry.vertices[3].y = Math.sin(time * 16) * 2;
	geometry.verticesNeedUpdate = true;
}