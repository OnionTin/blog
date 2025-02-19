<template><div><h1 id="ref-函数" tabindex="-1"><a class="header-anchor" href="#ref-函数"><span>ref 函数</span></a></h1>
<blockquote>
<p>定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。</p>
</blockquote>
<ul>
<li><strong>备注</strong>:
<ul>
<li>接收的数据可以是基本类型，也可以是对象类型。</li>
<li>基本类型的数据: 响应式依然是靠<code v-pre>Object.defineProperty()</code>的<code v-pre>get</code>与<code v-pre>set</code>完成的。</li>
<li>对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数<code v-pre>reactive</code>函数。</li>
</ul>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 不需要`.value`，直接使用 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ xxx }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> xxx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
xxx<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


