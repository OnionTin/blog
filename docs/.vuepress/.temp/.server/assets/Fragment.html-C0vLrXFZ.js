import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="fragment-根标签" tabindex="-1"><a class="header-anchor" href="#fragment-根标签"><span>Fragment 根标签</span></a></h2><h3 id="vue2-中" tabindex="-1"><a class="header-anchor" href="#vue2-中"><span>Vue2 中</span></a></h3><ul><li>组件必须有一个根标签。</li></ul><h3 id="vue3-中" tabindex="-1"><a class="header-anchor" href="#vue3-中"><span>Vue3 中</span></a></h3><ul><li>组件可以没有根标签，内部会将多个标签包含在一个<code>Fragment</code>虚拟元素中。</li></ul><h3 id="好处" tabindex="-1"><a class="header-anchor" href="#好处"><span>好处</span></a></h3><ul><li>减少标签层级。</li><li>减小内存占用。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/新组件/Fragment.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Fragment_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Fragment.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Fragment.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Fragment 根标签","slug":"fragment-根标签","link":"#fragment-根标签","children":[{"level":3,"title":"Vue2 中","slug":"vue2-中","link":"#vue2-中","children":[]},{"level":3,"title":"Vue3 中","slug":"vue3-中","link":"#vue3-中","children":[]},{"level":3,"title":"好处","slug":"好处","link":"#好处","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/新组件/Fragment.md","excerpt":"<h2>Fragment 根标签</h2>\\n<h3>Vue2 中</h3>\\n<ul>\\n<li>组件必须有一个根标签。</li>\\n</ul>\\n<h3>Vue3 中</h3>\\n<ul>\\n<li>组件可以没有根标签，内部会将多个标签包含在一个<code>Fragment</code>虚拟元素中。</li>\\n</ul>\\n<h3>好处</h3>\\n<ul>\\n<li>减少标签层级。</li>\\n<li>减小内存占用。</li>\\n</ul>\\n"}');
export {
  Fragment_html as comp,
  data
};
