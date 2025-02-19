<template><div><h2 id="stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuilder"><span>StringBuilder</span></a></h2>
<blockquote>
<p>其实就是用来拼接字符串的，比 StringBuffer 多了一个 toString 方法，可以返回一个 String 对象；</p>
<p>StringBuilder 和 StringBuffer 非常像，除了构造和 toString 方法不同之外，其他方法都一样。</p>
</blockquote>
<p>什么是 StringBuilder？</p>
<ul>
<li>一个<code v-pre>可变</code>的字符序列，String 是<code v-pre>不可变</code>的</li>
<li>字符串的缓冲区</li>
<li>是一个容器</li>
</ul>
<h3 id="stringbuilder-容器的特点" tabindex="-1"><a class="header-anchor" href="#stringbuilder-容器的特点"><span>StringBuilder 容器的特点</span></a></h3>
<p>缓冲区可以装任何的东西，但是装进去就取不出来了，而且，装进去的数据都会变成字符串。</p>
<h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public StringBuilder()</td>
<td>构造一个不带任何字符的字符串生成器，其初始容量为 16 个字符</td>
</tr>
<tr>
<td>public StringBuilder(String str)</td>
<td>构造一个指定内容的字符串生成器。(初始容量: 16 + 字符串参数的长度)</td>
</tr>
</tbody>
</table>
<h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public StringBuilder append(任意类型 b)</td>
<td>追加</td>
</tr>
<tr>
<td>public int capacity()</td>
<td>返回当前容量</td>
</tr>
<tr>
<td>public StringBuilder reverse()</td>
<td>反转</td>
</tr>
<tr>
<td>public String toString()</td>
<td>此字符序列的字符串表示形式(StringBuilder =&gt; String)</td>
</tr>
</tbody>
</table>
<h3 id="stringbuilder-和-string-转换" tabindex="-1"><a class="header-anchor" href="#stringbuilder-和-string-转换"><span>StringBuilder 和 String 转换</span></a></h3>
<p>String =&gt; StringBuilder</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>StringBuilder =&gt; String</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoStringBuilder</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// public StringBuilder()</span>
    <span class="token class-name">StringBuilder</span> sb1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16位</span>

    <span class="token comment">// public StringBuilder(String str)</span>
    <span class="token class-name">StringBuilder</span> sb2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "abc"</span>

    <span class="token class-name">StringBuilder</span> sb3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"我这是一个超过了16位的一个特别长的字符"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认16位，超出部分自动扩容</span>

    <span class="token comment">// public StringBuilder append(任意类型 b)</span>
    <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">123.456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Pig</span> pig<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>pig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出结果:</span>
    <span class="token comment">// abctrue123.456acom.wuziqi.gobang.controller.Pig@23fc625e123</span>

    <span class="token comment">// public int capacity()</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前容量:"</span> <span class="token operator">+</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前容量:114</span>

    <span class="token comment">// public StringBuilder reverse()</span>
    <span class="token class-name">StringBuilder</span> sbR <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sbR<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出反转后结果:</span>
    <span class="token comment">// 321e526cf32@giP.rellortnoc.gnabog.iqizuw.moca654.321eurtcba</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Pig</span><span class="token punctuation">{</span>
  <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/images/StringBuilder.jpg" alt="StringBuilder"></p>
</div></template>


