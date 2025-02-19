<template><div><h2 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类"><span>内部类</span></a></h2>
<blockquote>
<p>什么是内部类 ?</p>
<p>一个类写在另一个类的里边，里边的类就是内部类</p>
<p>内部类有什么特点 ?</p>
<p><code v-pre>内部类可以直接访问外部类的成员，包括私有成员</code></p>
<p><code v-pre>外部类不能直接访问内部类</code>，要访问内部类的成员，必须通过间接的方式，<code v-pre>通过创建内部类的对象来访问</code></p>
</blockquote>
<h3 id="_1-成员内部类" tabindex="-1"><a class="header-anchor" href="#_1-成员内部类"><span>1. 成员内部类</span></a></h3>
<blockquote>
<p>定义在类中，方法外的内部类叫成员内部类</p>
</blockquote>
<ul>
<li>
<h5 id="成员内部类的使用" tabindex="-1"><a class="header-anchor" href="#成员内部类的使用"><span>成员内部类的使用</span></a></h5>
<h6 id="_1-修饰符为-public、protected、默认的" tabindex="-1"><a class="header-anchor" href="#_1-修饰符为-public、protected、默认的"><span>1. 修饰符为 public、protected、默认的</span></a></h6>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"内部类方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    in<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部类方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-修饰符为-static" tabindex="-1"><a class="header-anchor" href="#_2-修饰符为-static"><span>2. 修饰符为 static</span></a></h6>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"内部类方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 方式一
    */</span>
    <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    in<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部类方法</span>
    <span class="token doc-comment comment">/**
     * 方式二
    */</span>
    <span class="token comment">// 需要先导包 import com.inner.Outer.Inner;</span>
    <span class="token class-name">Inner</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in2<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    in2<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部类方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-修饰符为-private" tabindex="-1"><a class="header-anchor" href="#_3-修饰符为-private"><span>3. 修饰符为 private</span></a></h6>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"内部类方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Inner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    in<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部类方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Outer</span> ou <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ou<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-局部内部类" tabindex="-1"><a class="header-anchor" href="#_2-局部内部类"><span>2. 局部内部类</span></a></h3>
<blockquote>
<p>定义在类中，方法内的内部类叫局部内部类</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"局部内部类方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Inner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    in<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 局部内部类方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Outer</span> ou <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ou<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


