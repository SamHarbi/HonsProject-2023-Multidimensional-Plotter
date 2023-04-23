attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec2 a_texture;

uniform mat4 model, projection, view;
uniform vec3 in_colour;
uniform vec3 id;

varying vec4 colour;
varying vec3 v_normal;
varying vec4 position;
varying vec2 v_texcoord;
 
// all shaders have a main function
void main() {
 
    gl_Position = projection * view * model * vec4(a_position, 1);
    gl_PointSize = 15.0;

    position = gl_Position;
    
    if(id.x == -1.0)
    {
      colour = vec4(in_colour, 1.0);
    }
    else
    {
      // Inspired by the following:
      // https://stackoverflow.com/questions/16905302/webgl-and-glsl-picking
      // http://www.opengl-tutorial.org/miscellaneous/clicking-on-objects/picking-with-an-opengl-hack/
      colour = vec4(id[0]/255.0, id[1]/255.0, id[2]/255.0, 256);
    }
    v_normal = a_normal;
    v_texcoord = a_texture;
}

