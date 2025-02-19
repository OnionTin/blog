<template><div><h2 id="笛卡尔积查询" tabindex="-1"><a class="header-anchor" href="#笛卡尔积查询"><span>笛卡尔积查询</span></a></h2>
<p>所有多表查询的，最基础查询；笛卡尔积查询本身没有意义，平时不会用。</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> a<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> b<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> a<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> b<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'aaa'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'bbb'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> b <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">'ccc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
<span class="token comment">-- 结果:</span>
<span class="token comment">-- 1 a 1 aaa</span>
<span class="token comment">-- 2 b 1 aaa</span>
<span class="token comment">-- 3 c 1 aaa</span>
<span class="token comment">-- 1 a 2 bbb</span>
<span class="token comment">-- 2 b 2 bbb</span>
<span class="token comment">-- 3 c 2 bbb</span>
<span class="token comment">-- 1 a 4 ccc</span>
<span class="token comment">-- 2 b 4 ccc</span>
<span class="token comment">-- 3 c 4 ccc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


