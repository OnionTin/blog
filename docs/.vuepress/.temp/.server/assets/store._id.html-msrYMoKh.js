import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="store-id" tabindex="-1"><a class="header-anchor" href="#store-id"><span>store.$id</span></a></h2><blockquote><p>store.$id 是一个只读属性，用于获取 store 的唯一标识符。</p></blockquote><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/pinia/store._id.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const store__id_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "store._id.html.vue"]]);
const data = JSON.parse(`{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._id.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"store.$id","slug":"store-id","link":"#store-id","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/pinia/store.$id.md","excerpt":"<h2>store.$id</h2>\\n<blockquote>\\n<p>store.$id 是一个只读属性，用于获取 store 的唯一标识符。</p>\\n</blockquote>\\n<h3>示例</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineStore <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'pinia'</span>\\n\\n<span class=\\"token keyword\\">const</span> useStore <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'main'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function-variable function\\">state</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">actions</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count<span class=\\"token operator\\">++</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}`);
export {
  store__id_html as comp,
  data
};
