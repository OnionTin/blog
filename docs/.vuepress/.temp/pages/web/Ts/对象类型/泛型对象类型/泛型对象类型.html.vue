<template><div><h2 id="泛型对象类型" tabindex="-1"><a class="header-anchor" href="#泛型对象类型"><span>泛型对象类型</span></a></h2>
<blockquote>
<p>泛型允许你创建可重用的组件，这意味着你可以为函数、接口和类创建通用的定义，然后在使用时指定具体的类型。泛型在定义对象类型时非常有用，因为它们允许你定义具有一个或多个任意类型属性的对象。</p>
</blockquote>
<h3 id="定义泛型接口" tabindex="-1"><a class="header-anchor" href="#定义泛型接口"><span>定义泛型接口</span></a></h3>
<blockquote>
<p>可以使用泛型来定义接口，这样可以确保对象的类型在编译时就是正确的。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> product<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">"P123"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Laptop"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类型别名" tabindex="-1"><a class="header-anchor" href="#泛型类型别名"><span>泛型类型别名</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GenericObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> product<span class="token operator">:</span> GenericObject<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">"P123"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Laptop"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用泛型类" tabindex="-1"><a class="header-anchor" href="#使用泛型类"><span>使用泛型类</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">addItem</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> strings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStorage<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
strings<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token string">"typescript"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束"><span>泛型约束</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">HasName</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">printName</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> HasName<span class="token operator">></span></span></span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"Alice"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"Book"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


