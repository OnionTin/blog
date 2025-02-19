<template><div><h2 id="set-子接口" tabindex="-1"><a class="header-anchor" href="#set-子接口"><span>Set 子接口</span></a></h2>
<p>需要导包，在 java.util 下；Set 也是接口，是 Collection 的子接口。</p>
<h3 id="set-集合的特点" tabindex="-1"><a class="header-anchor" href="#set-集合的特点"><span>Set 集合的特点</span></a></h3>
<ol>
<li>
<font color=red>无序性</font>（即：存进去的顺序和取出来的顺序不一定一致）</li>
<li>
<font color=red>无索引</font></li>
<li>
<font color=red>唯一性</font>，Set 集合中的元素的不能重复</li>
</ol>
<h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>
<font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Collection接口.md">与 Collection 集合</RouteLink>一致</font><h3 id="set-集合遍历" tabindex="-1"><a class="header-anchor" href="#set-集合遍历"><span>Set 集合遍历</span></a></h3>
<ol>
<li>
<p>转数组循环遍历</p>
</li>
<li>
<p>迭代器遍历</p>
</li>
<li>
<p>增强 for 循环遍历(for each)</p>
</li>
</ol>
<h3 id="方法的使用案例" tabindex="-1"><a class="header-anchor" href="#方法的使用案例"><span>方法的使用案例</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Set</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"bbb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"ccc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// set.add(111);// 由于泛型，编译报错</span>
        <span class="token class-name">Boolean</span> b <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 唯一性：false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无序性：[aaa, ccc, bbb]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


