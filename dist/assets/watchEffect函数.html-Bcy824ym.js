import{_ as n,o as a,c as s,e as t}from"./app-C_RrakEG.js";const e={},c=t(`<h2 id="vue3-中的-watch-和-watcheffect" tabindex="-1"><a class="header-anchor" href="#vue3-中的-watch-和-watcheffect"><span>Vue3 中的 watch 和 watchEffect</span></a></h2><h3 id="watch-和-watcheffect-的区别" tabindex="-1"><a class="header-anchor" href="#watch-和-watcheffect-的区别"><span>watch 和 watchEffect 的区别</span></a></h3><ul><li>watch：既要指明监视的属性，也要指明监视的回调。</li><li>watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</li></ul><h3 id="watcheffect-与-computed-的对比" tabindex="-1"><a class="header-anchor" href="#watcheffect-与-computed-的对比"><span>watchEffect 与 computed 的对比</span></a></h3><ul><li><strong>watchEffect</strong> 有点像 <code>computed</code>： <ul><li>但 <code>computed</code> 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。</li><li>而 <code>watchEffect</code> 更注重的是过程（回调函数的函数体），所以不用写返回值。</li><li><code>watchEffect</code> 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;watchEffect配置的回调执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// setup函数和监视</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;你好啊&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 监视</span>
  <span class="token comment">// watch(sum, (newValue, oldValue) =&gt; {</span>
  <span class="token comment">//   console.log(&#39;sum的值变化了&#39;, newValue, oldValue)</span>
  <span class="token comment">// }, { immediate: true })</span>

  <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watchEffect所指定的回调执行了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[c];function o(l,i){return a(),s("div",null,p)}const r=n(e,[["render",o],["__file","watchEffect函数.html.vue"]]),d=JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/watchEffect%E5%87%BD%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Vue3 中的 watch 和 watchEffect","slug":"vue3-中的-watch-和-watcheffect","link":"#vue3-中的-watch-和-watcheffect","children":[{"level":3,"title":"watch 和 watchEffect 的区别","slug":"watch-和-watcheffect-的区别","link":"#watch-和-watcheffect-的区别","children":[]},{"level":3,"title":"watchEffect 与 computed 的对比","slug":"watcheffect-与-computed-的对比","link":"#watcheffect-与-computed-的对比","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/watchEffect函数.md","excerpt":"<h2>Vue3 中的 watch 和 watchEffect</h2>\\n<h3>watch 和 watchEffect 的区别</h3>\\n<ul>\\n<li>watch：既要指明监视的属性，也要指明监视的回调。</li>\\n<li>watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</li>\\n</ul>\\n<h3>watchEffect 与 computed 的对比</h3>\\n<ul>\\n<li><strong>watchEffect</strong> 有点像 <code>computed</code>：\\n<ul>\\n<li>但 <code>computed</code> 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。</li>\\n<li>而 <code>watchEffect</code> 更注重的是过程（回调函数的函数体），所以不用写返回值。</li>\\n<li><code>watchEffect</code> 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</li>\\n</ul>\\n</li>\\n</ul>"}');export{r as comp,d as data};
