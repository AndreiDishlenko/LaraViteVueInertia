import { Head, createInertiaApp } from "@inertiajs/vue3";
import { resolveComponent, withCtx, createVNode, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  components: {
    Head
  }
  // metaInfo() {
  //     return {
  //         title: 'Dashboard',
  //         meta: [
  //             { name: 'description', content: 'This is a description of my page for SEO.' },
  //             { property: 'og:title', content: 'My Page Title for Social Media' }
  //         ]
  //     };
  // },
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>My app3</title><meta head-key="description" name="description" content="This is the default description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, "My app3"),
          createVNode("meta", {
            "head-key": "description",
            name: "description",
            content: "This is the default description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div> Привет, я страница созданная с помощью Inertia!!! </div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Vue/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    // title: title => `${title} - My App`,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Vue/Home.vue": __vite_glob_0_0 });
      return pages[`./Vue/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
