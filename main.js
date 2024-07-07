import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
console.log(THREE);

//canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// size
const size = {
   width: window.innerWidth,
   height: window.innerHeight
}

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({colour: 0xff00f0});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//light
const light = new THREE.HemisphereLight(0xff0000, 0xff000, 1);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
camera.position.y = 0.8;
// camera.position.x = 2;
scene.add(camera);


//renderer
const renderer = new THREE.WebGLRenderer({
   canvas: canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

//orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// scene.add(controls);