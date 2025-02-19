<template><div><h2 id="bigdecimal" tabindex="-1"><a class="header-anchor" href="#bigdecimal"><span>BigDecimal</span></a></h2>
<p>需要导包，在 java.math 包下</p>
<h3 id="常见构造方法" tabindex="-1"><a class="header-anchor" href="#常见构造方法"><span>常见构造方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public BigDecimal(double val)</td>
<td>将 double 转换为 BigDecimal</td>
</tr>
<tr>
<td>public BigDecimal(String val)</td>
<td>将 String 转换为 BigDecimal</td>
</tr>
</tbody>
</table>
<font color=red>注意: 如果期望结果更加准确的话，建议使用 BigDecimal(String val)的构造方法</font><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoBigDecimal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// public BigDecimal(String val)</span>
    <span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.01</span>
    <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.10"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1.10</span>

    <span class="token comment">// public BigDecimal(double val)</span>
    <span class="token class-name">BigDecimal</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.100000000000000005...</span>
    <span class="token class-name">BigDecimal</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public BigDecimal add(另一个 BigDecimal 对象)</td>
<td>加法运算</td>
</tr>
<tr>
<td>public BigDecimal subtract(另一个 BigDecimal 对象)</td>
<td>减法运算</td>
</tr>
<tr>
<td>public BigDecimal multiply(另一个 BigDecimal 对象)</td>
<td>乘法运算</td>
</tr>
<tr>
<td>public BigDecimal divide(另一个 BigDecimal 对象)</td>
<td>除法运算</td>
</tr>
<tr>
<td>public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode)</td>
<td><font color=red>除法运算除不尽</font></td>
</tr>
</tbody>
</table>
<blockquote>
<p>public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode)</p>
<p>divisor：另一个 BigDecimal 对象</p>
<p>scale：保留几位小数</p>
<p>roundingMode：舍入模式(ROUND_DOWN,ROUND_UP,ROUND_HALF_UP 等)</p>
<p>ROUND_DOWN：直接舍去(去尾)</p>
<p>ROUND_UP：直接进位(加头)</p>
<p>ROUND_HALF_UP：四舍五入</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 加法案例(加减乘除一样，这里以加法为例)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoBigDecimal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">BigDecimal</span> bd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd3 <span class="token operator">=</span> bd1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.30000...</span>

    <span class="token class-name">BigDecimal</span> bd10 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd20 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd30 <span class="token operator">=</span> bd10<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bd20<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.3 我们想要的结果</span>
    <span class="token comment">// 使用 BigDecimal(String val)结果准确</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 除法(除不尽)</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoBigDecimal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">BigDecimal</span> bd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"10.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"3.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd3 <span class="token operator">=</span> bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bd2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd4 <span class="token operator">=</span> bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bd2<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> bd5 <span class="token operator">=</span> bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bd2<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3.33</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3.334</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3.3333</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


