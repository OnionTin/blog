<template><div><!-- @format -->
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state"><span>state</span></a></h2>
<p>在 React 中，<code v-pre>state</code>是组件内部的状态，它可以帮助管理组件的动态行为和数据。</p>
<h3 id="_1-定义-state" tabindex="-1"><a class="header-anchor" href="#_1-定义-state"><span>1. 定义 State</span></a></h3>
<p>在类组件中，可以通过<code v-pre>this.state</code>定义状态，并在<code v-pre>constructor</code>中初始化。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyClassComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数组件中，使用<code v-pre>useState</code> Hook 来定义状态。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyFunctionComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-更新-state" tabindex="-1"><a class="header-anchor" href="#_2-更新-state"><span>2. 更新 State</span></a></h3>
<p>在类组件中，使用<code v-pre>this.setState()</code>更新状态。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在函数组件中，使用<code v-pre>setState</code>函数更新状态。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-state-的不可变性" tabindex="-1"><a class="header-anchor" href="#_3-state-的不可变性"><span>3. State 的不可变性</span></a></h3>
<p>当更新状态时，应该返回一个新对象，而不是修改现有的状态对象。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-state-的异步性" tabindex="-1"><a class="header-anchor" href="#_4-state-的异步性"><span>4. State 的异步性</span></a></h3>
<p><code v-pre>setState</code>是异步的，React 会批量更新状态，以提高性能。</p>
<h3 id="_5-初始渲染" tabindex="-1"><a class="header-anchor" href="#_5-初始渲染"><span>5. 初始渲染</span></a></h3>
<p>在类组件中，状态可以在构造函数中初始化。在函数组件中，状态在组件创建时初始化。</p>
<h3 id="_6-组合-state" tabindex="-1"><a class="header-anchor" href="#_6-组合-state"><span>6. 组合 State</span></a></h3>
<p>可以有多个状态，每个状态对应不同的数据。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>fruit<span class="token punctuation">,</span> setFruit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'apple'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-state-和-props" tabindex="-1"><a class="header-anchor" href="#_7-state-和-props"><span>7. State 和 Props</span></a></h3>
<p>State 是组件私有的，而 props 是组件从外部接收的。State 是组件内部的数据，props 是组件外部的数据。</p>
<h3 id="_8-状态提升" tabindex="-1"><a class="header-anchor" href="#_8-状态提升"><span>8. 状态提升</span></a></h3>
<p>当多个组件需要共享相同状态时，可以将状态提升到它们共同的父组件中。</p>
<h3 id="_9-状态与-context" tabindex="-1"><a class="header-anchor" href="#_9-状态与-context"><span>9. 状态与 Context</span></a></h3>
<p>状态可以与 Context API 结合使用，以在组件树中共享状态。</p>
<h3 id="_10-使用-state-进行条件渲染" tabindex="-1"><a class="header-anchor" href="#_10-使用-state-进行条件渲染"><span>10. 使用 State 进行条件渲染</span></a></h3>
<p>可以根据状态的值进行条件渲染。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">return</span> count <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">You have clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-state-的模式" tabindex="-1"><a class="header-anchor" href="#_11-state-的模式"><span>11. State 的模式</span></a></h3>
<ul>
<li><strong>提升状态</strong>：当多个组件需要共享状态时，将状态提升到它们共同的父组件。</li>
<li><strong>状态容器</strong>：创建一个专门用于存储状态的组件。</li>
</ul>
<h3 id="_12-状态与生命周期" tabindex="-1"><a class="header-anchor" href="#_12-状态与生命周期"><span>12. 状态与生命周期</span></a></h3>
<p>在类组件中，状态的更新可能会触发组件的重新渲染，这个过程与生命周期方法（如<code v-pre>componentDidMount</code>和<code v-pre>componentDidUpdate</code>）密切相关。</p>
<h3 id="_13-状态的默认值" tabindex="-1"><a class="header-anchor" href="#_13-状态的默认值"><span>13. 状态的默认值</span></a></h3>
<p>在函数组件中，可以通过<code v-pre>useState</code>的第二个参数提供状态的默认值。</p>
<h3 id="_14-状态的惰性初始化" tabindex="-1"><a class="header-anchor" href="#_14-状态的惰性初始化"><span>14. 状态的惰性初始化</span></a></h3>
<p>在函数组件中，可以惰性地初始化状态，即在首次渲染时根据 props 计算初始状态。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token function">someExpensiveComputation</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> initialState<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-状态与-hooks" tabindex="-1"><a class="header-anchor" href="#_15-状态与-hooks"><span>15. 状态与 Hooks</span></a></h3>
<p><code v-pre>useState</code>是 React Hooks 的一部分，它允许在函数组件中使用状态。</p>
</div></template>


