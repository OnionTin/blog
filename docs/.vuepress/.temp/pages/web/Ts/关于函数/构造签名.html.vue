<template><div><h2 id="构造签名" tabindex="-1"><a class="header-anchor" href="#构造签名"><span>构造签名</span></a></h2>
<blockquote>
<p>构造签名（Construct Signatures）是接口的一部分，用于描述一个构造函数的参数列表和返回类型。这允许接口能够描述一个类或者一个函数构造器的形态。</p>
</blockquote>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3>
<blockquote>
<p>构造签名通常与 new 关键字一起使用，表示创建一个新对象的构造函数。这个接口 Constructable 描述了一个构造函数，它接受一个 string 参数，并返回一个 Object 类型的新实例。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现构造签名" tabindex="-1"><a class="header-anchor" href="#实现构造签名"><span>实现构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有多个参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有多个参数的构造签名"><span>带有多个参数的构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有可选参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有可选参数的构造签名"><span>带有可选参数的构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带有剩余参数的构造签名" tabindex="-1"><a class="header-anchor" href="#带有剩余参数的构造签名"><span>带有剩余参数的构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型构造签名" tabindex="-1"><a class="header-anchor" href="#泛型构造签名"><span>泛型构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个构造签名" tabindex="-1"><a class="header-anchor" href="#多个构造签名"><span>多个构造签名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Constructable</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


