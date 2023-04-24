/*
  Billboarding based on https://stackoverflow.com/questions/41767490/how-to-transform-vertices-in-vertex-shader-to-get-a-3d-billboard
*/
attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec2 a_texture;

uniform mat4 model, projection, view;
uniform vec3 camRight_WS, camUp_WS;
uniform vec3 in_colour;
uniform int viewmod;

varying vec4 colour;
varying vec3 v_normal;
varying vec4 position;
varying vec2 v_texcoord;
 

void main() {
 
    if(viewmod >= 0) // Render with Billboarding
    {
      gl_Position = projection * (view * model * vec4(a_position, 5 * viewmod) + vec4(a_position.x * 0.15, a_position.y * 0.15, a_position.z * 0.15, 1));
    }
    else // No Billboarding
    {
      gl_Position = projection * view * model * vec4(a_position, 1);
    }
    

    //position = projection * view * model * vec4(a_position, 1);
    
    colour = vec4(in_colour, 1.0);
    v_normal = a_normal;
    v_texcoord = a_texture;
}

