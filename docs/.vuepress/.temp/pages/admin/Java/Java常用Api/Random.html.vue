<template><div><h2 id="random" tabindex="-1"><a class="header-anchor" href="#random"><span>Random</span></a></h2>
<p>需要导包， 在 java.util 包下</p>
<h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法"><span>构造方法</span></a></h3>
<p>Random() 创建一个新的随机数生成器</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Random()</td>
<td>创建一个新的随机数生成器</td>
</tr>
</tbody>
</table>
<h3 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span>常用方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>int nextInt(int n)</td>
<td>返回一个伪随机数，范围在 0（包括）到 n（不包括）之间</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> nI <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>nI<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出结果可以为： 0 1 4 3 7 8 2 6 9 5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-1-100-之间的随机数" tabindex="-1"><a class="header-anchor" href="#获取-1-100-之间的随机数"><span>获取 1-100 之间的随机数</span></a></h3>
<h4 id="math-方法" tabindex="-1"><a class="header-anchor" href="#math-方法"><span>Math 方法</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="random-方法" tabindex="-1"><a class="header-anchor" href="#random-方法"><span><font color= red>Random 方法</font></span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


