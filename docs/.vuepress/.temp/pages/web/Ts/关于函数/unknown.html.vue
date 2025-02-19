<template><div><h2 id="unknown-未知类型-类型安全的-any" tabindex="-1"><a class="header-anchor" href="#unknown-未知类型-类型安全的-any"><span>unknown(未知类型, 类型安全的 any)</span></a></h2>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// any类型可以赋值给任意变量</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> a<span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 所以不建议使用any, 而是用unknown;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// unknown类型不可以赋值给任意变量</span>
<span class="token comment">// 解决办法:</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> c <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>
<span class="token comment">// 或者</span>
d <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>c<span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


