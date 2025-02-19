<template><div><h2 id="重载-overload" tabindex="-1"><a class="header-anchor" href="#重载-overload"><span>重载(@Overload)</span></a></h2>
<h3 id="_1-重载的概念" tabindex="-1"><a class="header-anchor" href="#_1-重载的概念"><span>1. 重载的概念</span></a></h3>
<ul>
<li>重载：在同一个类中，出现多个方法的名字相同，但是它们的形参（参数个数、参数类型、参数顺序）不同的多个方法。</li>
<li>方法的重载与返回值类型无关。</li>
</ul>
<h3 id="_3-重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#_3-重载和重写的区别"><span>3. 重载和重写的区别</span></a></h3>
<ul>
<li>
<RouteLink active to="/admin/Java/Java基础/方法的重载.md">重载</RouteLink>：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，通过同名不同参数的方法重载。</li>
<li>
<RouteLink to="/admin/Java/Java基础/重写.md">重写</RouteLink>：子类根据需要对从父类继承来的方法进行改造，使得父类方法在子类中得到新的实现版本。</li>
<li>重写和重载都是实现多态的方式，区别在于<code v-pre>重载</code>发生于<code v-pre>同一个类</code>中，重载发生在<code v-pre>编译期</code>，<code v-pre>重写</code>发生于<code v-pre>继承体系</code>中，发生在<code v-pre>运行期</code>。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">// 方法重载的案例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无参数方法被调用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"int类型参数方法被调用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"int类型和double类型参数方法被调用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">double</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"double类型和int类型参数方法被调用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"String类型参数方法被调用！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadExample</span> ex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


