// Author: Zoe Wu
// Reference: https://thebookofshaders.com/glossary/?search=mix
// Title: Week 2

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

// two different colors defined as variables
vec3 colorA = vec3(0.970,0.293,0.031);
vec3 colorB = vec3(0.995,0.841,0.311);


void main() {
    // normalized coordinates
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // gradient among x-axis + change dynamically based on time
    vec3 pct = vec3(st.x) + abs(sin(u_time));
	
    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color,1.0);
}
