#version 120 // glsl version 1.2 for OpenGL 2.1
uniform float myVar;
uniform float myPositionX;
uniform float myPositionY;
uniform float myTime;

void main(void) {
    // Fragment shader should output into gl_FragColor an RGBA:
    float currentTime = cos(myTime)* cos(myTime);
    vec4 result = vec4(1.0,0.0, 0.0, 1.0);
    result.x = gl_TexCoord[0].x +currentTime;
    result.y = gl_TexCoord[0].y;
    result.z = currentTime;


    float diffx = ((gl_TexCoord[0].x*1280) - myPositionX)*((gl_TexCoord[0].x*1280) - myPositionX);
    float diffy = ((720 - gl_TexCoord[0].y*720) - myPositionY)*((720 - gl_TexCoord[0].y*720) - myPositionY);

    float distance = sqrt(diffx + diffy);

    if(distance <= 10)result = vec4(1.0, 1.0, 1.0, 1.0);
    
    
    gl_FragColor = result;
}
