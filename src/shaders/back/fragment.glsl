varying vec2 vUv;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main(){
  vec2 gridUv = vec2(floor(vUv.x * 40.0) / 40.0, floor(vUv.y * 60.0) / 60.0);
  float strenght = random(gridUv);
  gl_FragColor = vec4(0.54 * strenght, 0.37 * strenght, 0.53 * strenght, 1.0);
}