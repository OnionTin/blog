<template><div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static"><span>static</span></a></h2>
<p><code v-pre>共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题</code></p>
<blockquote>
<p>static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。</p>
</blockquote>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ol>
<li>
<p>被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象<code v-pre>共享</code>。</p>
</li>
<li>
<p>被 static 修饰的成员变量和成员方法<code v-pre>独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关</code>，它们属于类本身，因此通过类名就可以访问它们。</p>
<p>类名.成员变量</p>
<p>类名.成员方法()</p>
</li>
<li>
<p>被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是<code v-pre>优先于对象存在于内存中</code>。</p>
</li>
</ol>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3>
<ol>
<li><code v-pre>静态方法只能访问类的静态成员变量和静态方法，不能访问非静态成员变量和非静态方法</code></li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有问题</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译报错</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">drink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


