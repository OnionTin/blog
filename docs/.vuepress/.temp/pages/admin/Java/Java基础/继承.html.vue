<template><div><h2 id="继承-extends" tabindex="-1"><a class="header-anchor" href="#继承-extends"><span>继承(extends)</span></a></h2>
<p><code v-pre>private、protected、构造方法不被继承、this、super等问题</code></p>
<blockquote>
<p>类 B 继承 类 A</p>
<p>类 A：父类，超类，基类</p>
<p>类 B：子类，派生类</p>
</blockquote>
<h3 id="继承的好处" tabindex="-1"><a class="header-anchor" href="#继承的好处"><span>继承的好处</span></a></h3>
<ul>
<li>提高代码的复用性</li>
<li>让类与类之间产生继承关系，这是构成多态的前提条件</li>
</ul>
<h3 id="继承的弊端" tabindex="-1"><a class="header-anchor" href="#继承的弊端"><span>继承的弊端</span></a></h3>
<ul>
<li>提高了代码的耦合性（耦合性：程序间的依赖关系）
<ul>
<li>开发原则: 高内聚，低耦合
<ul>
<li>高内聚：是指一个人的能力越强越好</li>
<li>低耦合：是指一个人的关系越少越好</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="继承的特点" tabindex="-1"><a class="header-anchor" href="#继承的特点"><span>继承的特点</span></a></h3>
<ol>
<li>在 java 中，类只支持<code v-pre>单继承</code>，<code v-pre>不可以多继承</code>，可以<code v-pre>多层继承</code>，<code v-pre>不可以循环继承</code>。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 单继承</span>
<span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>子类不能继承父类中被 <code v-pre>private</code> 关键字所修饰的成员方法和变量。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以继承</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错，因为父类中的name被私有了</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>子类可以继承父类中 <code v-pre>protected</code> 关键字修饰的成员方法，不能继承其成员变量。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 父类自己</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以继承</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错，因为父类中的name被protected保护</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以继承</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>构造方法不能被继承。</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    i <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20  this指向调用的对象zi</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10  super指向继承的父类</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    zi<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


