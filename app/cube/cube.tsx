import { useEffect, useRef } from "react";
import {
  createCube,
  setupSceneAndCamera,
  type CubeOutlineValues,
} from "./rendering";
import { Dropdown } from "~/controls/dropdown";
import * as THREE from "three";
import { Button } from "~/controls/button";
import { Slider } from "~/controls/slider";

export function Cube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlContainerRef = useRef<HTMLDivElement>(null);
  const cubeOutlineRef = useRef<CubeOutlineValues>(null);

  useEffect(() => {
    if (containerRef.current && controlContainerRef.current) {
      const { scene, camera, renderer } = setupSceneAndCamera(
        containerRef.current,
        {
          width: window.innerWidth - controlContainerRef.current?.clientWidth,
          height: window.innerHeight,
        },
      );
      cubeOutlineRef.current = createCube(scene, camera);

      const animate = () => {
        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);
    }
  }, []);

  const eventHandlers = {
    handleColorChange(option: string) {
      const cubeMaterial = cubeOutlineRef.current?.cube.material!;
      cubeMaterial.color.set(new THREE.Color(parseInt(option, 16)));
    },
    rotateX() {
      cubeOutlineRef.current?.cube.rotateX(0.1);
      cubeOutlineRef.current?.outline.rotateX(0.1);
    },
    rotateY() {
      cubeOutlineRef.current?.cube.rotateY(0.1);
      cubeOutlineRef.current?.outline.rotateY(0.1);
    },
    rotateZ() {
      cubeOutlineRef.current?.cube.rotateZ(0.1);
      cubeOutlineRef.current?.outline.rotateZ(0.1);
    },
    scaleX(value: number) {
      cubeOutlineRef.current?.cube.scale.setX(value);
      cubeOutlineRef.current?.outline.scale.setX(value);
    },
    scaleY(value: number) {
      cubeOutlineRef.current?.cube.scale.setY(value);
      cubeOutlineRef.current?.outline.scale.setY(value);
    },
    scaleZ(value: number) {
      cubeOutlineRef.current?.cube.scale.setZ(value);
      cubeOutlineRef.current?.outline.scale.setZ(value);
    },
  };

  return (
    <div ref={containerRef} className="flex gap-1">
      <div ref={controlContainerRef} className="flex flex-col gap-5 p-5">
        <header className="text-2xl font-bold">Cube</header>
        <div ref={controlContainerRef} className="flex flex-col gap-2">
          <Dropdown
            label="Color"
            id="color-dropdown"
            options={[
              { value: "0x00ff00", label: "Green" },
              { value: "0xff0000", label: "Red" },
              { value: "0x0000ff", label: "Blue" },
            ]}
            onSelect={eventHandlers.handleColorChange}
          />
          <Button label="Rotate X" clickHandler={eventHandlers.rotateX} />
          <Button label="Rotate Y" clickHandler={eventHandlers.rotateY} />
          <Button label="Rotate Z" clickHandler={eventHandlers.rotateZ} />
          <Slider
            label="Scale X (Width)"
            id="scale-x"
            onChange={eventHandlers.scaleX}
          />
          <Slider
            label="Scale Y (Height)"
            id="scale-y"
            onChange={eventHandlers.scaleY}
          />
          <Slider
            label="Scale Z (Depth)"
            id="scale-z"
            onChange={eventHandlers.scaleZ}
          />
        </div>
      </div>
    </div>
  );
}
