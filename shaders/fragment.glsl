// fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
  precision mediump float;

  varying vec4 colour;
  varying vec3 v_normal;

  vec3 lightdir = vec3(0.2, 0.2, 1);
 
  void main() {
    // gl_FragColor is a special variable a fragment shader
    // is responsible for setting

    vec3 normal = normalize(v_normal);
    float light = dot(normal, lightdir);

    gl_FragColor = vec4(colour.x, colour.y, colour.z, 1);
    gl_FragColor.rgb *= light;
  }