

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b8fde51a.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.78e357c5.js","_app/immutable/chunks/singletons.feb776ee.js"];
export const stylesheets = [];
export const fonts = [];
