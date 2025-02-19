<template><div><h2 id="enmu-枚举-把所有的可能的情况都列出来" tabindex="-1"><a class="header-anchor" href="#enmu-枚举-把所有的可能的情况都列出来"><span>enmu(枚举: 把所有的可能的情况都列出来)</span></a></h2>
<blockquote>
<p>枚举（Enums）是一种特殊的类型，它为一组数值赋予了更加友好的名字。枚举可以被用来定义命名的常数集合，这使得代码更加易读和易于维护。</p>
</blockquote>
<h3 id="普通枚举" tabindex="-1"><a class="header-anchor" href="#普通枚举"><span>普通枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code>enmu Sex<span class="token punctuation">{</span>
  Male<span class="token punctuation">,</span>   <span class="token comment">// 不写值的话, 自动转成0</span>
  Female <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">// 赋值为1</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span>  <span class="token builtin">string</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> Sex <span class="token punctuation">}</span><span class="token punctuation">;</span>
i <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'ths'</span><span class="token punctuation">,</span>
  sex<span class="token operator">:</span> Sex<span class="token punctuation">.</span>Male <span class="token comment">// 自动转成0了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带字符串值的枚举" tabindex="-1"><a class="header-anchor" href="#带字符串值的枚举"><span>带字符串值的枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token string">"FF0000"</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token string">"00FF00"</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token string">"0000FF"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "FF0000"</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带数字值的枚举" tabindex="-1"><a class="header-anchor" href="#带数字值的枚举"><span>带数字值的枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Green<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常数成员和计算成员" tabindex="-1"><a class="header-anchor" href="#常数成员和计算成员"><span>常数成员和计算成员</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
  DarkRed <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>DarkRed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向映射" tabindex="-1"><a class="header-anchor" href="#反向映射"><span>反向映射</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token string">"FF0000"</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token string">"00FF00"</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token string">"0000FF"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"FF0000"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Color.Red</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举作为类型" tabindex="-1"><a class="header-anchor" href="#枚举作为类型"><span>枚举作为类型</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字符串枚举" tabindex="-1"><a class="header-anchor" href="#字符串枚举"><span>字符串枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
  Pending <span class="token operator">=</span> <span class="token string">"PENDING"</span><span class="token punctuation">,</span>
  Approved <span class="token operator">=</span> <span class="token string">"APPROVED"</span><span class="token punctuation">,</span>
  Rejected <span class="token operator">=</span> <span class="token string">"REJECTED"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printStatus</span><span class="token punctuation">(</span>status<span class="token operator">:</span> Status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printStatus</span><span class="token punctuation">(</span>Status<span class="token punctuation">.</span>Approved<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "APPROVED"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字枚举" tabindex="-1"><a class="header-anchor" href="#数字枚举"><span>数字枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> NumberEnum <span class="token punctuation">{</span>
  One<span class="token punctuation">,</span>
  Two<span class="token punctuation">,</span>
  Three<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NumberEnum<span class="token punctuation">.</span>One<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NumberEnum<span class="token punctuation">.</span>Two<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NumberEnum<span class="token punctuation">.</span>Three<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部枚举" tabindex="-1"><a class="header-anchor" href="#外部枚举"><span>外部枚举</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// app.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Color <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./colors"</span><span class="token punctuation">;</span>
<span class="token comment">// colors.ts</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token string">"FF0000"</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token string">"00FF00"</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token string">"0000FF"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "FF0000"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


