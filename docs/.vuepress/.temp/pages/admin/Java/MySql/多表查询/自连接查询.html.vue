<template><div><h2 id="自连接查询" tabindex="-1"><a class="header-anchor" href="#自连接查询"><span>自连接查询</span></a></h2>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 自外连接查询格式</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a a1<span class="token punctuation">,</span>a a2 <span class="token keyword">where</span> a1<span class="token punctuation">.</span>id <span class="token operator">=</span> a2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 自连接查询案例</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> a<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> a <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a a1<span class="token punctuation">,</span>a a2 <span class="token keyword">where</span> a1<span class="token punctuation">.</span>id <span class="token operator">=</span> a2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
<span class="token comment">-- 结果:</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- | id | name | id | name |</span>
<span class="token comment">-- +----+------+----+------+</span>
<span class="token comment">-- |  1 | a    |  1 | a    |</span>
<span class="token comment">-- |  2 | b    |  2 | b    |</span>
<span class="token comment">-- |  3 | c    |  3 | c    |</span>
<span class="token comment">-- +----+------+----+------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


