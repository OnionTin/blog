<template><div><h2 id="bufferedoutputstream-类" tabindex="-1"><a class="header-anchor" href="#bufferedoutputstream-类"><span>BufferedOutputStream 类</span></a></h2>
<blockquote>
<p>缓冲字节输出流、有缓冲区、高效</p>
</blockquote>
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
<td>public BufferedInputStream(OutputStream out)</td>
<td>将输出流写到给定 File 对象的文件</td>
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
<td>public void flush</td>
<td>刷新缓冲区</td>
</tr>
<tr>
<td>public void close</td>
<td>释放资源，同时自带刷新缓冲区的功能</td>
</tr>
<tr>
<td>其他方法</td>
<td><RouteLink to="/admin/Java/Java常用Api/IO流/字节流/写入/FileOutputStream类.md">同 FileOutputStream</RouteLink></td>
</tr>
</tbody>
</table>
<h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiJieOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoBufferedIOutputStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// public BufferedOutputStream(FileOutputStream out)</span>
        <span class="token comment">// 有参构造的原因是因为底层，使用的是装饰设计模式</span>

        <span class="token comment">// FileOutputStream fos = new FileOutputStream("aaa/bbb.txt");</span>
        <span class="token comment">// BufferedOutputStream bos = new BufferedOutputStream(fos);</span>

        <span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"aaa/bbb.txt"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 写出数据</span>
        <span class="token comment">// 一次写出一个字节</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 刷新缓冲区，否则数组一直在缓冲区，没有写入，导致文件一直是空白的</span>
        bos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 一次写出一个数组长度的字节</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 换行</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"\r\n"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 缓冲</span>
        bos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


