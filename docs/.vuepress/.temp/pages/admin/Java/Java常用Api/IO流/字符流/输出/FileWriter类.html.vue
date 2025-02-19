<template><div><h2 id="filewriter-类" tabindex="-1"><a class="header-anchor" href="#filewriter-类"><span>FileWriter 类</span></a></h2>
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
<td>public FileWriter(File file)</td>
<td>将输出流写到给定 File 对象的文件中</td>
</tr>
<tr>
<td>public FileWriter(File file, boolean append)</td>
<td>同上，追加</td>
</tr>
<tr>
<td>public FileWriter(String fileName)</td>
<td>将输出流写到指定名字的文件中</td>
</tr>
<tr>
<td>public FileWriter(String fileName, boolean append)</td>
<td>同上并追加</td>
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
<td>public void close</td>
<td>释放资源</td>
</tr>
<tr>
<td>public void flush</td>
<td>刷新</td>
</tr>
<tr>
<td>public void write(int c)</td>
<td>写入一个字符数据</td>
</tr>
<tr>
<td>public void write(char[] cbuf)</td>
<td>写入一个字符数组数据</td>
</tr>
<tr>
<td>public void write(char[] cbuf, int off, int len)</td>
<td>写入一个字符数组的一部分数据</td>
</tr>
<tr>
<td>public void write(String str)</td>
<td>写入一个字符串数据</td>
</tr>
<tr>
<td>public void write(String str, int off, int len)</td>
<td>写入一个字符串的一部分数据</td>
</tr>
</tbody>
</table>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>ZiFuOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileWriterDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 给定了一个不存在的文件，那么会自动创建</span>
        <span class="token comment">// public FileWriter(String fileName)</span>

        <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">"aaa/111.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fw<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// java.io.FileWriter@23fc625e</span>

        <span class="token comment">// public void write(int c)</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// i</span>

        <span class="token comment">// public void write(char[] cbuf)</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">'约'</span><span class="token punctuation">,</span> <span class="token char">'不'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 约不</span>

        <span class="token comment">// public void write(char[] cbuf, int off, int len)</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 约</span>

        <span class="token comment">// public void write(String str)</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"？"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ？</span>

        <span class="token comment">// public void write(String str, int off, int len)</span>
        fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"？随便吧。爱约不约"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 随便吧。</span>

        fw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ai约不约？随便吧。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


