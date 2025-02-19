<template><div><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date"><span>Date</span></a></h2>
<p>需要导包，在 java.util 包下</p>
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
<td>public Date()</td>
<td>分配 Date 对象并初始化，以便它代表它被创建时的日期和时间</td>
</tr>
<tr>
<td>public Date(long date)</td>
<td>分配 Date 对象并初始化，以便它代表 date 参数中给出的毫秒时间值</td>
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
<td>public long getTime()</td>
<td>返回自 1970 年 1 月 1 日 00:00:00 毫秒值</td>
</tr>
<tr>
<td>public void setTime (long time)</td>
<td>设置自 1970 年 1 月 1 日 00:00:00 毫秒时间值</td>
</tr>
</tbody>
</table>
<h3 id="格式化时间-simpledateformat" tabindex="-1"><a class="header-anchor" href="#格式化时间-simpledateformat"><span>格式化时间(SimpleDateFormat)</span></a></h3>
<p>需要导包，在 java.text 包下</p>
<p>Date =&gt; String</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> dateString <span class="token operator">=</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String =&gt; Date</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Date</span> date <span class="token operator">=</span> dateFormat<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>dateString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用"><span>实际应用</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">SimpleDateFormat</span> dF1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">SimpleDateFormat</span> dF2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy年MM月dd日 HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">SimpleDateFormat</span> dF3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy/MM/dd HH:mm:ss E"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> time1 <span class="token operator">=</span> dF1<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> time2 <span class="token operator">=</span> dF2<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> time3 <span class="token operator">=</span> dF3<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2024-03-12 11:36:04</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2024年03月12日 11:36:04</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2024/03/12 11:36:04 星期二</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


