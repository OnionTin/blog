<template><div><!-- @format -->
<h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h2>
<blockquote>
<p>常用的几个钩子：useState、useEffect、useContext、useRef</p>
<p>State Hook 让你在不编写 class 的情况下使用 state，即函数组件也有 state 状态，并进行读写操作</p>
</blockquote>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>xxxstate<span class="token punctuation">,</span> setXxxState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usestate-1" tabindex="-1"><a class="header-anchor" href="#usestate-1"><span>useState()</span></a></h3>
<blockquote>
<ol>
<li>参数：第一次定义时的初始值</li>
<li>返回值：数组，包含两个元素([当前状态的值,更新状态的函数])</li>
</ol>
</blockquote>
<h3 id="setxxxstate-两种写法" tabindex="-1"><a class="header-anchor" href="#setxxxstate-两种写法"><span>setXxxState()两种写法</span></a></h3>
<blockquote>
<ol>
<li>setXxxState(newValue)：参数是新的状态值，react 会更新状态值，并重新渲染组件</li>
<li>setXxxState(value =&gt; newValue)：参数是一个函数，该函数返回新的状态值，react 会更新状态值，并重新渲染组件</li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 加的回调</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// setCount(count + 1); // 第一种写法</span>
  <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=></span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">'jack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>当前求和为<span class="token operator">:</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>我的名字是<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span><span class="token operator">></span>点我<span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>changeName<span class="token punctuation">}</span><span class="token operator">></span>点我改名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


