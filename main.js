
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";   //corrected the path here

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect_ratio = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
camera.position.z=2;
const scene = new THREE.Scene();
const geometry = new THREE.IcosahedronGeometry(1.0,2);
const mat= new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});

const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemilight);
const mesh = new THREE.Mesh(geometry, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wireMesh = new THREE.Mesh(geometry, wireMat);
mesh.add(wireMesh);
wireMesh.scale.setScalar(1.001);
mesh.scale.setScalar(1.1);

function animate(){
    requestAnimationFrame(animate);
    //   mesh.scale.setScalar(Math.cos(t*0.001 +1));   //t not defined here so this won't work
    //   mesh.rotation.y = t*0.001;
    renderer.render(scene, camera);
}
animate();
renderer.render(scene, camera);
const controls = new OrbitControls(camera, renderer.domElement);  //this had scope issue, define it after camera rendered have been defined
