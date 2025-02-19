<template><div><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>Function</span></a></h2>
<blockquote>
<p>全局类型 Function 是所有 JavaScript 函数值的类型。它包括了所有函数对象共有的属性，如 call、bind 和 apply。此外，Function 类型的值可以被调用，并且这些调用返回 any 类型 。</p>
</blockquote>
<blockquote>
<p>当你在函数中声明 this 参数时，你为该函数调用时的上下文对象提供了一个类型注解。这在对象的方法或回调函数中尤其有用，以确保函数调用时 this 的类型是正确的。Printer 接口定义了一个 print 方法，该方法声明了 this 参数为 Printer 类型。这确保了 print 方法中的 this 指的是 Printer 类型的对象。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Printer</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setupPrinter</span><span class="token punctuation">(</span>p<span class="token operator">:</span> Printer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> printer<span class="token operator">:</span> Printer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">print</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"The page has finished loading."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>printer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myPrinter<span class="token operator">:</span> Printer <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">print</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Printing: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">setupPrinter</span><span class="token punctuation">(</span>myPrinter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在回调函数中声明 this 参数时，你可以确保回调函数中的 this 与期望的类型一致。doSomething 函数接受一个回调函数 f，该回调函数声明了 this 参数为 Printer 类型。这确保了当 doSomething 调用 f 时，this 指向 Printer 类型的对象。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Printer<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>printer<span class="token punctuation">,</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">doSomething</span><span class="token punctuation">(</span>myPrinter<span class="token punctuation">.</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3>
<p>需要注意的是，箭头函数不绑定自己的 this，它们继承父执行上下文的 this。因此，当你在类的方法中使用箭头函数时，this 可能不会指向你期望的对象。为了避免这种情况，可以使用普通函数或使用 bind 来确保 this 的正确性。</p>
</div></template>


