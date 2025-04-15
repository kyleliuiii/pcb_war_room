<script setup>
const router = useRouter();
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const props = defineProps(["modelFile"]);
const modelContainerRef = ref(null);
const label = ref(null);
const emit = defineEmits();
onMounted(() => {
  let mixer;
  const clock = new THREE.Clock();
  const container = modelContainerRef.value;
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x000000);
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(renderer),
    0.04
  ).texture;
  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  camera.position.set(5, 2, 8);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
  if (props.modelFile === "building5.glb") {
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
  }

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("jsm/libs/draco/gltf/");
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    props.modelFile,
    (gltf) => {
      const model = gltf.scene;
      if (props.modelFile !== "building5.glb") {
        model.position.set(-1.5, 0.5, 0);
        model.rotation.set(Math.PI / 4, 0, -Math.PI / 8);
        model.scale.set(0.4, 0.4, 0.4);
      } else {
        model.position.set(-4, -1, 0);
        // model.rotation.set(0, 0, 0);
        // model.rotation.set(Math.PI / 4, 0, -Math.PI / 8);
        model.scale.set(0.0012, 0.0012, 0.0012);
      }
      scene.add(model);
      mixer = new THREE.AnimationMixer(model);
      animate();
      emit("loaded");
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );

  window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  const animate = () => {
    requestAnimationFrame(animate);
    if (props.modelFile === "building5.glb") {
      updateLabelPosition(scene, camera);
    }
    const delta = clock.getDelta();
    mixer.update(delta);
    controls.update();
    renderer.render(scene, camera);
  };
  const updateLabelPosition = (object, camera) => {
    const vector = new THREE.Vector3();
    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    object.updateMatrixWorld();
    vector.setFromMatrixPosition(object.matrixWorld);
    vector.project(camera);

    vector.x = vector.x * widthHalf + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;

    label.value.style.left = vector.x + "px";
    label.value.style.top = vector.y + "px";
  };
});
</script>
<template>
  <div>
    <div ref="modelContainerRef"></div>

    <div
      ref="label"
      class="absolute translate-x-[20rem] cursor-pointer -translate-y-80 bg-transparent w-[30rem] h-[60rem] border-1"
      v-if="modelFile == 'building5.glb'"
      @click="router.push('/s1')"
    ></div>
  </div>
</template>
