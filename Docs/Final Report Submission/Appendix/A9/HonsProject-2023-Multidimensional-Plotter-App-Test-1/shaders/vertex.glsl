/*
Shader adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html Including comments for better clarity
*/
// an attribute will receive data from a buffer
  attribute vec3 a_position;
  attribute vec3 a_normal;

  uniform mat4 model, projection, view;
  varying vec4 colour;
  varying vec3 v_normal;
 
  // all shaders have a main function
  void main() {
 
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    gl_Position = projection * view * model * vec4(a_position, 1);
    
    colour = vec4(1, 1, 0.5, 1.0);
    v_normal = a_normal;
  }

