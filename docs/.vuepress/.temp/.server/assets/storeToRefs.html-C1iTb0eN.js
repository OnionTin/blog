import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="storetorefs" tabindex="-1"><a class="header-anchor" href="#storetorefs"><span>storeToRefs</span></a></h2><blockquote><p>store 中的 state 转换为 ref</p></blockquote><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/pinia/storeToRefs.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storeToRefs_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "storeToRefs.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/storeToRefs.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"storeToRefs","slug":"storetorefs","link":"#storetorefs","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/Vue基础/pinia/storeToRefs.md","excerpt":"<h2>storeToRefs</h2>\\n<blockquote>\\n<p>store 中的 state 转换为 ref</p>\\n</blockquote>\\n<h3>语法</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> storeToRefs <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"pinia\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> name<span class=\\"token punctuation\\">,</span> age <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">storeToRefs</span><span class=\\"token punctuation\\">(</span>store<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  storeToRefs_html as comp,
  data
};
