import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="ref-与-reactive-对比" tabindex="-1"><a class="header-anchor" href="#ref-与-reactive-对比"><span>ref 与 reactive 对比</span></a></h2><h3 id="从定义数据角度对比" tabindex="-1"><a class="header-anchor" href="#从定义数据角度对比"><span>从定义数据角度对比:</span></a></h3><ul><li><code>ref</code> 用来定义：基本类型数据。</li><li><code>reactive</code> 用来定义：对象（或数组）类型数据。</li><li><strong>备注</strong>: <code>ref</code> 也可以用来定义对象（或数组）类型数据，它内部会自动通过 <code>reactive</code> 转为代理对象。</li></ul><h3 id="从原理角度对比" tabindex="-1"><a class="header-anchor" href="#从原理角度对比"><span>从原理角度对比:</span></a></h3><ul><li><code>ref</code> 通过 <code>Object.defineProperty()</code> 的 <code>get</code> 与 <code>set</code> 来实现响应式（数据劫持）。</li><li><code>reactive</code> 通过使用 <code>Proxy</code> 来实现响应式（数据劫持），并通过 <code>Reflect</code> 操作源对象内部的数据。</li></ul><h3 id="从使用角度对比" tabindex="-1"><a class="header-anchor" href="#从使用角度对比"><span>从使用角度对比:</span></a></h3><ul><li><code>ref</code> 定义的数据：操作数据需要 <code>.value</code>，读取数据时模板中直接读取不需要 <code>.value</code>。</li><li><code>reactive</code> 定义的数据：操作数据与读取数据均不需要 <code>.value</code>。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/reactive和ref对比.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reactive_ref___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "reactive和ref对比.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/reactive%E5%92%8Cref%E5%AF%B9%E6%AF%94.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ref 与 reactive 对比","slug":"ref-与-reactive-对比","link":"#ref-与-reactive-对比","children":[{"level":3,"title":"从定义数据角度对比:","slug":"从定义数据角度对比","link":"#从定义数据角度对比","children":[]},{"level":3,"title":"从原理角度对比:","slug":"从原理角度对比","link":"#从原理角度对比","children":[]},{"level":3,"title":"从使用角度对比:","slug":"从使用角度对比","link":"#从使用角度对比","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/reactive和ref对比.md","excerpt":"<h2>ref 与 reactive 对比</h2>\\n<h3>从定义数据角度对比:</h3>\\n<ul>\\n<li><code>ref</code> 用来定义：基本类型数据。</li>\\n<li><code>reactive</code> 用来定义：对象（或数组）类型数据。</li>\\n<li><strong>备注</strong>: <code>ref</code> 也可以用来定义对象（或数组）类型数据，它内部会自动通过 <code>reactive</code> 转为代理对象。</li>\\n</ul>\\n<h3>从原理角度对比:</h3>\\n<ul>\\n<li><code>ref</code> 通过 <code>Object.defineProperty()</code> 的 <code>get</code> 与 <code>set</code> 来实现响应式（数据劫持）。</li>\\n<li><code>reactive</code> 通过使用 <code>Proxy</code> 来实现响应式（数据劫持），并通过 <code>Reflect</code> 操作源对象内部的数据。</li>\\n</ul>"}');
export {
  reactive_ref___html as comp,
  data
};
