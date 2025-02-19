<template><div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载"><span>函数重载</span></a></h2>
<blockquote>
<p>函数重载（Function Overloading）是一种允许一个函数根据参数的类型和数量有不同的行为的机制。函数重载通过在相同的函数名下提供多个不同的函数签名来实现。</p>
</blockquote>
<h3 id="函数重载的基本语法" tabindex="-1"><a class="header-anchor" href="#函数重载的基本语法"><span>函数重载的基本语法</span></a></h3>
<blockquote>
<p>greet 函数被重载了两次，一次接受一个 string 类型的参数，另一次接受一个 number 类型的参数。实现签名包含了两个重载签名的逻辑。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> person <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, person number "</span> <span class="token operator">+</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重载签名和实现签名" tabindex="-1"><a class="header-anchor" href="#重载签名和实现签名"><span>重载签名和实现签名</span></a></h3>
<h4 id="重载签名" tabindex="-1"><a class="header-anchor" href="#重载签名"><span>重载签名</span></a></h4>
<blockquote>
<p>定义了函数可以被调用的不同方式。它们指定了函数的参数列表和返回类型，但不包含函数的实现。</p>
</blockquote>
<h5 id="重载签名的例子" tabindex="-1"><a class="header-anchor" href="#重载签名的例子"><span>重载签名的例子</span></a></h5>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 重载签名</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token comment">// 实现签名</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> input <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Processing string input: "</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> input <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Processing number input: "</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Processing boolean input: "</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现签名" tabindex="-1"><a class="header-anchor" href="#实现签名"><span>实现签名</span></a></h4>
<blockquote>
<p>是函数的实际实现，它包含了函数的逻辑。实现签名必须与重载签名匹配，但可以包含更多的逻辑。</p>
</blockquote>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><font color=red>注意事项</font></span></a></h3>
<ol>
<li>重载签名必须在实现签名之前声明。</li>
<li>重载签名的参数类型必须不同，否则 TypeScript 编译器无法区分它们。</li>
<li>实现签名的参数类型应该是重载签名参数类型的联合。</li>
<li>函数的实现应该能够处理所有重载签名定义的情况。</li>
</ol>
</div></template>


