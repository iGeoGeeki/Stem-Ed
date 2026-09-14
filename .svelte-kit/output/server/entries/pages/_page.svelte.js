import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as each, v as validate_component, k as add_attribute, e as escape } from "../../chunks/ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowRight = Arrow_right;
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "eye" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Eye$1 = Eye;
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "facebook" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Facebook$1 = Facebook;
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Github$1 = Github;
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "lock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lock$1 = Lock;
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail$1 = Mail;
const Mountain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m8 3 4 8 5-5 5 15H2L8 3z" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "mountain" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mountain$1 = Mountain;
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "twitter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Twitter$1 = Twitter;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{font-family:'Inter', system-ui, -apple-system, sans-serif}",
  map: null
};
const bgImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-vhbuir_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-vhbuir_END -->`, ""} <div class="relative min-h-screen w-full overflow-hidden bg-slate-900"> <div class="absolute inset-0 lg:hidden"><img${add_attribute("src", bgImage, 0)} alt="" class="h-full w-full scale-110 object-cover blur-[6px] brightness-[0.5]"> <div class="absolute inset-0 bg-slate-900/40"></div></div>  <div class="relative flex min-h-screen"> <div class="relative hidden lg:block lg:w-1/2 xl:w-[55%]"><img${add_attribute("src", bgImage, 0)} alt="" class="absolute inset-0 h-full w-full object-cover"> <div class="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/20 to-transparent"></div>  <div class="absolute bottom-0 left-0 p-12 xl:p-16"><div class="flex items-center gap-3 mb-6"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">${validate_component(Mountain$1, "Mountain").$$render($$result, { class: "h-6 w-6 text-white" }, {}, {})}</div> <span class="text-2xl font-bold tracking-tight text-white" data-svelte-h="svelte-nxb6uk">Summit</span></div> <h1 class="max-w-md text-3xl font-light leading-tight text-white/90 xl:text-4xl" data-svelte-h="svelte-mplfe0">&quot;Every mountain top is within reach if you just keep climbing.&quot;</h1> <p class="mt-3 text-sm font-medium text-white/50" data-svelte-h="svelte-1r86t2h">— Barry Finlay</p></div></div>  <div class="flex min-h-screen w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 xl:w-[45%] lg:bg-slate-50 lg:px-16 xl:px-24"> <div class="mx-auto w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 lg:backdrop-blur-none"> <div class="mb-10 flex items-center gap-3 lg:hidden"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">${validate_component(Mountain$1, "Mountain").$$render($$result, { class: "h-5 w-5" }, {}, {})}</div> <span class="text-xl font-bold tracking-tight text-slate-900" data-svelte-h="svelte-12nf1nq">Summit</span></div> <div class="mx-auto w-full max-w-md"> <div class="mb-8" data-svelte-h="svelte-1s2ko3l"><h2 class="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h2> <p class="mt-2 text-sm text-slate-500">New here?
						<a href="/signup" class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Create an account</a></p></div>  <form class="space-y-5"> <div><label for="email" class="mb-1.5 block text-sm font-medium text-slate-700" data-svelte-h="svelte-ztypli">Email address</label> <div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">${validate_component(Mail$1, "Mail").$$render($$result, { class: "h-[18px] w-[18px]" }, {}, {})}</div> <input id="email" type="email" placeholder="you@example.com" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"${add_attribute("value", email, 0)}></div></div>  <div><div class="mb-1.5 flex items-center justify-between" data-svelte-h="svelte-1iidfby"><label for="password" class="block text-sm font-medium text-slate-700">Password</label> <a href="/forgot" class="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">Forgot password?</a></div> <div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">${validate_component(Lock$1, "Lock").$$render($$result, { class: "h-[18px] w-[18px]" }, {}, {})}</div> ${`<input id="password" type="password" placeholder="Enter your password" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"${add_attribute("value", password, 0)}>`} <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition-colors"${add_attribute("aria-label", "Show password", 0)}>${`${validate_component(Eye$1, "Eye").$$render($$result, { class: "h-[18px] w-[18px]" }, {}, {})}`}</button></div></div>  <div class="flex items-center gap-2.5"><button type="button" class="${"relative h-5 w-5 rounded-md border transition-all duration-200 " + escape(
    "border-slate-300 bg-white hover:border-slate-400",
    true
  )}" aria-label="Remember me">${``}</button> <span class="text-sm text-slate-600" data-svelte-h="svelte-1tpt3mh">Remember me for 30 days</span></div>  <button type="submit" class="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 focus:ring-2 focus:ring-slate-900/20 focus:outline-none active:scale-[0.98]">Sign in
						${validate_component(ArrowRight, "ArrowRight").$$render(
    $$result,
    {
      class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
    },
    {},
    {}
  )}</button></form>  <div class="my-7 flex items-center gap-4" data-svelte-h="svelte-1yiu645"><div class="h-px flex-1 bg-slate-200"></div> <span class="text-xs font-medium uppercase tracking-wide text-slate-400">or continue with</span> <div class="h-px flex-1 bg-slate-200"></div></div>  <div class="grid grid-cols-3 gap-3"><button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">${validate_component(Github$1, "Github").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button> <button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">${validate_component(Twitter$1, "Twitter").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button> <button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">${validate_component(Facebook$1, "Facebook").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button></div>  <p class="mt-8 text-center text-xs text-slate-400" data-svelte-h="svelte-1pc7ret">By signing in you agree to our
					<a href="/terms" class="font-medium text-slate-600 hover:text-slate-900 transition-colors">Terms</a>
					and
					<a href="/privacy" class="font-medium text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a>.</p></div></div></div></div> </div>`;
});
export {
  Page as default
};
