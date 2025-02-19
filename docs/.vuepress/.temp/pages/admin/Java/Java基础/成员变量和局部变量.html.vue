<template><div><h2 id="成员变量和局部变量" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量"><span>成员变量和局部变量</span></a></h2>
<p><code v-pre>初始值、区别、匿名对象可以当实参、方法和对象回收等问题</code></p>
<h3 id="成员变量和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量的区别"><span>成员变量和局部变量的区别</span></a></h3>
<ol>
<li>
<p>定义的位置不同</p>
<p>成员变量：定义在类中方法外</p>
<p>局部变量：定义在方法中或方法的声明上</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 成员变量</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span> <span class="token comment">// 在类中、方法外定义的变量</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 局部变量</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token char">'小明'</span><span class="token punctuation">;</span> <span class="token comment">// 在info方法中定义的变量</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 局部变量</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// age是局部变量，定义在info方法的声明上</span>
        age <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>内存位置不同</p>
<p>成员变量：存储在堆中的对象中</p>
<p>局部变量：存储在栈中的方法中</p>
</li>
<li>
<p>初始值不同</p>
<p><code v-pre>成员变量</code>：<code v-pre>有默认初始值</code>，如果<code v-pre>不赋值也可以使用</code></p>
<blockquote>
<p>String 类型的成员变量：默认初始值是 null</p>
<p>int 类型的成员变量：默认初始值是 0</p>
<p>char 类型的成员变量：默认初始值是'\u0000'</p>
<p>boolean 类型的成员变量：默认初始值是 false</p>
<p>引用类型的成员变量：默认初始值是 null</p>
</blockquote>
</li>
</ol>
<p><code v-pre>局部变量</code>：<code v-pre>没有默认初始值</code>，如果没有赋值，不能使用，否则报错，使用前必须<code v-pre>先赋值</code></p>
<ol start="4">
<li>
<p>声明周期不同</p>
<p>成员变量：随着对象的创建而存在，随着对象的消失而消失</p>
<p>局部变量：随着方法的调用而存在，随着方法的调用完毕而消失</p>
</li>
<li>
<p>作用域范围不同</p>
<p>成员变量：整个类中都可以使用</p>
<p>局部变量：只能在方法中使用，出了方法就用不了了</p>
</li>
</ol>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3>
<ol>
<li>
<p><code v-pre>匿名对象可以做为实际参数传递</code>
<img src="@source/admin/images/成员变量和局部变量01.png" alt="1"></p>
</li>
<li>
<p><code v-pre>方法和对象的回收</code>
<img src="@source/admin/images/成员变量和局部变量02.png" alt="2"></p>
</li>
<li>
<p><code v-pre>共享static属性</code>
<img src="@source/admin/images/成员变量和局部变量03.png" alt="3"></p>
</li>
</ol>
</div></template>


