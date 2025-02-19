import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus"><span>MyBatis-Plus</span></a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MyBatisPlus/MyBatisPlus.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyBatisPlus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "MyBatisPlus.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MyBatisPlus/MyBatisPlus.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis-Plus","slug":"mybatis-plus","link":"#mybatis-plus","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatisPlus/MyBatisPlus.md","excerpt":"<!-- @format -->\\n<h2>MyBatis-Plus</h2>\\n"}');
export {
  MyBatisPlus_html as comp,
  data
};
