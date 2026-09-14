

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.40e44602.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.78e357c5.js"];
export const stylesheets = ["_app/immutable/assets/2.a909846f.css"];
export const fonts = [];
