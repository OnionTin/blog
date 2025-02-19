<template><div><h2 id="getters-和-actions" tabindex="-1"><a class="header-anchor" href="#getters-和-actions"><span>getters 和 actions</span></a></h2>
<h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters"><span>getters</span></a></h3>
<blockquote>
<p>类似于计算属性，getters 的返回值会根据它的依赖被缓存起来，并且只有当它的依赖值发生了改变才会被重新计算</p>
</blockquote>
<ul>
<li>getters 中的函数接收一个 <code v-pre>state</code> 作为其第一个参数</li>
<li>getters 可以被嵌套调用，它们可以返回其他 getters</li>
<li>getters 可以通过 <code v-pre>this</code> 访问其他 getters</li>
<li>getters 可以通过 <code v-pre>this.$pinia</code> 访问整个 store 实例</li>
<li>getters 可以通过 <code v-pre>this.$pinia.state</code> 访问整个 state</li>
<li>getters 可以通过 <code v-pre>this.$pinia.getters</code> 访问整个 getters</li>
<li>getters 可以通过 <code v-pre>this.$pinia.actions</code> 访问整个 actions</li>
<li>getters 可以通过 <code v-pre>this.$pinia.commit</code> 访问整个 commit</li>
<li>getters 可以通过 <code v-pre>this.$pinia.dispatch</code> 访问整个 dispatch</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"main"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">doubleCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h3>
<blockquote>
<p>actions 类似于组件中的 methods，它们可以包含任意逻辑，包括异步操作</p>
</blockquote>
<ul>
<li>actions 可以通过 <code v-pre>this</code> 访问整个 store 实例</li>
<li>actions 可以通过 <code v-pre>this.$pinia.state</code> 访问整个 state</li>
<li>actions 可以通过 <code v-pre>this.$pinia.getters</code> 访问整个 getters</li>
<li>actions 可以通过 <code v-pre>this.$pinia.actions</code> 访问整个 actions</li>
<li>actions 可以通过 <code v-pre>this.$pinia.commit</code> 访问整个 commit</li>
<li>actions 可以通过 <code v-pre>this.$pinia.dispatch</code> 访问整个 dispatch</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"main"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 支持同步和异步</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


