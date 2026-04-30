import { useEffect, useRef } from "react";
import { createCube, setupSceneAndCamera } from "./rendering";
import { Dropdown } from "~/controls/dropdown";
import * as THREE from "three";
import { Button } from "~/controls/button";
import { Slider } from "~/controls/slider";

export function Cube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scene, camera, renderer } = setupSceneAndCamera(
        containerRef.current,
      );
      cubeRef.current = createCube(scene, camera);

      const animate = () => {
        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);
    }
  }, [containerRef]);

  const eventHandlers = {
    handleColorChange(option: string) {
      const material = cubeRef.current?.material as THREE.MeshStandardMaterial;
      material.color.set(new THREE.Color(parseInt(option, 16)));
    },
    rotateX() {
      cubeRef.current?.rotateX(0.1);
    },
    rotateY() {
      cubeRef.current?.rotateY(0.1);
    },
    rotateZ() {
      cubeRef.current?.rotateY(0.1);
    },
    scaleX(value: number) {
      cubeRef.current?.scale.setX(value);
    },
    scaleY(value: number) {
      cubeRef.current?.scale.setY(value);
    },
    scaleZ(value: number) {
      cubeRef.current?.scale.setZ(value);
    },
  };

  return (
    <div className="flex flex-col gap-2 p-5">
      <header className="text-2xl font-bold">Cube</header>
      <div ref={containerRef} className="flex gap-1">
        <div className="flex flex-col gap-2">
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
            onChange={eventHandlers.rotateY}
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
