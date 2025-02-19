<template><div><h2 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid"><span>UUID</span></a></h2>
<p>需要导包，在 java.util 包下</p>
<p>一般不用他的构造</p>
<h3 id="常见成员方法" tabindex="-1"><a class="header-anchor" href="#常见成员方法"><span>常见成员方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>static UUID randomUUID()</td>
<td>随机数序列</td>
</tr>
<tr>
<td>String toString()</td>
<td>转成字符串类型</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> uuid <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出结果带-：dcf611f4-80c8-4610-ae94-1df5e9694af9</span>
uuid <span class="token operator">=</span> uuid<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出结果不带-：dcf611f480c84610ae941df5e9694af9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


