<template><div><h2 id="类型断言-慎用-避免破坏类型安全" tabindex="-1"><a class="header-anchor" href="#类型断言-慎用-避免破坏类型安全"><span>类型断言(慎用,避免破坏类型安全)</span></a></h2>
<blockquote>
<p>类型断言（Type Assertions）是一种告诉编译器你比它更了解某个变量的类型的机制。类型断言可以用来手动指定编译器可能不确定的变量的类型</p>
</blockquote>
<h3 id="类型断言的基本语法" tabindex="-1"><a class="header-anchor" href="#类型断言的基本语法"><span>类型断言的基本语法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> myCanvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"main_canvas"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLCanvasElement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>&lt;&gt;语法</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> myCanvas <span class="token operator">=</span> <span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"main_canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3>
<blockquote>
<p>类型断言通常用在以下场景：</p>
<ol>
<li>
<p>当你知道编译器是错误的时候：有时候，你可能比编译器更了解某个函数的返回值。</p>
</li>
<li>
<p>当你想要绕过编译器的类型检查时：有时候，你可能想要执行一些不安全的类型操作。</p>
</li>
<li>
<p>与第三方库交互时：当使用 TypeScript 与 JavaScript 库时，你可能需要告诉编译器某个值的确切类型。</p>
</li>
</ol>
</blockquote>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>

<span class="token comment">// 告诉 TypeScript 我们知道 someValue 是一个字符串</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与接口一起使用" tabindex="-1"><a class="header-anchor" href="#与接口一起使用"><span>与接口一起使用</span></a></h3>
<blockquote>
<p>我们通过类型断言来确定 pet 的具体类型，然后调用相应的方法</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Fish</span> <span class="token punctuation">{</span>
  <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getSmallPet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Bird <span class="token operator">|</span> Fish <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> pet <span class="token operator">=</span> <span class="token function">getSmallPet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>pet<span class="token punctuation">.</span>swim<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>pet <span class="token keyword">as</span> Fish<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>pet <span class="token keyword">as</span> Bird<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断言一个变量为-any-类型" tabindex="-1"><a class="header-anchor" href="#断言一个变量为-any-类型"><span>断言一个变量为 any 类型</span></a></h3>
<blockquote>
<p>当你从 JavaScript 代码迁移到 TypeScript 时，或者当你处理一个大型代码库中的遗留代码时，你可能会遇到 any 类型。类型断言可以用来将 any 类型变量断言为更具体的类型,在这个例子中，我们将 any 类型的 value 断言为 string 类型，然后安全地访问其 length 属性。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断言函数返回值类型" tabindex="-1"><a class="header-anchor" href="#断言函数返回值类型"><span>断言函数返回值类型</span></a></h3>
<blockquote>
<p>我们断言 getContent 函数的返回值为 string 类型</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非空断言运算符-后缀" tabindex="-1"><a class="header-anchor" href="#非空断言运算符-后缀"><span>非空断言运算符(后缀！)</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">liveDangerously</span><span class="token punctuation">(</span>x<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// No error</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


