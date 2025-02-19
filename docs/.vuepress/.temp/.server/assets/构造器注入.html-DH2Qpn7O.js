import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="构造器注入" tabindex="-1"><a class="header-anchor" href="#构造器注入"><span>构造器注入</span></a></h2><blockquote><p>构造器注入前便已用使用过了，分为有参构造和无参构造</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Spring/依赖注入/构造器注入.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "构造器注入.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Spring/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5/%E6%9E%84%E9%80%A0%E5%99%A8%E6%B3%A8%E5%85%A5.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"构造器注入","slug":"构造器注入","link":"#构造器注入","children":[]}],"git":{"updatedTime":1723195339000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Spring/依赖注入/构造器注入.md","excerpt":"<h2>构造器注入</h2>\\n<blockquote>\\n<p>构造器注入前便已用使用过了，分为有参构造和无参构造</p>\\n</blockquote>\\n"}');
export {
  ______html as comp,
  data
};
