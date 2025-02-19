<template><div><h2 id="fileoutputstream-类-md" tabindex="-1"><a class="header-anchor" href="#fileoutputstream-类-md"><span>FileOutputStream 类.md</span></a></h2>
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
<td>public FileOutputStream(File file)</td>
<td>将输出流写到给定 File 对象的文件中</td>
</tr>
<tr>
<td>public FileOutputStream(String name)</td>
<td>作用同上，区别先去创建一个文件对象</td>
</tr>
<tr>
<td>public FileOutputStream(String name, Boolean append)</td>
<td>目的同上，但是与上边两个不同点是可以控制是否<font color=red>追加</font></td>
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
<td>public void write(int b)</td>
<td>在文件中写<code v-pre>一个字节大小</code>的数据</td>
</tr>
<tr>
<td>public void write(byte[] b)</td>
<td>将一个字节数组写到文件中</td>
</tr>
<tr>
<td>public void write(byte[] b,int off,int len)</td>
<td>将字节数组的一部分写到文件中，从 off 位置开始，写入 len 个</td>
</tr>
</tbody>
</table>
<h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiJieOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoFileOutputStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// aaa目录对象</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建aaa目录对象</span>
        <span class="token keyword">boolean</span> isFolderAaa <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// aaa.txt文件对象</span>
        <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"aaa.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建aaa.txt文件</span>
        <span class="token keyword">boolean</span> isTxtAaa <span class="token operator">=</span> file1<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// bbb.txt文件对象</span>
        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">"bbb.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 在aaa目录下创建bbb.txt文件</span>
        <span class="token keyword">boolean</span> isTxtBbb <span class="token operator">=</span> file2<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 在aaa.txt文件中写入一个字节长度的内容</span>
        <span class="token comment">// public FileOutputStream(File file)</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// public void write(int b)</span>
        fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在文件中是一个字符长度的二进制乱码 </span>
        fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在文件中表现为a</span>
        <span class="token comment">// 两个添加执行完成后文件中内容为a</span>
        <span class="token comment">// 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容</span>

        <span class="token comment">// 在bbb.txt文件中写入一个字节数组，或者说多个字节的内容</span>
        <span class="token comment">// public void write(byte[] b)</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 文件中内容为 abcdefghi</span>
        fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 文件中内容为 cde</span>
        <span class="token comment">// 两个方法执行完成后文件中内容为abcdefghcde</span>
        <span class="token comment">// 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两个小问题" tabindex="-1"><a class="header-anchor" href="#两个小问题"><span>两个小问题</span></a></h3>
<ol>
<li>如何换行？</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>换行符：
windows：\r\n
linux：\n
mac：\r

FileOutputStream fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"aaa.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
 * write(byte[] b)
 * getBytes: 将字符串转换为字节数组
*/</span>
fosb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"\r\n"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>如何追加？</p>
<p>正常情况下每次运行程序，文件都会被清空，如果想要追加，需要使用第三个构造方法，并且需要传入一个布尔值，传入 true 表示追加，传入 false 表示覆盖；默认是 false。</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// public FileOutputStream(String name, Boolean append)</span>
<span class="token class-name">FileOutputStream</span> fosb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file2<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


