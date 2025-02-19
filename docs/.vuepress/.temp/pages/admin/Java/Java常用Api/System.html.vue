<template><div><h2 id="system" tabindex="-1"><a class="header-anchor" href="#system"><span>System</span></a></h2>
<p>系统类，不用导包，当然也不能实例化</p>
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
<td>static void exit(int status)</td>
<td>退出 JVM 虚拟机 一般是 0</td>
</tr>
<tr>
<td>static long currentTimeMillis()</td>
<td>获取当前系统日期时间毫秒值</td>
</tr>
<tr>
<td>static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)</td>
<td>复制数组(底层用来扩容数组)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)</p>
<p>src：原数组</p>
<p>srcPos：原数组的起始位置</p>
<p>dest：新数组</p>
<p>destPos：新数组的起始位置</p>
<p>length：复制的个数</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 扩容的案例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemDemo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> src <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 5：新数组的长度，也是扩容后的长度</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dest<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> src<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dest<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>dest<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 输出结果：1 2 3 0 0, 后面的两个0是扩容的结果</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


