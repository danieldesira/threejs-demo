import { useEffect, useRef } from "react";
import { createCube, setupSceneAndCamera } from "./rendering";
import { Dropdown } from "~/controls/dropdown";
import * as THREE from "three";
import { Button } from "~/controls/button";

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

  const handleColorChange = (option: string) => {
    const material = cubeRef.current?.material as THREE.MeshStandardMaterial;
    material.color.set(new THREE.Color(parseInt(option, 16)));
  };

  return (
    <div className="flex flex-col gap-2 p-5">
      <header className="text-2xl font-bold">Cube</header>
      <div ref={containerRef} className="flex gap-1">
        <div className="flex flex-wrap gap-2">
          <Dropdown
            label="Color"
            id="color-dropdown"
            options={[
              { value: "0x00ff00", label: "Green" },
              { value: "0xff0000", label: "Red" },
              { value: "0x0000ff", label: "Blue" },
            ]}
            onSelect={handleColorChange}
          />
          <Button
            label="Rotate X"
            clickHandler={() => cubeRef.current?.rotateX(0.1)}
          />
          <Button
            label="Rotate Y"
            clickHandler={() => cubeRef.current?.rotateY(0.1)}
          />
          <Button
            label="Rotate Z"
            clickHandler={() => cubeRef.current?.rotateZ(0.1)}
          />
        </div>
      </div>
    </div>
  );
}
