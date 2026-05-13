import * as THREE from "three";

export const cameraDistance = 5;

export const setupSceneAndCamera = (
  container: HTMLDivElement | null,
  dimensions: { width: number; height: number },
) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    dimensions.width / dimensions.height,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(dimensions.width, dimensions.height);
  container?.appendChild(renderer.domElement);
  renderer.render(scene, camera);
  return { scene, camera, renderer };
};

export const createCube = (
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
) => {
  const geometry = new THREE.BoxGeometry();
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  const cube = new THREE.Mesh(geometry, cubeMaterial);
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
  });
  const outline = new THREE.Mesh(geometry, outlineMaterial);
  scene.add(cube);
  scene.add(outline);
  camera.position.z = 5;
  return { cube, outline, camera };
};

export type CubeOutlineValues = ReturnType<typeof createCube>;

export const pointCameraAtOrigin = (
  camera: THREE.PerspectiveCamera | undefined,
) => camera?.lookAt(0, 0, 0);

export const moveCamera = (
  camera: THREE.PerspectiveCamera | undefined,
  angleX: number,
  angleY: number,
) => {
  camera?.position.set(
    Math.cos(angleX) * cameraDistance,
    Math.sin(angleY) * cameraDistance,
    cameraDistance,
  );
};
