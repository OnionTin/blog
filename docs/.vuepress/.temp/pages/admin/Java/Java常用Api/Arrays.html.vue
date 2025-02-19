<template><div><h2 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays"><span>Arrays</span></a></h2>
<p>需要导包，在 java.util 包下；数组工具类(构造方法是私有的，成员方法都是静态的)</p>
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
<td>void sort(int[] a)</td>
<td>按照升序对数组进行排序</td>
</tr>
<tr>
<td>String toString()</td>
<td>返回数组的字符串形式</td>
</tr>
<tr>
<td>int[] copyOf(Object[] original, int newLength)</td>
<td>复制数组，扩容</td>
</tr>
</tbody>
</table>
<p><code v-pre>Arrays 扩容 与 System 扩容的区别在于一个是数组扩容，一个是 System 的内存扩容</code></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 扩容的案例</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 扩容的长度为6，System扩容写法不同</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 0, 0, 0]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


