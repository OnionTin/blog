<template><div><h2 id="属性修饰符" tabindex="-1"><a class="header-anchor" href="#属性修饰符"><span>属性修饰符</span></a></h2>
<blockquote>
<p>对象类型的属性可以被赋予不同的修饰符，以定义它们的特性，如是否可选、是否只读等。</p>
</blockquote>
<h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性"><span>可选属性</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 可选属性，不需要在所有对象中都提供</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token comment">// age 属性被省略，将被赋值为 undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Bob"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// 提供了 age 属性</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必需属性" tabindex="-1"><a class="header-anchor" href="#必需属性"><span>必需属性</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 必需属性</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 必需属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性"><span>只读属性</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to 'x' because it is a read-only property.</span>
<span class="token comment">// point.x = 5;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性修饰符的组合" tabindex="-1"><a class="header-anchor" href="#属性修饰符的组合"><span>属性修饰符的组合</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 可选属性</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 只读属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// age 属性是可选的，可以省略</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to 'id' because it is a read-only property.</span>
<span class="token comment">// person.id = 2;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


