// an attribute will receive data from a buffer
  attribute vec3 a_position;

  uniform mat4 model;
  varying vec4 colour;
 
  // all shaders have a main function
  void main() {
 
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    gl_Position = (model * vec4(a_position, 1.0));
    colour = vec4(0.5 * a_position.x, 0.5 * a_position.y, 0.5 * a_position.z, 1.0);
  }

