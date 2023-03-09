// fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
  precision highp float;

  uniform int light_toggle;
  uniform sampler2D u_texture;

  varying vec4 colour;
  varying vec3 v_normal;
  varying vec4 position;
  varying vec2 v_texcoord;

  vec3 lightdir = vec3(0.2, 0.2, 1);
 
  void main() {
    // gl_FragColor is a special variable a fragment shader
    // is responsible for setting

    if(light_toggle == 1)
    {
          vec3 normal = normalize(v_normal);
          float light = dot(normal, lightdir);
          gl_FragColor = vec4(colour.x, colour.y, position.z, 1) * texture2D(u_texture, v_texcoord);
          gl_FragColor.rgb *= light;
          //gl_FragColor = texture2D(u_texture, v_texcoord);
    }
    else
    {
      //light = dot(normal, position.xyz);
      gl_FragColor = colour;
    }
  }