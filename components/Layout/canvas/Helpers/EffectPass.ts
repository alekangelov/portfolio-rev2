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

const shader = {
  vertexShader: `uniform float scale;
      uniform float factor;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * factor * 2.0) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
  fragmentShader: `uniform sampler2D tex;
      uniform float factor;
      uniform float scale;
      varying vec2 vUv;
      void main() {
        float angle = 0.0;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = factor / 50.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tex, p + offset);
        vec4 cga = texture2D(tex, p);
        vec4 cb = texture2D(tex, p - offset);
        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      }`,
  uniforms: {
    byp: { value: 0 },
    tex: { value: null },
    scale: { value: 0 },
    factor: { value: 0 },
    resolution: { value: new Vector2(64, 64) },
  },
};

export class EffectPass extends Pass {
  constructor(dt_size = 64) {
    super();
    (this as any).uniforms = UniformsUtils.clone(shader.uniforms);
    (this as any).uniforms["resolution"].value = new Vector2(dt_size, dt_size);
    (this as any).material = new ShaderMaterial({
      uniforms: (this as any).uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    });
    (this as any).camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    (this as any).scene = new Scene();
    (this as any).quad = new Mesh(
      new PlaneBufferGeometry(2, 2, 1, 1),
      null as any
    );
    (this as any).quad.frustumCulled = false; // Avoid getting clipped
    (this as any).scene.add((this as any).quad);
    (this as any).factor = 0;
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
    (this as any).uniforms["factor"].value = (this as any).factor;
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
