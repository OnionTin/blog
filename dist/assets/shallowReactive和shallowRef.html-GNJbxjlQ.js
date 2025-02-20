import{_ as n,o as s,c as a,e}from"./app-C_RrakEG.js";const t={},p=e(`<h2 id="shallowreactive-与-shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive-与-shallowref"><span>shallowReactive 与 shallowRef</span></a></h2><h3 id="shallowreactive" tabindex="-1"><a class="header-anchor" href="#shallowreactive"><span>shallowReactive</span></a></h3><blockquote><p>只处理对象最外层属性的响应式（浅响应式）。</p></blockquote><h3 id="shallowref" tabindex="-1"><a class="header-anchor" href="#shallowref"><span>shallowRef</span></a></h3><blockquote><p>只处理基本数据类型的响应式，不进行对象的响应式处理。</p></blockquote><h3 id="什么时候使用" tabindex="-1"><a class="header-anchor" href="#什么时候使用"><span>什么时候使用？</span></a></h3><ul><li><p><strong>shallowReactive</strong>: 如果有一个对象数据，结构比较深，但变化时只是外层属性变化。</p></li><li><p><strong>shallowRef</strong>: 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> shallowReactive<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据</span>
    <span class="token comment">// let person = shallowReactive({ //只考虑第一层数据的响应式</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;******&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回一个对象（常用）</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span> <span class="token comment">// 这里应该是 person 而不是 X</span>
      x<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shallowreactive-1" tabindex="-1"><a class="header-anchor" href="#shallowreactive-1"><span>shallowReactive</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">j1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 方法</span>
    <span class="token keyword">function</span> <span class="token function">changeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
      person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">48</span><span class="token punctuation">;</span>
      person<span class="token punctuation">.</span>job<span class="token punctuation">.</span>j1<span class="token punctuation">.</span>salary <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token comment">// 不进行响应式处理</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回一个对象（常用）</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span>
      changeInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shallowref-1" tabindex="-1"><a class="header-anchor" href="#shallowref-1"><span>shallowRef</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 方法</span>
    <span class="token keyword">function</span> <span class="token function">changeInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      x<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 重新赋值，会触发响应式</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回一个对象（常用）</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      x<span class="token punctuation">,</span>
      changeInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","shallowReactive和shallowRef.html.vue"]]),k=JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/shallowReactive%E5%92%8CshallowRef.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"shallowReactive 与 shallowRef","slug":"shallowreactive-与-shallowref","link":"#shallowreactive-与-shallowref","children":[{"level":3,"title":"shallowReactive","slug":"shallowreactive","link":"#shallowreactive","children":[]},{"level":3,"title":"shallowRef","slug":"shallowref","link":"#shallowref","children":[]},{"level":3,"title":"什么时候使用？","slug":"什么时候使用","link":"#什么时候使用","children":[]},{"level":3,"title":"shallowReactive","slug":"shallowreactive-1","link":"#shallowreactive-1","children":[]},{"level":3,"title":"shallowRef","slug":"shallowref-1","link":"#shallowref-1","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/其他CompositionApi/shallowReactive和shallowRef.md","excerpt":"<h2>shallowReactive 与 shallowRef</h2>\\n<h3>shallowReactive</h3>\\n<blockquote>\\n<p>只处理对象最外层属性的响应式（浅响应式）。</p>\\n</blockquote>\\n<h3>shallowRef</h3>\\n<blockquote>\\n<p>只处理基本数据类型的响应式，不进行对象的响应式处理。</p>\\n</blockquote>\\n<h3>什么时候使用？</h3>\\n<ul>\\n<li>\\n<p><strong>shallowReactive</strong>: 如果有一个对象数据，结构比较深，但变化时只是外层属性变化。</p>\\n</li>\\n<li>\\n<p><strong>shallowRef</strong>: 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换。</p>\\n</li>\\n</ul>"}');export{r as comp,k as data};
