<template><div><!-- @format -->
<h2 id="usememo-和-usecallback" tabindex="-1"><a class="header-anchor" href="#usememo-和-usecallback"><span>useMemo 和 useCallback</span></a></h2>
<p><code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 是 React 提供的两个 Hook，用于优化性能，它们通过记忆化来避免不必要的计算和渲染。以下是这两个 Hook 的关键技术点和概念：</p>
<h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo"><span><code v-pre>useMemo</code></span></a></h3>
<h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用"><span>1. 基本使用</span></a></h3>
<p><code v-pre>useMemo</code> 用于对高开销的计算进行记忆化，以优化性能。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">expensiveCalculation</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 假设这是一个复杂的计算</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">expensiveCalculation</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Result: </span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-依赖数组" tabindex="-1"><a class="header-anchor" href="#_2-依赖数组"><span>2. 依赖数组</span></a></h3>
<p><code v-pre>useMemo</code> 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新计算。</p>
<h3 id="_3-避免不必要的计算" tabindex="-1"><a class="header-anchor" href="#_3-避免不必要的计算"><span>3. 避免不必要的计算</span></a></h3>
<p><code v-pre>useMemo</code> 可以避免在每次渲染时都进行高开销的计算。</p>
<h3 id="_4-惰性计算" tabindex="-1"><a class="header-anchor" href="#_4-惰性计算"><span>4. 惰性计算</span></a></h3>
<p><code v-pre>useMemo</code> 可以用于惰性计算，即只有在需要时才进行计算。</p>
<h3 id="_5-与usememo结合使用" tabindex="-1"><a class="header-anchor" href="#_5-与usememo结合使用"><span>5. 与<code v-pre>useMemo</code>结合使用</span></a></h3>
<p><code v-pre>useMemo</code> 可以与 <code v-pre>useCallback</code> 结合使用，以确保传递给子组件的回调函数的稳定性。</p>
<h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback"><span><code v-pre>useCallback</code></span></a></h3>
<h3 id="_1-基本使用-1" tabindex="-1"><a class="header-anchor" href="#_1-基本使用-1"><span>1. 基本使用</span></a></h3>
<p><code v-pre>useCallback</code> 用于返回一个记忆化的回调函数，这个函数只有在依赖项改变时才会重新创建。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> doSomething <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleDoSomething <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>doSomething<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleDoSomething<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Do Something</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-依赖数组-1" tabindex="-1"><a class="header-anchor" href="#_2-依赖数组-1"><span>2. 依赖数组</span></a></h3>
<p><code v-pre>useCallback</code> 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新创建函数。</p>
<h3 id="_3-避免不必要的渲染" tabindex="-1"><a class="header-anchor" href="#_3-避免不必要的渲染"><span>3. 避免不必要的渲染</span></a></h3>
<p><code v-pre>useCallback</code> 可以避免子组件因为父组件的重新渲染而不必要的重新渲染。</p>
<h3 id="_4-稳定性" tabindex="-1"><a class="header-anchor" href="#_4-稳定性"><span>4. 稳定性</span></a></h3>
<p><code v-pre>useCallback</code> 可以确保回调函数的引用稳定性，这对于传递给子组件或使用在<code v-pre>useEffect</code>中非常有用。</p>
<h3 id="_5-自定义-hook" tabindex="-1"><a class="header-anchor" href="#_5-自定义-hook"><span>5. 自定义 Hook</span></a></h3>
<p><code v-pre>useCallback</code> 可以用于创建自定义 Hook，以在多个组件间复用回调逻辑。</p>
<h3 id="_6-与usememo的区别" tabindex="-1"><a class="header-anchor" href="#_6-与usememo的区别"><span>6. 与<code v-pre>useMemo</code>的区别</span></a></h3>
<ul>
<li><code v-pre>useMemo</code> 用于优化高开销的计算。</li>
<li><code v-pre>useCallback</code> 用于优化回调函数的创建。</li>
</ul>
<h3 id="_7-性能注意事项" tabindex="-1"><a class="header-anchor" href="#_7-性能注意事项"><span>7. 性能注意事项</span></a></h3>
<ul>
<li>过度使用 <code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 可能会导致性能下降，因为它们会增加代码的复杂性。</li>
<li>应该在真的有性能瓶颈时才使用这两个 Hook。</li>
</ul>
<h3 id="_8-与react-memo结合使用" tabindex="-1"><a class="header-anchor" href="#_8-与react-memo结合使用"><span>8. 与<code v-pre>React.memo</code>结合使用</span></a></h3>
<p><code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 可以与 <code v-pre>React.memo</code> 结合使用，以避免组件的不必要的渲染。</p>
<h3 id="_9-惰性初始化" tabindex="-1"><a class="header-anchor" href="#_9-惰性初始化"><span>9. 惰性初始化</span></a></h3>
<p><code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 可以用于惰性初始化对象或函数。</p>
<h3 id="_10-避免深比较" tabindex="-1"><a class="header-anchor" href="#_10-避免深比较"><span>10. 避免深比较</span></a></h3>
<p>在依赖数组中，应避免进行深比较，因为这可能会导致性能问题。</p>
<h3 id="_11-避免在渲染阶段使用" tabindex="-1"><a class="header-anchor" href="#_11-避免在渲染阶段使用"><span>11. 避免在渲染阶段使用</span></a></h3>
<p><code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 应该谨慎使用，以避免在渲染阶段进行复杂的计算或创建函数。</p>
</div></template>


