import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="ts" tabindex="-1"><a class="header-anchor" href="#ts"><span>Ts</span></a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Ts","slug":"ts","link":"#ts","children":[]}],"git":{"updatedTime":1727164099000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/README.md","excerpt":"<h2>Ts</h2>\\n"}');
export {
  index_html as comp,
  data
};
