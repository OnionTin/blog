<template><div><h2 id="final" tabindex="-1"><a class="header-anchor" href="#final"><span>final</span></a></h2>
<p><code v-pre>常量、初始值、不被继承、不被重写</code></p>
<h3 id="final-关键字的特点" tabindex="-1"><a class="header-anchor" href="#final-关键字的特点"><span>final 关键字的特点</span></a></h3>
<ol>
<li>
<p>final 关键字修饰的变量就是常量</p>
<p>常量的分类</p>
<ol>
<li>
<p>字面量常量</p>
<ul>
<li>整数常量</li>
<li>小数常量</li>
<li>字符常量</li>
<li>字符串常量</li>
<li>布尔常量</li>
<li>空常量</li>
</ul>
</li>
<li>
<p>自定义常量</p>
</li>
</ol>
<ul>
<li>被 final 修饰的变量</li>
</ul>
</li>
<li>
<p>被 final 修饰的类不能被继承</p>
</li>
<li>
<p>被 final 修饰的成员方法不能被重写</p>
</li>
</ol>
<h3 id="final-的注意事项" tabindex="-1"><a class="header-anchor" href="#final-的注意事项"><span>final 的注意事项</span></a></h3>
<blockquote>
<p>如果一个成员变量，在被定义的时候，并没有赋初始值，会编译报错，我们必须给其赋值。</p>
<p>赋值的方式有两种：</p>
<ol>
<li>
<p>定义的同时赋值</p>
</li>
<li>
<p>有参构造赋值</p>
</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token comment">// final char value = 'final'; // 没有问题 方式一</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token keyword">public</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// 方式二</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


