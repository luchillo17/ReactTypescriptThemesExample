import './SnowBackground.scss';

import React, { Component } from 'react';
import Three, {
  ParticleSystem,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import GPUPlugin from 'three-gpu-particle-system';

const GPUParticleSystem = GPUPlugin(Three);

export class SnowBackground extends Component {
  state = {};

  camera: PerspectiveCamera;
  frameId: any;
  mount: HTMLDivElement;
  particleSystem: ParticleSystem;
  renderer: WebGLRenderer;
  scene: Scene;

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

    // Add Particle system
    this.particleSystem = new GPUParticleSystem({ maxParticles: 1000 });
    this.scene.add(this.particleSystem);

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
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
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
