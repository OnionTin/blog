<template><div><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h2>
<p>不需要导包，工具类(构造方法是私有的，成员方法是静态的)</p>
<h3 id="常用的成员方法" tabindex="-1"><a class="header-anchor" href="#常用的成员方法"><span>常用的成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>static int abs(int a)</td>
<td>返回参数的绝对值</td>
</tr>
<tr>
<td>static int max(int a,int b)</td>
<td>返回两个参数中的较大值</td>
</tr>
<tr>
<td>static int min(int a,int b)</td>
<td>返回两个参数中的较小值</td>
</tr>
<tr>
<td>static double ceil(double a)</td>
<td>向上取整</td>
</tr>
<tr>
<td>static double floor(double a)</td>
<td>向下取整</td>
</tr>
<tr>
<td>static double pow(double a,double b)</td>
<td>返回 a 的 b 次幂</td>
</tr>
<tr>
<td>static long round(double a)</td>
<td><font color=red>四舍五入</font></td>
</tr>
<tr>
<td>static double random()</td>
<td><font color=red>0-1 之间的随机数</font></td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取较大值</span>

<span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0-1之间的随机数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


