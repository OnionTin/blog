<template><div><h2 id="计算属性的缓存机制与事件的区别" tabindex="-1"><a class="header-anchor" href="#计算属性的缓存机制与事件的区别"><span>计算属性的缓存机制与事件的区别</span></a></h2>
<blockquote>
<p>计算属性（Computed Properties）和事件（Events）是两个不同的概念，它们在功能和用途上有所区别。下面分别介绍它们的特点和区别。</p>
</blockquote>
<h3 id="计算属性-computed-properties" tabindex="-1"><a class="header-anchor" href="#计算属性-computed-properties"><span>计算属性（Computed Properties）</span></a></h3>
<blockquote>
<p>计算属性是基于它们的响应式依赖进行缓存的属性。只有当计算属性依赖的响应式数据发生变化时，计算属性才会重新计算。这意味着计算属性是惰性的：只有在需要时它们才会计算。</p>
</blockquote>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h3>
<ol>
<li>缓存机制： 计算属性的结果会被缓存，只有当依赖的数据发生变化时，缓存才会失效，然后重新计算。</li>
<li>响应式： 计算属性是响应式的，它们会根据依赖的数据变化自动更新。</li>
<li>无副作用： 计算属性应该只依赖于它们的响应式输入，不应该产生副作用。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 修改依赖数据</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 4，缓存已失效，重新计算</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件-events" tabindex="-1"><a class="header-anchor" href="#事件-events"><span>事件（Events）</span></a></h3>
<blockquote>
<p>事件是组件间通信的一种方式。在 Vue 中，事件可以由用户操作（如点击按钮）或程序逻辑触发，并通过事件监听器进行处理。</p>
</blockquote>
<h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点：</span></a></h3>
<ol>
<li>非缓存： 事件不是缓存的，每次触发事件时都会执行事件处理函数。</li>
<li>即时性： 事件是即时的，它们会在触发时立即执行相关的逻辑。</li>
<li>通信机制： 事件用于父子组件或非父子组件之间的通信。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Clicked! Count is now:"</span><span class="token punctuation">,</span> count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3>
<ol>
<li>缓存： 计算属性具有缓存机制，而事件没有。计算属性的结果只在依赖数据变化时更新，事件每次触发都会执行。</li>
<li>用途： 计算属性用于基于响应式数据的派生状态，事件用于组件间的通信。</li>
<li>性能： 由于计算属性的缓存机制，它们可以提高性能，避免不必要的计算。事件则没有这种优化。</li>
<li>响应式： 计算属性是响应式的，依赖的数据变化时会自动更新。事件处理函数需要手动触发和监听。</li>
</ol>
</div></template>


