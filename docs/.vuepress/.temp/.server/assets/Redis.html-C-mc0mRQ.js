import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Redis/Redis.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Redis_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Redis.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Redis/Redis.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Redis","slug":"redis","link":"#redis","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Redis/Redis.md","excerpt":"<!-- @format -->\\n<h2>Redis</h2>\\n"}');
export {
  Redis_html as comp,
  data
};
