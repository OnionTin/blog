<template><div><h2 id="反射案例-1" tabindex="-1"><a class="header-anchor" href="#反射案例-1"><span>反射案例 1</span></a></h2>
<blockquote>
<p>已知有一个 ArrayList，泛型为 String，里面存储了一些数据，如何使用反射技术，来实现向该集合中存储 Integer 类型的数据？</p>
<p>已知泛型是 String 类型，但是要加入 Integer 类型的数据，正常是明显不行的，可以利用反射技术实现。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 已知有一个 ArrayList，泛型为 String，里面存储了一些数据，
 * 如何使用反射技术，来实现向该集合中存储 Integer 类型的数据？
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo07</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> al <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        al<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        al<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这一步明显编译不过</span>
        <span class="token comment">// al.add(111);</span>

        <span class="token comment">// 获取字节码文件</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> al<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取add方法对象</span>
        <span class="token class-name">Method</span> add_method <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"add"</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用对象的add方法</span>
        add_method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>al<span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        add_method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>al<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        add_method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>al<span class="token punctuation">,</span> <span class="token string">"啥类型的数据都可以，因为是Object类型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> al<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// hello</span>
            <span class="token comment">// world</span>
            <span class="token comment">// 111</span>
            <span class="token comment">// true</span>
            <span class="token comment">// 啥类型的数据都可以，因为是Object类型</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


