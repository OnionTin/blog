<template><div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h3>
<ol>
<li>提高了代码的复用性</li>
<li>提高了代码的可读性和可维护性</li>
</ol>
<h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3>
<p>修饰符 返回值类型 方法名(数据类型 变量名, 数据类型 变量名, ...){
执行的代码
return 返回值;
}</p>
<h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h3>
<ol>
<li>public 公共的，任何类都可以访问</li>
<li>private 私有的，只能在本类中访问</li>
<li>protected 受保护的，在本类，子类中可以访问</li>
<li>static 静态的，可以被类名调用，也可以被对象调用</li>
<li>abstract 抽象的，不能被实例化，只能被继承</li>
<li>final 最终的，不能被继承</li>
</ol>
<h3 id="返回值类型" tabindex="-1"><a class="header-anchor" href="#返回值类型"><span>返回值类型</span></a></h3>
<ol>
<li>void 没有返回值</li>
<li>基本数据类型 返回基本数据类型</li>
<li>引用数据类型 返回引用数据类型</li>
<li>返回自定义的数据类型</li>
</ol>
<h3 id="方法名" tabindex="-1"><a class="header-anchor" href="#方法名"><span>方法名</span></a></h3>
<ol>
<li>见名知意</li>
<li>驼峰命名法(首字母小写，后面每个单词首字母大写)</li>
</ol>
<h3 id="如何写一个方法" tabindex="-1"><a class="header-anchor" href="#如何写一个方法"><span>如何写一个方法</span></a></h3>
<ol>
<li>明确参数</li>
<li>明确返回值</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token comment">// 需求: 定义一个方法，能够计算两个数字的和</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方法时需要注意的问题" tabindex="-1"><a class="header-anchor" href="#使用方法时需要注意的问题"><span>使用方法时需要注意的问题</span></a></h3>
<ol>
<li>方法与方法之间是平级关系，不能嵌套定义</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 错误案例:</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> add <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>方法的返回值类型和返回值要匹配</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">double</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">10.0</span><span class="token punctuation">;</span>
  <span class="token comment">// return 10; 也可以</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token char">'1'</span><span class="token punctuation">;</span> <span class="token comment">// 错误案例,编译报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>当没有返回值类型时，返回值类型为 void</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> aaa <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>void：没有什么特殊含义，只能写在返回值类型的位置上，表示没有返回值
返回值类型为 void，不要写 return 语句， 写了也不会报错但是可以省略且顺应 Java 语法规范</p>
</blockquote>
</div></template>


