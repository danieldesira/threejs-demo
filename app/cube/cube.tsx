import { useEffect, useRef, useState } from "react";
import {
  createCube,
  setupSceneAndCamera,
  type CubeOutlineValues,
} from "./rendering";
import { Dropdown } from "~/controls/dropdown";
import * as THREE from "three";
import { Button } from "~/controls/button";
import { Slider } from "~/controls/slider";
import { Checkbox } from "~/controls/checkbox";
import useAuthenticationStore from "~/store";
import { useNavigate } from "react-router";

export function Cube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlContainerRef = useRef<HTMLDivElement>(null);
  const cubeOutlineRef = useRef<CubeOutlineValues>(null);
  const [color, setColor] = useState("0x00ff00");
  const navigate = useNavigate();
  const resetAuth = useAuthenticationStore((state) => state.reset);

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

      const resize = () => {
        const width =
          window.innerWidth - (controlContainerRef.current?.clientWidth ?? 0);
        const height = window.innerHeight;
        renderer.setSize(width, height);
      };

      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  const controlHandlers = {
    handleColorChange(option: string) {
      const cubeMaterial = cubeOutlineRef.current?.cube.material!;
      cubeMaterial.color.set(new THREE.Color(parseInt(option, 16)));
      setColor(option);
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
    showHideOutline(checked: boolean) {
      const outlineMaterial = cubeOutlineRef.current?.outline.material!;
      if (checked) {
        outlineMaterial.color.set(new THREE.Color(parseInt("0x000000", 16)));
      } else {
        outlineMaterial.color.set(new THREE.Color(parseInt(color, 16)));
      }
    },
    logout() {
      resetAuth();
      navigate("/login");
    },
  };

  return (
    <div ref={containerRef} className="flex gap-1">
      <div ref={controlContainerRef} className="flex flex-col gap-5 p-5">
        <header className="text-2xl font-bold">Cube</header>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <Dropdown
              label="Color"
              id="color-dropdown"
              options={[
                { value: "0x00ff00", label: "Green" },
                { value: "0xff0000", label: "Red" },
                { value: "0x0000ff", label: "Blue" },
              ]}
              onSelect={controlHandlers.handleColorChange}
            />
            <Button label="Rotate X" clickHandler={controlHandlers.rotateX} />
            <Button label="Rotate Y" clickHandler={controlHandlers.rotateY} />
            <Button label="Rotate Z" clickHandler={controlHandlers.rotateZ} />
            <Slider
              label="Scale X (Width)"
              id="scale-x"
              onChange={controlHandlers.scaleX}
            />
            <Slider
              label="Scale Y (Height)"
              id="scale-y"
              onChange={controlHandlers.scaleY}
            />
            <Slider
              label="Scale Z (Depth)"
              id="scale-z"
              onChange={controlHandlers.scaleZ}
            />
            <Checkbox
              label="Show outline"
              id="show-outline"
              onChange={controlHandlers.showHideOutline}
              defaultChecked
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">
              {useAuthenticationStore((state) => state.userEmail)}
            </span>
            <Button label="Logout" clickHandler={controlHandlers.logout} />
          </div>
        </div>
      </div>
    </div>
  );
}
