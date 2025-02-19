<template><div><h3 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型"><span>映射类型</span></a></h3>
<blockquote>
<p>映射类型（Mapped Types）是一种强大的类型构造功能，它允许你根据一个现有类型创建一个新的类型，并且可以为它的属性执行一个映射函数。这在处理具有相同类型属性的对象或数组时特别有用。</p>
</blockquote>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3>
<blockquote>
<p>T 是一个类型，P 是 T 的属性键的联合。对于 T 的每个属性 P，映射类型会创建一个同名的属性，其类型为 T[P]。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MappedType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选属性映射" tabindex="-1"><a class="header-anchor" href="#可选属性映射"><span>可选属性映射</span></a></h3>
<blockquote>
<p>Partial&lt;T&gt; 是一个映射类型，它将 T 的每个属性 P 转换为可选属性。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">PartialPoint</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { x?: number; y?: number }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性映射" tabindex="-1"><a class="header-anchor" href="#只读属性映射"><span>只读属性映射</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ReadonlyPoint</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { readonly x: number; readonly y: number }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转换属性类型" tabindex="-1"><a class="header-anchor" href="#转换属性类型"><span>转换属性类型</span></a></h3>
<blockquote>
<p>将所有属性转换为数组类型。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Arrayify<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ArrayifiedPoint</span> <span class="token operator">=</span> Arrayify<span class="token operator">&lt;</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { x: number[]; y: number[] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件属性映射" tabindex="-1"><a class="header-anchor" href="#条件属性映射"><span>条件属性映射</span></a></h3>
<blockquote>
<p>RenameProps 是一个映射类型，它不仅映射了属性，还根据第二个泛型参数 S 重命名了属性。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">RenameProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">S</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> <span class="token constant">S</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RenamedPoint</span> <span class="token operator">=</span> RenameProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token string">"X"</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token string">"Y"</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { X: number; Y: number }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-as-进行类型断言" tabindex="-1"><a class="header-anchor" href="#使用-as-进行类型断言"><span>使用 as 进行类型断言</span></a></h3>
<blockquote>
<p>映射类型中的 as 关键字可以用来进行类型断言，这在处理类型转换时非常有用。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BoxedValue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">BoxedPoint</span> <span class="token operator">=</span> BoxedValue<span class="token operator">&lt;</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token comment">// { x: { value: number }; y: { value: number } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ol>
<li>映射类型中的 in 语法用于遍历一个类型的属性键。</li>
<li>映射类型可以有条件地使用 ? 来标记属性为可选。</li>
<li>readonly 可以用于使属性只读。</li>
<li>映射类型可以与泛型结合使用，以创建更通用的类型构造函数。</li>
</ol>
</div></template>


