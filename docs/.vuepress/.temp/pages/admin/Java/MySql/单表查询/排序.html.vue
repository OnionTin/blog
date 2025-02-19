<template><div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h2>
<blockquote>
<p>select * from 表名 order by 字段名 排序方式;</p>
<p>排序方式：asc（升序）、desc（降序），默认升序。</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询学生表，按照年龄排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">order</span> <span class="token keyword">by</span> age<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">order</span> <span class="token keyword">by</span> age<span class="token punctuation">,</span> id<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，并且只显示前三条记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">order</span> <span class="token keyword">by</span> age<span class="token punctuation">,</span> id <span class="token keyword">limit</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，</span>
<span class="token comment">-- 并且只显示前三条记录，并且只显示年龄大于18的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">></span> <span class="token number">18</span> <span class="token keyword">order</span> <span class="token keyword">by</span> age<span class="token punctuation">,</span> id <span class="token keyword">limit</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生信息，按照年龄降序，其中年龄为18、19、20，如果年龄相同，则按照学号排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">in</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">order</span> <span class="token keyword">by</span> age<span class="token punctuation">,</span> id <span class="token keyword">desc</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生信息，按照姓名由字典顺序进行排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">order</span> <span class="token keyword">by</span> name<span class="token punctuation">;</span>

<span class="token comment">-- 查询100个学生信息，按照年龄由大到小进行排序，年龄相同的话，</span>
<span class="token comment">-- 按照姓名由字典顺序进行排序，</span>
<span class="token comment">-- 如果姓名也相同的话，按照学号降序排序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">order</span> <span class="token keyword">by</span> age <span class="token keyword">desc</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> id <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


