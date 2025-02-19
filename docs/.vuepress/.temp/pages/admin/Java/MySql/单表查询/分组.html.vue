<template><div><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h2>
<blockquote>
<p>select * from 表名 group by 字段;</p>
<p>注意：</p>
<ol>
<li>
<p>分组之后查询的字段，必须是分组字段，或者是使用聚合函数处理的字段</p>
</li>
<li>
<p>where 和 having 都是条件语句；但 where 在分组前，而 having 在分组后</p>
</li>
</ol>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 按照性别分组，每组多少人</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>

<span class="token comment">-- 按照年龄分组，查询出每组的人数</span>
<span class="token comment">-- 要求：只显示人数大于2的记录</span>
<span class="token comment">-- 先分组，再筛选</span>
<span class="token keyword">select</span> age<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">group</span> <span class="token keyword">by</span> age <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 20岁以上的人，按照年龄分组，查询每组的人数</span>
<span class="token comment">-- 要求：只显示人数大于2的记录</span>
<span class="token comment">-- 先筛选，后分组，再筛选</span>
<span class="token keyword">select</span> age<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> age <span class="token operator">></span> <span class="token number">20</span> <span class="token keyword">group</span> <span class="token keyword">by</span> age <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 按照性别分组，查询出每组的人数</span>
<span class="token comment">-- 要求：只显示人数大于2的记录，并且按照人数降序排序</span>
<span class="token comment">-- 先分组，后筛选</span>
<span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">group</span> <span class="token keyword">by</span> sex
<span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>

<span class="token comment">-- 筛选出年龄大于18的记录，然后按照性别分组，查询出每组的人数，只展示人数大于2的记录</span>
<span class="token comment">-- 要求：先筛选，后分组，再筛选</span>
<span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students <span class="token keyword">where</span> age <span class="token operator">></span> <span class="token number">18</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sex
<span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生信息，按照年龄段分组查询，小于 18 的为一组，18-20 为一组，大于 20 的为一组</span>
<span class="token keyword">select</span> age<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">case</span> <span class="token keyword">when</span> age <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token keyword">then</span> <span class="token string">'小于 18'</span>
<span class="token keyword">when</span> age <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">and</span> age <span class="token operator">&lt;=</span> <span class="token number">20</span> <span class="token keyword">then</span> <span class="token string">'18-20'</span>
<span class="token keyword">else</span> <span class="token string">'大于 20'</span> <span class="token keyword">end</span> <span class="token keyword">as</span> 年龄段 <span class="token keyword">from</span> students<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


