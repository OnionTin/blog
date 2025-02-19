<template><div><h2 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数"><span>可变参数</span></a></h2>
<p>什么是可变参数？</p>
<p>比如求两个数的和，可以知道是两个参数；求三个数的和，可以知道是三个参数；求 N(未知)个数的和，参数就是可变参数。</p>
<h3 id="可变参数的格式" tabindex="-1"><a class="header-anchor" href="#可变参数的格式"><span>可变参数的格式</span></a></h3>
<p>修饰符返 回值类型 方法名(数据类型... 变量名){</p>
<p>执行语句</p>
<p>return 返回值;</p>
<p>}</p>
<h3 id="可变参数的本质" tabindex="-1"><a class="header-anchor" href="#可变参数的本质"><span>可变参数的本质</span></a></h3>
<font color=red>可变参数的本质其实就是数组容器。</font><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<p>当一个方法中，有多个参数时，并且其中有一个参数是可变参数，那<font color=red>可变参数必须放在最后。</font></p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token constant">IO</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoKbcs</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> total <span class="token operator">=</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可变参数传参求值</span>
        <span class="token comment">// int total = getNum({1,2,3}); // 数组传参求值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
        <span class="token function">getLing</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 可变参数</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// int[] i = {1,2,3} &lt;=> int...3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">:</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 参数都是一样的，不是重载，下边放开会爆红</span>
    <span class="token comment">// 数组和可变参数的形参格式不一样</span>
    <span class="token comment">// public static int getNum(int[] i){</span>
        <span class="token comment">// System.out.println(i); // [1,2,3]</span>
        <span class="token comment">// System.out.println(i.length); // 3</span>
        <span class="token comment">// int sum = 0;</span>
        <span class="token comment">// for (int j : i) {</span>
            <span class="token comment">// sum += j;</span>
        <span class="token comment">// }</span>
        <span class="token comment">// return sum;</span>
    <span class="token comment">// }</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getLing</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// getLing(4, 16, 12, 13, 14);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
        <span class="token comment">// 可变参数放最后，int...k其实是12, 13, 14</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [I@3f99bd52</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [12, 13, 14]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


