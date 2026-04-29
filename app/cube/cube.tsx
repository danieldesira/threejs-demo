import { useEffect, useRef } from "react";
import { createCube, setupSceneAndCamera } from "./rendering";

export function Cube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scene, camera, renderer } = setupSceneAndCamera(
        containerRef.current,
      );
      createCube(scene, camera);

      const animate = () => {
        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);
    }
  }, [containerRef]);

  return (
    <div className="flex flex-col gap-2 p-5">
      <header className="text-2xl font-bold">Cube</header>
      <div ref={containerRef} className="flex flex-col gap-1">
        <div className="flex flex-wrap gap-2"></div>
      </div>
    </div>
  );
}
