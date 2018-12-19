import './SnowBackground.scss';

import React, { Component } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

export class SnowBackground extends Component {
  state = {};

  scene: Scene;
  mount: HTMLDivElement;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  cube: Mesh;
  frameId: any;

  componentDidMount() {
    // Get size of the render
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // Create Scene & Camera
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    // Set & mount Renderer
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    // this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    // Add simple Cube
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: '#433F81' });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);

    // Start animation cycle
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div className='SnowBackground' ref={(mount) => (this.mount = mount!)} />
    );
  }
}

export default SnowBackground;
