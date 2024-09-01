import { Asset, Main, PerspectiveCameraAuto } from '@three.ez/main';
import { ACESFilmicToneMapping, AmbientLight, BufferGeometry, DirectionalLight, FogExp2, Mesh, MeshLambertMaterial, MeshStandardMaterial, PCFSoftShadowMap, PlaneGeometry, Scene, Vector3 } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { InstancedMesh2 } from '../src/index.js';

const count = 1000000;
const terrainSize = 125000;

const main = new Main({ rendererParameters: { antialias: true } }); // init renderer and other stuff
main.renderer.toneMapping = ACESFilmicToneMapping;
main.renderer.toneMappingExposure = 0.5;
main.renderer.shadowMap.enabled = true;
main.renderer.shadowMap.type = PCFSoftShadowMap;

const camera = new PerspectiveCameraAuto(70, 0.1, 3000).translateY(100);
const scene = new Scene();

const treeGLTF = (await Asset.load<GLTF>(GLTFLoader, 'tree.glb')).scene.children[0] as Mesh<BufferGeometry, MeshStandardMaterial>;

const trees = new InstancedMesh2(main.renderer, count, treeGLTF.geometry, treeGLTF.material);
trees.castShadow = true;
trees.cursor = 'pointer';

trees.createInstances((obj, index) => {
  obj.position.setX(Math.random() * terrainSize - terrainSize / 2).setZ(Math.random() * terrainSize - terrainSize / 2);
  obj.scale.setScalar(Math.random() * 0.1 + 0.1);
  obj.rotateY(Math.random() * Math.PI * 2).rotateZ(Math.random() * 0.3 - 0.15);
});

trees.computeBVH();

trees.on('click', (e) => {
  trees.instances[e.intersection.instanceId].visible = false;
});

const ground = new Mesh(new PlaneGeometry(terrainSize, terrainSize, 10, 10), new MeshLambertMaterial({ color: 0x004622 }));
ground.interceptByRaycaster = false;
ground.receiveShadow = true;
ground.rotateX(Math.PI / -2);

const sun = new Vector3();
const sky = new Sky();
sky.scale.setScalar(450000);
const uniforms = sky.material.uniforms;
uniforms['turbidity'].value = 5;
uniforms['rayleigh'].value = 2;

sky.on('animate', (e) => {
  sun.setFromSphericalCoords(1, Math.PI / -1.9 + e.total * 0.02, Math.PI / 1.4);
  uniforms['sunPosition'].value.copy(sun);
});

scene.fog = new FogExp2('white', 0.0004);
scene.on('animate', (e) => scene.fog.color.setHSL(0, 0, sun.y));

const dirLight = new DirectionalLight();
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(1024, 1024);
dirLight.shadow.camera.left = -1500;
dirLight.shadow.camera.right = 1500;
dirLight.shadow.camera.top = 1500;
dirLight.shadow.camera.bottom = -1500;
dirLight.shadow.camera.far = 5000;
dirLight.shadow.camera.updateProjectionMatrix();

const sunOffset = new Vector3();
dirLight.on('animate', (e) => {
  dirLight.intensity = sun.y > 0.05 ? 10 : Math.max(0, (sun.y / 0.05) * 10);
  sunOffset.copy(sun).multiplyScalar(1000);
  dirLight.position.copy(camera.position).add(sunOffset);
  dirLight.target.position.copy(camera.position).sub(sunOffset);
});

scene.add(sky, trees, ground, new AmbientLight(), dirLight, dirLight.target);

main.createView({ scene, camera, onAfterRender: () => treeCount.updateDisplay() });

const controls = new MapControls(camera, main.renderer.domElement);
controls.maxPolarAngle = Math.PI / 2.1;
controls.minDistance = 10;
controls.maxDistance = 100;
controls.panSpeed = 10;
controls.target.set(-25, 100, 100);
controls.update();

const gui = new GUI();
gui.add(trees.instances as any, 'length').name('instances total').disable();
const treeCount = gui.add(trees, 'count').name('instances rendered').disable();
gui.add(camera, 'far', 2000, 10000, 100).name('camera far').onChange(() => camera.updateProjectionMatrix());