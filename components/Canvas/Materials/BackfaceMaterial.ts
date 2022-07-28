import { ShaderMaterial, BackSide } from "three";
import { fragmentShader, vertexShader } from "./constants";

export default class BackfaceMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: BackSide,
    });
  }
}
