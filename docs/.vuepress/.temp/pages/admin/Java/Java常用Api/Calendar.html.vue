<template><div><h2 id="calendar" tabindex="-1"><a class="header-anchor" href="#calendar"><span>Calendar</span></a></h2>
<p>需要导包，在 java.util 包下, 抽象类，使用时需要创建子对象</p>
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
<td>getInstance()</td>
<td>获取 Calender 的子对象</td>
</tr>
<tr>
<td>int get(int field)</td>
<td>获取年、月、日、小时、分钟、秒等</td>
</tr>
<tr>
<td>void set(int field, int value)</td>
<td>设置年、月、日、小时、分钟、秒等</td>
</tr>
<tr>
<td>final Date getTime()</td>
<td>获取 Date 对象(将 Calendar 转成 Date 类型)</td>
</tr>
<tr>
<td>abstract void add(int field, int amount)</td>
<td>对年、月、日等进行增将或减量</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Calendar</span> c <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c: Calendar子对象</span>

  <span class="token comment">// 获取年、月、日、小时、分钟、秒等</span>
  <span class="token keyword">int</span> year <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> month <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> day <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> hour <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> minute <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> second <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>year <span class="token operator">+</span> <span class="token string">"年"</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">"月"</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">"日"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hour <span class="token operator">+</span> <span class="token string">"时"</span> <span class="token operator">+</span> minute <span class="token operator">+</span> <span class="token string">"分"</span> <span class="token operator">+</span> second <span class="token operator">+</span> <span class="token string">"秒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 设置年、月、日、小时、分钟、秒等</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">,</span> <span class="token number">2020</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 月份是从0开始的</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Sun Nov 01 12:30:30 CST 2020</span>

  <span class="token comment">// 对年、月、日等进行增将或减量</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正数是加</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 月份是从0开始的</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Thu Nov 01 12:30:30 CST 2021</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


