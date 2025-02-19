<template><div><h2 id="readonlyarray-类型" tabindex="-1"><a class="header-anchor" href="#readonlyarray-类型"><span>ReadonlyArray 类型</span></a></h2>
<blockquote>
<p>ReadonlyArray 是一种内置的泛型类型，它表示一个只读的数组。这意味着数组的元素可以被读取，但不能被修改（即不能添加、删除或修改元素）。这与 JavaScript 中的 Object.freeze() 方法类似，但专门用于数组。</p>
</blockquote>
<h3 id="使用-readonlyarray" tabindex="-1"><a class="header-anchor" href="#使用-readonlyarray"><span>使用 ReadonlyArray</span></a></h3>
<blockquote>
<p>ReadonlyArray 可以用于确保数组不会被修改。这对于防止数据被意外改变非常有用，特别是在函数式编程中。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> readOnlyArray<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// readOnlyArray[0] = 10;</span>
<span class="token comment">// readOnlyArray.push(4);</span>
<span class="token comment">// readOnlyArray.pop();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义泛型对象类型时使用-readonlyarray" tabindex="-1"><a class="header-anchor" href="#定义泛型对象类型时使用-readonlyarray"><span>定义泛型对象类型时使用 ReadonlyArray</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">UserArray</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  users<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> users<span class="token operator">:</span> UserArray <span class="token operator">=</span> <span class="token punctuation">{</span>
  users<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"Alice"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"Bob"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// users.users.push({ id: 3, name: 'Carol' });</span>
<span class="token comment">// users.users[0] = { id: 1, name: 'Alice Updated' };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用泛型与-readonlyarray" tabindex="-1"><a class="header-anchor" href="#使用泛型与-readonlyarray"><span>使用泛型与 ReadonlyArray</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReadOnlyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> readOnlyNumbers<span class="token operator">:</span> ReadOnlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> readOnlyUsers<span class="token operator">:</span> ReadOnlyArray<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"Alice"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"Bob"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 以下操作都是不允许的，会导致编译错误</span>
<span class="token comment">// readOnlyNumbers.push(4);</span>
<span class="token comment">// readOnlyUsers[0] = { id: 1, name: 'Alice Updated' };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


