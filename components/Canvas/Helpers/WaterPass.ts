/**  @author vergil Wang */

import {
  Mesh,
  OrthographicCamera,
  PlaneBufferGeometry,
  Scene,
  ShaderMaterial,
  UniformsUtils,
  Vector2,
} from "three";
import { Pass } from "three/examples/jsm/postprocessing/Pass";

const WaterShader = {
  uniforms: {
    byp: { value: 0 },
    tex: { type: "t", value: null },
    time: { type: "f", value: 0.0 },
    factor: { type: "f", value: 0.0 },
    resolution: { type: "v2", value: null },
  },
  vertexShader: `varying vec2 vUv;
    void main(){  
      vUv = uv; 
      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
    }`,
  fragmentShader: `uniform int byp; //should we apply the glitch ?
    uniform float time;
    uniform float factor;
    uniform vec2 resolution;
    uniform sampler2D tex;
    varying vec2 vUv;
    void main() {  
      if (byp<1) {
        vec2 uv1 = vUv;
        vec2 uv = gl_FragCoord.xy/resolution.xy;
        float frequency = 6.0;
        float amplitude = 0.015 * factor;
        float x = uv1.y * frequency + time * .7; 
        float y = uv1.x * frequency + time * .3;
        uv1.x += cos(x+y) * amplitude * cos(y);
        uv1.y += sin(x-y) * amplitude * cos(y);
        vec4 rgba = texture2D(tex, uv1);
        gl_FragColor = rgba;
      } else {
        gl_FragColor = texture2D(tex, vUv);
      }
    }`,
};

export class WaterPass extends Pass {
  constructor(dt_size = 64) {
    super();
    (this as any).uniforms = UniformsUtils.clone(WaterShader.uniforms);
    (this as any).uniforms["resolution"].value = new Vector2(dt_size, dt_size);
    (this as any).material = new ShaderMaterial({
      uniforms: (this as any).uniforms,
      vertexShader: WaterShader.vertexShader,
      fragmentShader: WaterShader.fragmentShader,
    });
    (this as any).camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    (this as any).scene = new Scene();
    (this as any).quad = new Mesh(new PlaneBufferGeometry(2, 2), null as any);
    (this as any).quad.frustumCulled = false; // Avoid getting clipped
    (this as any).scene.add((this as any).quad);
    (this as any).factor = 0;
    (this as any).time = 0;
  }

  render(
    renderer: any,
    writeBuffer: any,
    readBuffer: any,
    deltaTime: any,
    maskActive: any
  ) {
    const factor = Math.max(0, (this as any).factor);
    (this as any).uniforms["byp"].value = factor ? 0 : 1;
    (this as any).uniforms["tex"].value = readBuffer.texture;
    (this as any).uniforms["time"].value = (this as any).time;
    (this as any).uniforms["factor"].value = (this as any).factor;
    (this as any).time += 0.05;
    (this as any).quad.material = (this as any).material;
    if ((this as any).renderToScreen) {
      renderer.setRenderTarget(null);
      renderer.render((this as any).scene, (this as any).camera);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if ((this as any).clear) renderer.clear();
      renderer.render((this as any).scene, (this as any).camera);
    }
  }
}
