import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="vue-3-生命周期与对应钩子" tabindex="-1"><a class="header-anchor" href="#vue-3-生命周期与对应钩子"><span>Vue 3 生命周期与对应钩子</span></a></h2><ul><li><code>beforeCreate</code> ==&gt; <code>setup()</code></li><li><code>created</code> ==&gt; <code>setup()</code></li><li><code>beforeMount</code> ==&gt; <code>onBeforeMount</code></li><li><code>mounted</code> ==&gt; <code>onMounted</code></li><li><code>beforeUpdate</code> ==&gt; <code>onBeforeUpdate</code></li><li><code>updated</code> ==&gt; <code>onUpdated</code></li><li><code>beforeUnmount</code> ==&gt; <code>onBeforeUnmount</code></li><li><code>unmounted</code> ==&gt; <code>onUnmounted</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/生命周期钩子.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "生命周期钩子.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Vue 3 生命周期与对应钩子","slug":"vue-3-生命周期与对应钩子","link":"#vue-3-生命周期与对应钩子","children":[]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/生命周期钩子.md","excerpt":"<h2>Vue 3 生命周期与对应钩子</h2>\\n<ul>\\n<li><code>beforeCreate</code> ==&gt; <code>setup()</code></li>\\n<li><code>created</code> ==&gt; <code>setup()</code></li>\\n<li><code>beforeMount</code> ==&gt; <code>onBeforeMount</code></li>\\n<li><code>mounted</code> ==&gt; <code>onMounted</code></li>\\n<li><code>beforeUpdate</code> ==&gt; <code>onBeforeUpdate</code></li>\\n<li><code>updated</code> ==&gt; <code>onUpdated</code></li>\\n<li><code>beforeUnmount</code> ==&gt; <code>onBeforeUnmount</code></li>\\n<li><code>unmounted</code> ==&gt; <code>onUnmounted</code></li>\\n</ul>"}');
export {
  _______html as comp,
  data
};
