// fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
  precision mediump float;

  varying vec4 colour;
 
  void main() {
    // gl_FragColor is a special variable a fragment shader
    // is responsible for setting
    vec4 col = vec4(abs(colour.x), 1, 1 ,1);
    gl_FragColor = colour; 
  }