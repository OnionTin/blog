import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const p={},o=t(`<h2 id="store-subscribe" tabindex="-1"><a class="header-anchor" href="#store-subscribe"><span>store.$subscribe</span></a></h2><blockquote><p>监听 store 的变化</p></blockquote><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li><code>callback</code>：监听回调函数</li><li><code>options</code>：配置项</li></ul><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><ul><li><code>unsubscribe</code>：取消监听的函数</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听 store 的变化</span>
store<span class="token punctuation">.</span><span class="token function">$subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

store<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：{ type: &#39;increment&#39;, storeId: &#39;main&#39; } { count: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><ul><li><code>detached</code>：是否在组件卸载后仍然监听 store 的变化</li><li><code>deep</code>：是否深度监听 store 的变化</li><li><code>flush</code>：监听的时机，可选值：<code>pre</code>、<code>post</code>、<code>sync</code></li><li><code>onCleanup</code>：取消监听时的回调函数</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听 store 的变化</span>
store<span class="token punctuation">.</span><span class="token function">$subscribe</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">detached</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
    <span class="token function">onCleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;取消监听&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

store<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：{ type: &#39;increment&#39;, storeId: &#39;main&#39; } { count: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","store._subscribe.html.vue"]]),k=JSON.parse(`{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._subscribe.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"store.$subscribe","slug":"store-subscribe","link":"#store-subscribe","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/Vue基础/pinia/store.$subscribe.md","excerpt":"<h2>store.$subscribe</h2>\\n<blockquote>\\n<p>监听 store 的变化</p>\\n</blockquote>\\n<h3>参数</h3>\\n<ul>\\n<li><code>callback</code>：监听回调函数</li>\\n<li><code>options</code>：配置项</li>\\n</ul>\\n<h3>返回值</h3>\\n<ul>\\n<li><code>unsubscribe</code>：取消监听的函数</li>\\n</ul>\\n<h3>示例</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineStore <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"pinia\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> useStore <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"main\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function-variable function\\">state</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">count</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">actions</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>count<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> store <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 监听 store 的变化</span>\\nstore<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">mutation<span class=\\"token punctuation\\">,</span> state</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>mutation<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>state<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nstore<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：{ type: 'increment', storeId: 'main' } { count: 1 }</span>\\n</code></pre></div>"}`);export{r as comp,k as data};
