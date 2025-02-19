import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/context-DtoAetLT.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="context"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/context.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const context_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "context.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/context.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"context","slug":"context","link":"#context","children":[]}],"git":{"updatedTime":1727972098000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/context.md","excerpt":"<!-- @format -->\\n<h2>context</h2>\\n<p></p>\\n"}');
export {
  context_html as comp,
  data
};
