<template><div><h2 id="printstream-类" tabindex="-1"><a class="header-anchor" href="#printstream-类"><span>PrintStream 类</span></a></h2>
<p>打印字节流，只有输出流，没有输入流</p>
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
<td>public PrintStream(String fileName)</td>
<td>根据指定的文件创建 PrintStream</td>
</tr>
<tr>
<td>public PrintStream(OutputStream out, boolean autoFlush)</td>
<td>根据指定的 OutputStream 创建 PrintStream；默认 false</td>
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
<td>public void println(any x)</td>
<td>打印任意类型的 x，并换行</td>
</tr>
<tr>
<td>public void print(any x)</td>
<td>打印任意类型的 x，不换行</td>
</tr>
<tr>
<td>public void write(int b)</td>
<td>将指定的字节写入此流，不换行</td>
</tr>
<tr>
<td>public void write(byte[] buf, int off, int len)</td>
<td>将指定的字节数组的一部分写入此流，不换行</td>
</tr>
</tbody>
</table>
<h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">IO<span class="token punctuation">.</span>DaYinOutput</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">PrintStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrintStream01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// public PrintStream(String fileName)</span>
        <span class="token comment">/*
        PrintStream ps = new PrintStream("aaa/888.txt");
        ps.println("你好");
        ps.print("这个不换行!");
        ps.write(97);
        ps.close();
        */</span>

        <span class="token comment">// PrintStream(OutputStream out, boolean autoFlush)</span>
        <span class="token comment">// autoFlush：只有值为true，且方法为println、printf、format才会自动刷新</span>
        <span class="token class-name">PrintStream</span> ps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"aaa/888.txt"</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"autoFlush:true，这个会自动刷新；且换行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"autoFlush:true，这个也不会自动刷新；且不换行!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


