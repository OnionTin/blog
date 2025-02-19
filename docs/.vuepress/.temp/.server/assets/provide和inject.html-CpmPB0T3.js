import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/provide和inject.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const provide_inject_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "provide和inject.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/provide%E5%92%8Cinject.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/provide和inject.md","excerpt":""}');
export {
  provide_inject_html as comp,
  data
};
