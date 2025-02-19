<template><div><h2 id="约束条件" tabindex="-1"><a class="header-anchor" href="#约束条件"><span>约束条件</span></a></h2>
<blockquote>
<p>泛型约束条件（Generic Constraints）允许你限制泛型参数可以是哪些类型。这通常通过使用 extends 关键字来实现，它指定了泛型参数必须符合特定的类型或接口。</p>
</blockquote>
<h3 id="泛型约束的基本使用" tabindex="-1"><a class="header-anchor" href="#泛型约束的基本使用"><span>泛型约束的基本使用</span></a></h3>
<blockquote>
<p>泛型约束通常用于函数或类中，以确保泛型参数满足特定的条件。例如，你可能有一个函数，它需要操作具有 .length 属性的对象。T extends Lengthwise 指定了泛型参数 T 必须实现 Lengthwise 接口，即必须具有 length 属性。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">></span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 现在我们知道它具有.length属性，因此没有错误</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用类型参数作为约束" tabindex="-1"><a class="header-anchor" href="#使用类型参数作为约束"><span>使用类型参数作为约束</span></a></h3>
<blockquote>
<p>可以使用另一个类型参数作为当前类型参数的约束。这在你需要基于一个类型参数定义另一个类型参数时非常有用。Key extends keyof T 指定了 Key 必须是 T 的键之一，这样可以确保 obj[key] 是合法的访问</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Key <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> Key<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span>Key<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型约束的高级用法" tabindex="-1"><a class="header-anchor" href="#类型约束的高级用法"><span>类型约束的高级用法</span></a></h3>
<blockquote>
<p>泛型约束不仅可以用于接口，还可以用于类型别名、交叉类型等更复杂的类型表达式。例如，你可以创建一个类型别名，它将数组中的元素类型设为只读，但只有当该类型是数组时才生效。在这个类型别名中，如果 T 是数组类型，那么结果类型将是数组元素类型的只读版本。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReadOnlyIfArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


