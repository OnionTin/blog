<template><div><h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface"><span>接口(interface)</span></a></h2>
<p><code v-pre>变量：public static final int i = 1</code></p>
<p><code v-pre>方法：public abstract</code></p>
<p><code v-pre>构造方法: 无</code></p>
<p><code v-pre>接口的实现：抽象类</code></p>
<p><code v-pre>可继承、必须重写所有的抽象方法</code></p>
<blockquote>
<p>什么是接口 ?</p>
<p>比抽象类表现更加抽象的表现形式，就是接口</p>
<p>接口的格式 ?</p>
<p>interface 接口名 {</p>
<p>}</p>
<p>接口不是类 !!!</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Inter</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">implements</span> <span class="token class-name">Inter</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的特点" tabindex="-1"><a class="header-anchor" href="#接口的特点"><span>接口的特点</span></a></h3>
<ol>
<li>
<p>接口不是类，不能创建对象，接口需要类来实现</p>
</li>
<li>
<p>接口中的所有方法都是抽象方法(我们能用到的是，但是 java 开发人员不是)</p>
</li>
<li>
<p>一个类，如果想要实现一个接口，要么该类是抽象类，要么该类是普通类但是必须重写接口的抽象所有方法</p>
</li>
</ol>
<h3 id="接口的成员特点" tabindex="-1"><a class="header-anchor" href="#接口的成员特点"><span>接口的成员特点</span></a></h3>
<ol>
<li>成员变量</li>
</ol>
<blockquote>
<p>接口的所有变量全部都是自定义常量</p>
<p>默认修饰符: public static final</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>成员方法</li>
</ol>
<blockquote>
<p>接口中的所有方法都是抽象方法(java 开发人员除外)</p>
<p>默认修饰符: public abstract</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">ddd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>构造方法</li>
</ol>
<blockquote>
<p>接口中没有构造方法</p>
</blockquote>
<h3 id="接口基础用法" tabindex="-1"><a class="header-anchor" href="#接口基础用法"><span>接口基础用法</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Inter</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">implements</span> <span class="token class-name">Inter</span><span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


