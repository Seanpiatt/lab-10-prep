#version 120 // glsl version 1.2 for OpenGL 2.1
uniform sampler2D texture;
void main() {
    // Fragment shader should output into gl_FragColor an RGBA:
    vec4 result = vec4(1.0,0.0, 0.0, 1.0);
   
    vec2 currentFrag = gl_TexCoord[0].xy;
    float totalX = 0;
    float totalY = 0;
    // lookup the pixel in the texture
    vec4 pixelTotal;
    for(float x = -2.0; x <= 2.0; x++){
        for(float y = -2.0; y<= 2.0; y++){
            vec2 offset = vec2(x/1280, y/720);
            pixelTotal += texture2D(texture, gl_TexCoord[0].xy + offset);
        }   
    }


    // multiply it by the color
    gl_FragColor =  pixelTotal/25;

}
