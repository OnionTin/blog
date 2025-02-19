import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="https://gitee.com/OnionTin/ssm" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringMvc/ssm整合.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ssm___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ssm整合.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringMvc/ssm%E6%95%B4%E5%90%88.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1724664291000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringMvc/ssm整合.md","excerpt":"<p><a href=\\"https://gitee.com/OnionTin/ssm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">代码</a></p>\\n"}');
export {
  ssm___html as comp,
  data
};
