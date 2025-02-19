<template><div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>关键字</th>
<th>内存占用</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>整数</td>
<td>byte</td>
<td>1 字节</td>
<td>-128~127</td>
</tr>
<tr>
<td></td>
<td>short</td>
<td>2 字节</td>
<td>-32768~32767</td>
</tr>
<tr>
<td></td>
<td>int</td>
<td>4 字节</td>
<td>-2 的 31 次方 到 2 的 31 次方-1</td>
</tr>
<tr>
<td></td>
<td>long</td>
<td>8 字节</td>
<td>-2 的 63 次方 到 2 的 63 次方-1</td>
</tr>
<tr>
<td>浮点数</td>
<td>float</td>
<td>4 字节</td>
<td>1.4E-45~3.402823E+38</td>
</tr>
<tr>
<td></td>
<td>double</td>
<td>8 字节</td>
<td>4.9E-324~1.7976931348623157E+308</td>
</tr>
<tr>
<td>字符</td>
<td>char</td>
<td>2 字节</td>
<td>0~65535</td>
</tr>
<tr>
<td>布尔</td>
<td>boolean</td>
<td>1 字节</td>
<td>true,false</td>
</tr>
</tbody>
</table>
<h3 id="常见的考试题" tabindex="-1"><a class="header-anchor" href="#常见的考试题"><span>常见的考试题</span></a></h3>
<ol>
<li>针对 <code v-pre>byte</code> 类型和 <code v-pre>short</code> 类型的时候，只要<code v-pre>右</code>边有一个是<code v-pre>变量</code>，就会编译<code v-pre>报错</code></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b3 <span class="token operator">=</span> b1 <span class="token operator">+</span> b2<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>b3<span class="token punctuation">)</span> <span class="token comment">//编译报错</span>
<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s3 <span class="token operator">=</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span> <span class="token comment">//编译报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b2 <span class="token operator">=</span> b1 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//编译报错</span>
<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s2 <span class="token operator">=</span> s1 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printIn</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//编译报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>注意数据类型的范围</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">126</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span>printIn <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//正确，127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">127</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span>printIn <span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//编译报错，因为 byte 范围最大值是 127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


