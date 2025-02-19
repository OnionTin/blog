<template><div><!-- @format -->
<h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect"><span>useEffect</span></a></h2>
<p><code v-pre>useEffect</code> 是 React 中一个非常强大的 Hook，它允许你在函数组件中执行副作用操作，如数据获取、订阅或手动更改 DOM。正确使用它可以帮助你管理组件的生命周期和状态变化。</p>
<h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用"><span>1. 基本使用</span></a></h3>
<p><code v-pre>useEffect</code> 用于在组件渲染后执行副作用操作。它接受一个函数和一个依赖数组。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component is rendered'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Cleanup'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空依赖数组表示这个effect只在挂载和卸载时运行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-清理函数" tabindex="-1"><a class="header-anchor" href="#_2-清理函数"><span>2. 清理函数</span></a></h3>
<p><code v-pre>useEffect</code> 可以返回一个清理函数，用于执行清理操作，如取消网络请求、移除事件监听器等。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> subscription <span class="token operator">=</span> props<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    subscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>source<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// props.source是依赖项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-依赖数组" tabindex="-1"><a class="header-anchor" href="#_3-依赖数组"><span>3. 依赖数组</span></a></h3>
<p><code v-pre>useEffect</code> 的第二个参数是一个依赖数组，它决定了 effect 何时运行。如果依赖项改变，effect 会重新运行。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Effect runs when count changes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当count变化时，effect重新运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-副作用的模拟" tabindex="-1"><a class="header-anchor" href="#_4-副作用的模拟"><span>4. 副作用的模拟</span></a></h3>
<p>在类组件中，<code v-pre>useEffect</code> 相当于<code v-pre>componentDidMount</code>、<code v-pre>componentDidUpdate</code>和<code v-pre>componentWillUnmount</code>的组合。</p>
<h3 id="_5-模拟componentdidmount和componentdidupdate" tabindex="-1"><a class="header-anchor" href="#_5-模拟componentdidmount和componentdidupdate"><span>5. 模拟<code v-pre>componentDidMount</code>和<code v-pre>componentDidUpdate</code></span></a></h3>
<p>通过添加依赖项，你可以模拟<code v-pre>componentDidUpdate</code>行为。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Mount or update when count changes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类似于componentDidUpdate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-模拟componentwillunmount" tabindex="-1"><a class="header-anchor" href="#_6-模拟componentwillunmount"><span>6. 模拟<code v-pre>componentWillUnmount</code></span></a></h3>
<p>通过返回一个清理函数，你可以模拟<code v-pre>componentWillUnmount</code>行为。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Cleanup when unmounting'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component will unmount'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类似于componentWillUnmount</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-副作用的依赖性" tabindex="-1"><a class="header-anchor" href="#_7-副作用的依赖性"><span>7. 副作用的依赖性</span></a></h3>
<p>确保将所有外部变量和 props 作为依赖项，以确保 effect 在依赖项变化时正确运行。</p>
<h3 id="_8-条件-effect" tabindex="-1"><a class="header-anchor" href="#_8-条件-effect"><span>8. 条件 Effect</span></a></h3>
<p>你可以通过条件渲染或条件执行 effect 函数来控制 effect 的执行。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>show<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Effect runs when show is true'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>show<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-多个-effect" tabindex="-1"><a class="header-anchor" href="#_9-多个-effect"><span>9. 多个 Effect</span></a></h3>
<p>你可以在组件中使用多个<code v-pre>useEffect</code>调用，以处理不同的副作用逻辑。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 第一个effect</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dependency1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 第二个effect</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dependency2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-性能优化" tabindex="-1"><a class="header-anchor" href="#_10-性能优化"><span>10. 性能优化</span></a></h3>
<p>如果你在 effect 中进行高开销操作，如数据获取或大规模计算，考虑使用<code v-pre>useMemo</code>或<code v-pre>useCallback</code>进行优化。</p>
<h3 id="_11-避免不必要的渲染" tabindex="-1"><a class="header-anchor" href="#_11-避免不必要的渲染"><span>11. 避免不必要的渲染</span></a></h3>
<p>通过正确使用依赖数组，你可以避免不必要的组件渲染。</p>
<h3 id="_12-副作用的纯粹性" tabindex="-1"><a class="header-anchor" href="#_12-副作用的纯粹性"><span>12. 副作用的纯粹性</span></a></h3>
<p>尽量保持 effect 函数的纯粹性，避免在 effect 内部产生副作用，除非是必须的。</p>
<h3 id="_13-使用uselayouteffect" tabindex="-1"><a class="header-anchor" href="#_13-使用uselayouteffect"><span>13. 使用<code v-pre>useLayoutEffect</code></span></a></h3>
<p>在必要时，可以使用<code v-pre>useLayoutEffect</code>来执行同步的副作用操作，如 DOM 测量。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLayoutEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Synchronous re-rendering</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


