<template><div><h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h2>
<blockquote>
<p>注意：</p>
<p>avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。</p>
<p>还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。</p>
</blockquote>
<table>
<thead>
<tr>
<th>函数</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>count()</td>
<td>统计数量</td>
</tr>
<tr>
<td>sum()</td>
<td>求和</td>
</tr>
<tr>
<td>max()</td>
<td>最大值</td>
</tr>
<tr>
<td>min()</td>
<td>最小值</td>
</tr>
<tr>
<td>avg()</td>
<td>平均值</td>
</tr>
<tr>
<td>truncate(x,y)</td>
<td>保留 y 位小数</td>
</tr>
<tr>
<td>round(x,y)</td>
<td>保留 y 位小数</td>
</tr>
<tr>
<td><font color=red>ifnull(x,y)</font></td>
<td><font color=red>如果 x 值为 Null，返回 y</font></td>
</tr>
</tbody>
</table>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询学生数量</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">as</span> 总的人数 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">></span> <span class="token number">18</span> <span class="token operator">and</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄总和</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最大值</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最小值</span>
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄平均值</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保持两位小数</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>


<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span>ifnull<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


