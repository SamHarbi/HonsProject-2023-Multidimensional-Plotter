/*
Shader adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html Including comments for better clarity
*/
// an attribute will receive data from a buffer
  attribute vec3 a_position;
  attribute vec3 a_normal;
  attribute vec2 a_texture;

  uniform mat4 model, projection, view;
  uniform vec3 in_colour;

  varying vec4 colour;
  varying vec3 v_normal;
  varying vec4 position;
  varying vec2 v_texcoord;
 
  // all shaders have a main function
  void main() {
 
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    gl_Position = projection * view * model * vec4(a_position, 1);

    position = gl_Position;
    
    colour = vec4(in_colour, 1.0);
    v_normal = a_normal;
    v_texcoord = a_texture;
  }

