/*
Shader adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html Including comments for better clarity
*/
// fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
  precision mediump float;
 
  void main() {
    // gl_FragColor is a special variable a fragment shader
    // is responsible for setting
    gl_FragColor = vec4(0.2, 0.6, 0.2, 1); // return reddish-purple
  }