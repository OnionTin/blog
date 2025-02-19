import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/react和vue全面对比-eAoBpIpg.jpeg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react"><span>react</span></a></h2><p><a href="https://juejin.cn/post/7344536653463207973?searchId=20241028100534501A3668BA5B77E9B947" target="_blank" rel="noopener noreferrer">react 和 vue 对比,细致全面`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><img${ssrRenderAttr("src", _imports_0)} alt="react和vue对比">;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"react","slug":"react","link":"#react","children":[]}],"git":{"updatedTime":1728637409000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/README.md","excerpt":"<h2>react</h2>\\n<p><a href=\\"https://juejin.cn/post/7344536653463207973?searchId=20241028100534501A3668BA5B77E9B947\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">react 和 vue 对比,细致全面</a>\\n;</p>\\n"}');
export {
  index_html as comp,
  data
};
