import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(2, 2, 3);
scene.add( light );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene, camera);
document.body.appendChild( renderer.domElement );

