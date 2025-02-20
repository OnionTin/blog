import{_ as n,o as s,c as a,e}from"./app-C_RrakEG.js";const t={},o=e(`<h2 id="vue3-的响应式系统辅助函数" tabindex="-1"><a class="header-anchor" href="#vue3-的响应式系统辅助函数"><span>Vue3 的响应式系统辅助函数</span></a></h2><h3 id="isref" tabindex="-1"><a class="header-anchor" href="#isref"><span>isRef</span></a></h3><ul><li><strong>作用</strong>: 检查一个值是否为一个<code>ref</code>对象。</li></ul><h3 id="isreactive" tabindex="-1"><a class="header-anchor" href="#isreactive"><span>isReactive</span></a></h3><ul><li><strong>作用</strong>: 检查一个对象是否是由<code>reactive</code>创建的响应式代理。</li></ul><h3 id="isreadonly" tabindex="-1"><a class="header-anchor" href="#isreadonly"><span>isReadonly</span></a></h3><ul><li><strong>作用</strong>: 检查一个对象是否是由<code>readonly</code>创建的只读代理。</li></ul><h3 id="isproxy" tabindex="-1"><a class="header-anchor" href="#isproxy"><span>isProxy</span></a></h3><ul><li><strong>作用</strong>: 检查一个对象是否是由<code>reactive</code>或者<code>readonly</code>方法创建的代理。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
  readonly<span class="token punctuation">,</span>
  isRef<span class="token punctuation">,</span>
  isReactive<span class="token punctuation">,</span>
  isReadonly<span class="token punctuation">,</span>
  isProxy<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;奔驰&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">&quot;40W&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> car2 <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>car2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// false, 因为ref底层用的是definedProperty，他的响应式是需要reactive的帮助的</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","响应式数据判断.html.vue"]]),d=JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%88%A4%E6%96%AD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Vue3 的响应式系统辅助函数","slug":"vue3-的响应式系统辅助函数","link":"#vue3-的响应式系统辅助函数","children":[{"level":3,"title":"isRef","slug":"isref","link":"#isref","children":[]},{"level":3,"title":"isReactive","slug":"isreactive","link":"#isreactive","children":[]},{"level":3,"title":"isReadonly","slug":"isreadonly","link":"#isreadonly","children":[]},{"level":3,"title":"isProxy","slug":"isproxy","link":"#isproxy","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/其他CompositionApi/响应式数据判断.md","excerpt":"<h2>Vue3 的响应式系统辅助函数</h2>\\n<h3>isRef</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个值是否为一个<code>ref</code>对象。</li>\\n</ul>\\n<h3>isReactive</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个对象是否是由<code>reactive</code>创建的响应式代理。</li>\\n</ul>\\n<h3>isReadonly</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个对象是否是由<code>readonly</code>创建的只读代理。</li>\\n</ul>"}');export{r as comp,d as data};
