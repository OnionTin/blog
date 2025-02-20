import{_ as n,o as s,c as a,e as t}from"./app-C_RrakEG.js";const p={},e=t(`<h2 id="条件渲染-v-if-与-v-for-的优先级" tabindex="-1"><a class="header-anchor" href="#条件渲染-v-if-与-v-for-的优先级"><span>条件渲染(v-if 与 v-for 的优先级)</span></a></h2><blockquote><p>v-if 和 v-for 都是常用的指令，用于条件渲染和列表渲染。它们在使用时有明确的优先级规则:</p><p>v-for 有比 v-if 更高的优先级。</p><p>当 v-if 和 v-for 同时出现在同一个元素上时，v-for 会被首先处理。</p></blockquote><h3 id="为什么-v-for-优先级更高" tabindex="-1"><a class="header-anchor" href="#为什么-v-for-优先级更高"><span>为什么 v-for 优先级更高？</span></a></h3><blockquote><p>Vue 官方文档中提到，这是为了优化性能。因为 v-for 创建的每个节点都会执行 v-if，如果 v-if 在 v-for 之前解析，那么它将多次运行，这会降低效率。所以 Vue 设计为先进行 v-for 循环，然后对每个循环项应用 v-if 条件。 v-for: 首先遍历 items 数组，为每个元素创建一个&lt;li&gt;元素。 v-if: 然后对每个生成的&lt;li&gt;元素应用 v-if 条件，只有当 item.isVisible 为 true 时，该元素才会被渲染。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.isVisible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能考虑" tabindex="-1"><a class="header-anchor" href="#性能考虑"><span>性能考虑</span></a></h3><blockquote><p>如果需要根据某些条件过滤掉一些不需要的项，并且这些项在渲染后不会影响 DOM 结构，那么可以在 v-for 之前使用计算属性或方法来过滤数据，这样可以减少 DOM 操作，提高性能。filteredItems 是一个计算属性，它只包含 isVisible 为 true 的项。然后 v-for 遍历 filteredItems 进行渲染，这样避免了对每个项都执行 v-if 条件判断。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in filteredItems<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Item 1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">isVisible</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Item 2&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">isVisible</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">filteredItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>isVisible<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","条件渲染(v-if与v-for的优先级).html.vue"]]),k=JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93(v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7).html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"条件渲染(v-if 与 v-for 的优先级)","slug":"条件渲染-v-if-与-v-for-的优先级","link":"#条件渲染-v-if-与-v-for-的优先级","children":[{"level":3,"title":"为什么 v-for 优先级更高？","slug":"为什么-v-for-优先级更高","link":"#为什么-v-for-优先级更高","children":[]},{"level":3,"title":"性能考虑","slug":"性能考虑","link":"#性能考虑","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/条件渲染(v-if与v-for的优先级).md","excerpt":"<h2>条件渲染(v-if 与 v-for 的优先级)</h2>\\n<blockquote>\\n<p>v-if 和 v-for 都是常用的指令，用于条件渲染和列表渲染。它们在使用时有明确的优先级规则:</p>\\n<p>v-for 有比 v-if 更高的优先级。</p>\\n<p>当 v-if 和 v-for 同时出现在同一个元素上时，v-for 会被首先处理。</p>\\n</blockquote>\\n<h3>为什么 v-for 优先级更高？</h3>\\n<blockquote>\\n<p>Vue 官方文档中提到，这是为了优化性能。因为 v-for 创建的每个节点都会执行 v-if，如果 v-if 在 v-for 之前解析，那么它将多次运行，这会降低效率。所以 Vue 设计为先进行 v-for 循环，然后对每个循环项应用 v-if 条件。\\nv-for: 首先遍历 items 数组，为每个元素创建一个&lt;li&gt;元素。\\nv-if: 然后对每个生成的&lt;li&gt;元素应用 v-if 条件，只有当 item.isVisible 为 true 时，该元素才会被渲染。</p>\\n</blockquote>"}');export{r as comp,k as data};
