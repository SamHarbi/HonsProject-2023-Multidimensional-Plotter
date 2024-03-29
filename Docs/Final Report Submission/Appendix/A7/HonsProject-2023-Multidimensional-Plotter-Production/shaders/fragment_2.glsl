precision mediump float;

uniform int light_toggle;
uniform sampler2D u_texture;

varying vec4 colour;
varying vec3 v_normal;
varying vec4 position;
varying vec2 v_texcoord;

vec3 lightdir = vec3(0.2, 0.2, 1);
 
void main() {
    vec3 normal = normalize(v_normal);
    float light = dot(normal, lightdir);

    if(light_toggle == 1)
    {
          vec4 col = texture2D(u_texture, v_texcoord) * colour;
          if(col == vec4(0, 0, 0, 1))
          {
              discard;
          }


          gl_FragColor = texture2D(u_texture, v_texcoord) * colour;
    }
    else
    {
      //light = dot(normal, position.xyz);
      gl_FragColor = colour;
    }
}