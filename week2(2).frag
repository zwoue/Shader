// Author: Jeremy Rotsztain
// Course: ShaderArt (DIGF-3011, Winter 2022)
// Title: Hello World (GLSL)

// Edited by: Zoe Wu
 

#ifdef GL_ES
precision mediump float;
#endif
 
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
 
void main() {
    
	// normalized coordinates
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    

    float pct = 0.0;
    pct = distance(st,vec2(0.000,0.000));
 
    // fix for aspect ratio
    st.x *= u_resolution.x/u_resolution.y;
 
    // set a fill color with r,g,b,a 
    vec3 color = vec3(pct);
 
    // set individual rgb components
    color.r = sin(u_time-pct* 10.)*1.0;
    color.g = cos(st.x * 0.5);
    
    gl_FragColor = vec4(color, 1.);
}