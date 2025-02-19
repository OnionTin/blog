import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="computed-和-watch" tabindex="-1"><a class="header-anchor" href="#computed-和-watch"><span>computed 和 watch</span></a></h2><blockquote><p>computed 和 watch 与 Vue2 中的用法基本一致，只是语法上有些不同</p></blockquote><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed"><span>computed</span></a></h3><blockquote><p>计算属性，用于声明式地描述一个值依赖于其他值，并且当依赖变化时，自动更新该值</p><p>computed 的值会缓存，只有当依赖的值发生变化时，才会重新计算</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      doubleCount<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span>watch</span></a></h3><blockquote><p>监听一个或多个响应式数据的变化，并在变化时执行回调函数</p><p>watch 可以监听 ref 和 reactive 的数据，也可以监听一个 getter 函数的返回值</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;你好啊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监控单个属性的变化</span>
<span class="token function">watch</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;sum的值变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 深度监控person变化</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  person<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person的值变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回一个对象（常用）</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  sum<span class="token punctuation">,</span>
  msg<span class="token punctuation">,</span>
  person<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/computed和watch.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const computed_watch_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "computed和watch.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/computed%E5%92%8Cwatch.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"computed 和 watch","slug":"computed-和-watch","link":"#computed-和-watch","children":[{"level":3,"title":"computed","slug":"computed","link":"#computed","children":[]},{"level":3,"title":"watch","slug":"watch","link":"#watch","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/computed和watch.md","excerpt":"<h2>computed 和 watch</h2>\\n<blockquote>\\n<p>computed 和 watch 与 Vue2 中的用法基本一致，只是语法上有些不同</p>\\n</blockquote>\\n<h3>computed</h3>\\n<blockquote>\\n<p>计算属性，用于声明式地描述一个值依赖于其他值，并且当依赖变化时，自动更新该值</p>\\n<p>computed 的值会缓存，只有当依赖的值发生变化时，才会重新计算</p>\\n</blockquote>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> computed <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vue\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> count <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">const</span> doubleCount <span class=\\"token operator\\">=</span> <span class=\\"token function\\">computed</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> count<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">*</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      count<span class=\\"token punctuation\\">,</span>\\n      doubleCount<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  computed_watch_html as comp,
  data
};
