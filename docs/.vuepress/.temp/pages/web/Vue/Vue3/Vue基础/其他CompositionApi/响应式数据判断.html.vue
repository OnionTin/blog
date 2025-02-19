<template><div><h2 id="vue3-的响应式系统辅助函数" tabindex="-1"><a class="header-anchor" href="#vue3-的响应式系统辅助函数"><span>Vue3 的响应式系统辅助函数</span></a></h2>
<h3 id="isref" tabindex="-1"><a class="header-anchor" href="#isref"><span>isRef</span></a></h3>
<ul>
<li><strong>作用</strong>: 检查一个值是否为一个<code v-pre>ref</code>对象。</li>
</ul>
<h3 id="isreactive" tabindex="-1"><a class="header-anchor" href="#isreactive"><span>isReactive</span></a></h3>
<ul>
<li><strong>作用</strong>: 检查一个对象是否是由<code v-pre>reactive</code>创建的响应式代理。</li>
</ul>
<h3 id="isreadonly" tabindex="-1"><a class="header-anchor" href="#isreadonly"><span>isReadonly</span></a></h3>
<ul>
<li><strong>作用</strong>: 检查一个对象是否是由<code v-pre>readonly</code>创建的只读代理。</li>
</ul>
<h3 id="isproxy" tabindex="-1"><a class="header-anchor" href="#isproxy"><span>isProxy</span></a></h3>
<ul>
<li><strong>作用</strong>: 检查一个对象是否是由<code v-pre>reactive</code>或者<code v-pre>readonly</code>方法创建的代理。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span>
  toRefs<span class="token punctuation">,</span>
  readonly<span class="token punctuation">,</span>
  isRef<span class="token punctuation">,</span>
  isReactive<span class="token punctuation">,</span>
  isReadonly<span class="token punctuation">,</span>
  isProxy<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"App"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"奔驰"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">"40W"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


