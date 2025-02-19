import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="hystrix-服务限流" tabindex="-1"><a class="header-anchor" href="#hystrix-服务限流"><span>HyStrix 服务限流</span></a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/HyStrix服务限流.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HyStrix_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "HyStrix服务限流.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E9%99%90%E6%B5%81.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"HyStrix 服务限流","slug":"hystrix-服务限流","link":"#hystrix-服务限流","children":[]}],"git":{"updatedTime":1726736496000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/HyStrix服务限流.md","excerpt":"<h2>HyStrix 服务限流</h2>\\n"}');
export {
  HyStrix_____html as comp,
  data
};
