import { useState, useEffect, useCallback } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

import styles from "./index.scss";

const Main = () => {
  const [scene, setScene] = useState<Scene>();
  const [camera, setCamera] = useState<PerspectiveCamera>();
  const [renderer, setRenderer] = useState<WebGLRenderer>();

  const animate = useCallback(() => {
    if (!renderer || !scene || !camera) {
      return;
    }

    camera.rotation.z += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }, [renderer, scene, camera]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const _scene = new Scene();
    const _camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    const _renderer = new WebGLRenderer({
      canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
      antialias: true,
      alpha: true,
    });
    _renderer.setSize(innerWidth, innerHeight);
    _renderer.setClearColor(0x000000);

    setScene(_scene);
    setCamera(_camera);
    setRenderer(_renderer);
  }, []);

  useEffect(() => {
    if (!scene || !camera) {
      return;
    }

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
  }, [scene, camera]);

  animate();

  return (
    <section id="main">
      <canvas id="canvas" className={styles.canvas} />
    </section>
  );
};

export default Main;
