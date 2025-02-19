import{_ as n,o as a,c as s,e}from"./app-CilA4iky.js";const t={},p=e(`<h2 id="响应式基础-ref-与-reactive" tabindex="-1"><a class="header-anchor" href="#响应式基础-ref-与-reactive"><span>响应式基础 ref 与 reactive</span></a></h2><blockquote><p>响应式系统是使用 Proxy 实现的，它提供了更细粒度的响应式控制。Vue 3 引入了 ref 和 reactive 两个 API 来创建响应式数据。</p></blockquote><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>ref</span></a></h3><p>ref 用于将一个普通的 JavaScript 值转换为响应式值。它主要用于处理基础类型数据（如字符串、数字等）。当在模板中使用 ref 时，Vue 会自动解包.value，所以你可以直接使用 count 而不是 count.value。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个响应式的数字</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 修改响应式数据</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span>reactive</span></a></h3><p>reactive 用于将一个 JavaScript 对象转换为响应式对象。它接受一个普通对象并返回该对象的响应式代理。reactive 返回的对象是原对象的响应式代理，它包含原对象的所有属性和方法，但不是原对象本身。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &#39;Vue&#39;</span>

state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 修改响应式对象的属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>不要直接修改 ref 或 reactive 对象的.value 属性，因为这会破坏其响应性。</li><li>使用 ref 和 reactive 时，Vue 3 的响应式系统会自动追踪依赖和变更，无需手动操作。</li><li>在组件内部，通常使用 setup 函数来定义响应式数据。</li></ol><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><ol><li>使用 ref 来处理单个数据项，如状态标志、计数器等。</li><li>使用 reactive 来处理复杂的数据结构，如对象或数组。</li></ol>`,12),c=[p];function o(l,i){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","响应式基础ref与reactive.html.vue"]]),k=JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9F%BA%E7%A1%80ref%E4%B8%8Ereactive.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"响应式基础 ref 与 reactive","slug":"响应式基础-ref-与-reactive","link":"#响应式基础-ref-与-reactive","children":[{"level":3,"title":"ref","slug":"ref","link":"#ref","children":[]},{"level":3,"title":"reactive","slug":"reactive","link":"#reactive","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/响应式基础ref与reactive.md","excerpt":"<h2>响应式基础 ref 与 reactive</h2>\\n<blockquote>\\n<p>响应式系统是使用 Proxy 实现的，它提供了更细粒度的响应式控制。Vue 3 引入了 ref 和 reactive 两个 API 来创建响应式数据。</p>\\n</blockquote>\\n<h3>ref</h3>\\n<p>ref 用于将一个普通的 JavaScript 值转换为响应式值。它主要用于处理基础类型数据（如字符串、数字等）。当在模板中使用 ref 时，Vue 会自动解包.value，所以你可以直接使用 count 而不是 count.value。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vue\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> count <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 创建一个响应式的数字</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>count<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出 0</span>\\n\\ncount<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 修改响应式数据</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>count<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出 1</span>\\n</code></pre></div>"}');export{r as comp,k as data};
