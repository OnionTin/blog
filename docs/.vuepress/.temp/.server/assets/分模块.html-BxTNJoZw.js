import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/模块化-BmAsghpp.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化"><span>模块化</span></a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="模块化"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/pinia/分模块.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "分模块.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/%E5%88%86%E6%A8%A1%E5%9D%97.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"模块化","slug":"模块化","link":"#模块化","children":[]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/Vue基础/pinia/分模块.md","excerpt":"<h2>模块化</h2>\\n<p></p>\\n"}');
export {
  ____html as comp,
  data
};
