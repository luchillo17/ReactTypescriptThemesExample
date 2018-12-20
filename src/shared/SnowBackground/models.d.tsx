declare module 'three-gpu-particle-system' {
  interface GPUParticleOptions {
    colorRandomness?: number;
    lifetime?: number;
    maxParticles?: number;
    positionRandomness?: number;
    size?: number;
    sizeRandomness?: number;
    turbulence?: number;
    velocityRandomness?: number;
  }

  export default function(three: any): new (options: GPUParticleOptions) => any;
}
