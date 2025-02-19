import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="provide-和-inject" tabindex="-1"><a class="header-anchor" href="#provide-和-inject"><span>provide 和 inject</span></a></h2><p>查看`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/web/Vue/Vue3/组件通信/provide与inject.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`组件通信`);
      } else {
        return [
          createTextVNode("组件通信")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`中的介绍</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/其他CompositionApi/provide和inject.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const provide_inject_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "provide和inject.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/provide%E5%92%8Cinject.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"provide 和 inject","slug":"provide-和-inject","link":"#provide-和-inject","children":[]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/其他CompositionApi/provide和inject.md","excerpt":"<h2>provide 和 inject</h2>\\n<p>查看<a active=\\"\\" href=\\"/blog/web/Vue/Vue3/组件通信/provide与inject.md\\" target=\\"_blank\\">组件通信</a>中的介绍</p>\\n"}');
export {
  provide_inject_html as comp,
  data
};
