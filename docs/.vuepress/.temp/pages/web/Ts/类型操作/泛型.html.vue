<template><div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h2>
<blockquote>
<p>泛型是一种强大的工具，它允许你编写可重用的函数、接口和类，这些函数、接口和类可以操作多种类型的数据，而不会失去类型安全性。泛型在编译时提供类型检查，从而帮助你捕捉错误。</p>
</blockquote>
<h3 id="泛型函数" tabindex="-1"><a class="header-anchor" href="#泛型函数"><span>泛型函数</span></a></h3>
<blockquote>
<p>泛型函数可以接收任意类型的参数，并返回相同类型的结果。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type is string</span>
<span class="token keyword">const</span> resultNumber <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type is number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口"><span>泛型接口</span></a></h3>
<blockquote>
<p>泛型接口允许你定义操作多种类型的数据的结构，而不需要指定具体的类型。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericIdentity<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> identityObject<span class="token operator">:</span> GenericIdentity<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> identity<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类"><span>泛型类</span></a></h3>
<blockquote>
<p>泛型类允许你定义可以操作多种类型的数据的类。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  zeroValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束"><span>泛型约束</span></a></h3>
<blockquote>
<p>你可以对泛型参数施加约束，以确保它们支持特定的操作或属性。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">></span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token comment">// Now we know it has a .length property, so no more error</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">loggingIdentity</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类型别名" tabindex="-1"><a class="header-anchor" href="#泛型类型别名"><span>泛型类型别名</span></a></h3>
<blockquote>
<p>泛型类型别名为复杂的类型提供了一种简便的命名方式。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GenericArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> myArray<span class="token operator">:</span> GenericArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型元组" tabindex="-1"><a class="header-anchor" href="#泛型元组"><span>泛型元组</span></a></h3>
<blockquote>
<p>元组类型允许你定义已知元素数量和类型的数组，各元素的类型不必相同。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">tuple</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T1</span><span class="token punctuation">,</span> <span class="token constant">T2</span><span class="token punctuation">,</span> <span class="token constant">T3</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>item1<span class="token operator">:</span> <span class="token constant">T1</span><span class="token punctuation">,</span> item2<span class="token operator">:</span> <span class="token constant">T2</span><span class="token punctuation">,</span> item3<span class="token operator">:</span> <span class="token constant">T3</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T1</span><span class="token punctuation">,</span> <span class="token constant">T2</span><span class="token punctuation">,</span> <span class="token constant">T3</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">,</span> item3<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">tuple</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型工具类型" tabindex="-1"><a class="header-anchor" href="#泛型工具类型"><span>泛型工具类型</span></a></h3>
<blockquote>
<p>内置的泛型工具类型，如 Partial&lt;T&gt;、Readonly&lt;T&gt;、Pick&lt;T, K&gt; 等，这些类型可以方便地构造新的类型。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PartialPoint</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Point<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p<span class="token operator">:</span> PartialPoint <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial-t" tabindex="-1"><a class="header-anchor" href="#partial-t"><span>Partial&lt;T&gt;</span></a></h3>
<blockquote>
<p>Partial&lt;T&gt; 类型构造函数用于生成一个类型，其所有属性都是原始类型的属性，但所有属性都是可选的。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PartialPoint</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Point<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { x?: number; y?: number; }</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> PartialPoint <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token keyword">const</span> p2<span class="token operator">:</span> PartialPoint <span class="token operator">=</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token keyword">const</span> p3<span class="token operator">:</span> PartialPoint <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly-t" tabindex="-1"><a class="header-anchor" href="#readonly-t"><span>Readonly&lt;T&gt;</span></a></h3>
<blockquote>
<p>Readonly&lt;T&gt; 类型构造函数用于生成一个类型，其所有属性都是原始类型的属性，但所有属性都是只读的。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ReadonlyPoint</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>Point<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { readonly x: number; readonly y: number; }</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> ReadonlyPoint <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Error: Cannot assign to 'x' because it is a read-only property.</span>
<span class="token comment">// p.x = 4;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pick-t-k" tabindex="-1"><a class="header-anchor" href="#pick-t-k"><span>Pick&lt;T, K&gt;</span></a></h3>
<blockquote>
<p>Pick&lt;T, K&gt; 类型构造函数用于生成一个类型，其属性是原始类型中 K 所指定的属性的子集。
PickedPoint 类型表示一个对象，它只包含原始 Point 类型中的 x 和 y 属性</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PickedPoint</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Point<span class="token punctuation">,</span> <span class="token string">"x"</span> <span class="token operator">|</span> <span class="token string">"y"</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { x: number; y: number; }</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> PickedPoint <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


