<template><div><h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h2>
<blockquote>
<p>select * from 表名 limit 个数, 每页条数;</p>
<p>其中，个数从 0 开始，即默认为 0；每页条数默认为 10 条；个数等于 第 n 页 * 每页条数</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询第一页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第二页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第三页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第四页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第n页</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> 每页条数<span class="token punctuation">,</span> 每页条数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


