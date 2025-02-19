<template><div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h2>
<p><code v-pre>局部代码块: 方法执行后消失，释放内存；</code></p>
<p><code v-pre>构造代码块: 抽离共有部分，每次创建对象都执行；</code></p>
<p><code v-pre>静态代码块: 只加载一次，抽离共有部分</code></p>
<h3 id="局部代码块" tabindex="-1"><a class="header-anchor" href="#局部代码块"><span>局部代码块</span></a></h3>
<blockquote>
<p>定义在方法中的代码块就是局部代码块</p>
<p>作用: 能够让局部变量，更早的在内存中消失，节省内存空间</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 基础用法</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 这就是局部代码块</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 节省内存空间</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// num变量有必要活得很久嘛?</span>
    <span class="token punctuation">}</span> <span class="token comment">// 局部代码块执行完毕后，num变量就自动消失</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 假设这个位置上有100000行代码，但是均无用到num变量
    */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造代码块" tabindex="-1"><a class="header-anchor" href="#构造代码块"><span>构造代码块</span></a></h3>
<blockquote>
<p>定义在类中，方法外的代码块，就是构造代码块。</p>
<p>作用:</p>
<ol>
<li>
<p>构造代码块是在创建对象的时候执行，并且是优先于构造方法先执行</p>
</li>
<li>
<p>构造代码块是给所有对象共有的属性进行初始化</p>
</li>
<li>
<p>每次创建对象都会执行一次构造代码块</p>
</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 下面的任何一个对象的创建都会执行构造代码块中的方法哭</span>
    <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cry</span><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 构造代码块提取出来的共有相同部分，不用在重写方法中再写了</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"哭"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Cry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// System.out.println("哭");</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Cry</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// System.out.println("哭");</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Cry</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> <span class="token class-name">Name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// System.out.println("哭");</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块"><span>静态代码块</span></a></h3>
<blockquote>
<p>被静态修饰的 构造代码块，就成为静态代码块</p>
<ol>
<li>静态代码块什么时候执行?</li>
</ol>
<p>可以说类加载的时候执行，并且只执行一次；也可以说是.class 文件从磁盘中加载到方法区形成字节码文件对象的时候，静态代码块会随之执行。</p>
<ol start="2">
<li>为什么只执行一次?</li>
</ol>
<p>因为字节码文件只加载一次，并且是优先于所有对象的创建而执行的。</p>
<ol start="3">
<li>
<p>静态代码块的执行要早于构造代码块的执行，并且只执行一次</p>
</li>
<li>
<p>作用呢?</p>
</li>
</ol>
<p>给静态属性进行初始化，当数据只需要被初始化一次的时候，之后就可以重复使用的时候，就可以使用静态代码块。
<img src="@source/admin/images/静态代码块.jpg" alt="静态代码块"></p>
</blockquote>
<h3 id="类的初始化顺序" tabindex="-1"><a class="header-anchor" href="#类的初始化顺序"><span>类的初始化顺序</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new Zi()相当于调构造方法</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"--------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"父类静态代码块"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"父类构造代码块"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Fu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"父类构造方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"子类静态代码块"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"子类构造代码块"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. super() 执行父类</span>
    <span class="token comment">// 2. 执行本类中的构造代码块和构造方法</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"子类构造方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 运行结果：
 * 父类静态代码块
 * 子类静态代码块
 * 父类构造代码块
 * 父类构造方法
 * 子类构造代码块
 * 子类构造方法
 * ---------------------
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


