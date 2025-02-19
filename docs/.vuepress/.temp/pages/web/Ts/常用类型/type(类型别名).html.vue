<template><div><h2 id="type-类型别名" tabindex="-1"><a class="header-anchor" href="#type-类型别名"><span>type(类型别名)</span></a></h2>
<blockquote>
<p>类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserID</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 类型别名</span>
<span class="token keyword">function</span> <span class="token function">getUserByID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> UserID<span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
  <span class="token comment">// 实现根据 ID 获取用户</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Fetching user with ID:"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> User<span class="token punctuation">;</span> <span class="token comment">// 模拟返回用户</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  roles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  isActive<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  metadata<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    createdAt<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    updatedAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  isActive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  metadata<span class="token operator">:</span> <span class="token punctuation">{</span>
    createdAt<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


