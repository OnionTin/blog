<template><div><h2 id="函数式组件与类式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件与类式组件"><span>函数式组件与类式组件</span></a></h2>
<h3 id="函数式组件的定义" tabindex="-1"><a class="header-anchor" href="#函数式组件的定义"><span>函数式组件的定义</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1.创建类式组件</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// render是放在哪里的?-MyComponent的原型对象上，供实例使用。</span>
    <span class="token comment">// render中的this是谁?-MyComponent的实例对象&lt;=>MyComponent组件实例对象。</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"render中的this:"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token function">我是用类定义的组件</span><span class="token punctuation">(</span>适用于<span class="token punctuation">[</span>复杂组件<span class="token punctuation">]</span>的定义<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
执行了ReactDOM.render(&lt;MyComponent/>......之后，发生了什么?
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用类定义的,随后new出来该类的实例,并通过该实例调用到原型上的render方法。
3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类式组件" tabindex="-1"><a class="header-anchor" href="#类式组件"><span>类式组件</span></a></h3>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// 1.创建函数式组件</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 此处的this是undefined，因为babel编译后开启了严格模式</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">我是用函数定义的组件(适用于[简单组件]的定义)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.渲染组件到页面</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
执行了ReactDOM.render(&lt;MyComponent/>......之后，发生了什么?
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂组件" tabindex="-1"><a class="header-anchor" href="#复杂组件"><span>复杂组件</span></a></h3>
<blockquote>
<p>类组件中，有 state 就是复杂的，否则就是简单组件;或者说有状态的就是复杂组件。</p>
</blockquote>
</div></template>


