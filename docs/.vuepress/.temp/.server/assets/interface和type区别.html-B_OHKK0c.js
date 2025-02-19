import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="interface-和-type-区别" tabindex="-1"><a class="header-anchor" href="#interface-和-type-区别"><span>interface 和 type 区别</span></a></h2><blockquote><p>类型别名和接口非常相似，在很多情况下你可以在它们之间自由选择。interface 的几乎所有功能都在 type 中可用，主要区别在于无法重新打开类型以添加 ​​ 新属性，而接口始终可扩展。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Ts/常用类型/interface和type区别.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interface_type___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "interface和type区别.html.vue"]]);
const data = JSON.parse('{"path":"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/interface%E5%92%8Ctype%E5%8C%BA%E5%88%AB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"interface 和 type 区别","slug":"interface-和-type-区别","link":"#interface-和-type-区别","children":[]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/常用类型/interface和type区别.md","excerpt":"<h2>interface 和 type 区别</h2>\\n<blockquote>\\n<p>类型别名和接口非常相似，在很多情况下你可以在它们之间自由选择。interface 的几乎所有功能都在 type 中可用，主要区别在于无法重新打开类型以添加 ​​ 新属性，而接口始终可扩展。</p>\\n</blockquote>\\n"}');
export {
  interface_type___html as comp,
  data
};
