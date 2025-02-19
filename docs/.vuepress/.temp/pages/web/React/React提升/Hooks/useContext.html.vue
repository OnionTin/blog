<template><div><!-- @format -->
<h2 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext"><span>useContext</span></a></h2>
<p><code v-pre>useContext</code> 是 React 提供的 Hook，用于在函数组件中方便地访问 context。处理跨组件状态共享的强大工具，正确使用它可以简化组件间的通信并提高代码的可维护性。</p>
<h3 id="_1-创建-context" tabindex="-1"><a class="header-anchor" href="#_1-创建-context"><span>1. 创建 Context</span></a></h3>
<p>首先，需要使用 <code v-pre>React.createContext</code> 创建一个 Context 对象。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-提供-context-值" tabindex="-1"><a class="header-anchor" href="#_2-提供-context-值"><span>2. 提供 Context 值</span></a></h3>
<p>使用 <code v-pre>Context.Provider</code> 组件来包裹组件树，以向树内的组件提供 Context 值。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token comment">/* 一些值 */</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">YourComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-消费-context" tabindex="-1"><a class="header-anchor" href="#_3-消费-context"><span>3. 消费 Context</span></a></h3>
<p>在函数组件中，使用 <code v-pre>useContext</code> 来消费 Context。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">YourComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-渲染属性模式" tabindex="-1"><a class="header-anchor" href="#_4-渲染属性模式"><span>4. 渲染属性模式</span></a></h3>
<p><code v-pre>useContext</code> 的设计初衷是替代“渲染属性”模式（render props）。</p>
<h3 id="_5-没有中间组件" tabindex="-1"><a class="header-anchor" href="#_5-没有中间组件"><span>5. 没有中间组件</span></a></h3>
<p><code v-pre>useContext</code> 允许你直接访问 Context 值，而不需要通过每一层组件手动传递 props。</p>
<h3 id="_6-依赖项" tabindex="-1"><a class="header-anchor" href="#_6-依赖项"><span>6. 依赖项</span></a></h3>
<p><code v-pre>useContext</code> 会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。</p>
<h3 id="_7-默认值" tabindex="-1"><a class="header-anchor" href="#_7-默认值"><span>7. 默认值</span></a></h3>
<p>自 React v16.3 起，Context API 支持默认值。如果在组件树中未找到 Provider，就会使用这个默认值。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有 <code v-pre>MyContext.Provider</code> 包裹组件，<code v-pre>theme</code> 将会是 <code v-pre>undefined</code>。</p>
<h3 id="_8-在自定义-hook-中使用" tabindex="-1"><a class="header-anchor" href="#_8-在自定义-hook-中使用"><span>8. 在自定义 Hook 中使用</span></a></h3>
<p>可以在自定义 Hook 中使用 <code v-pre>useContext</code> 来访问 Context，这样可以在多个组件间复用 Context 逻辑。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">useMyContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ComponentA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useMyContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ComponentB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useMyContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-注意事项" tabindex="-1"><a class="header-anchor" href="#_9-注意事项"><span>9. 注意事项</span></a></h3>
<ul>
<li><code v-pre>useContext</code> 钩子会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。如果需要优化性能，可以考虑使用 <code v-pre>React.memo</code> 或 <code v-pre>useMemo</code>。</li>
<li>如果在函数组件中使用 <code v-pre>useContext</code>，该组件将会在每次渲染时重新创建，除非它被 <code v-pre>React.memo</code> 包裹。</li>
</ul>
<h3 id="_10-context-的更新" tabindex="-1"><a class="header-anchor" href="#_10-context-的更新"><span>10. Context 的更新</span></a></h3>
<p>当 Provider 的 <code v-pre>value</code> 属性改变时，所有消费该 Context 的组件都会重新渲染。如果需要避免不必要的渲染，可以使用 <code v-pre>useMemo</code> 或 <code v-pre>useReducer</code> 来创建一个稳定的 <code v-pre>value</code>。</p>
<h3 id="_11-与-usereducer-结合" tabindex="-1"><a class="header-anchor" href="#_11-与-usereducer-结合"><span>11. 与 <code v-pre>useReducer</code> 结合</span></a></h3>
<p>有时，管理 Context 的复杂状态可能需要一个 reducer 函数。这种情况下，可以将 <code v-pre>useReducer</code> 与 Context 结合使用。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-跨组件共享状态" tabindex="-1"><a class="header-anchor" href="#_12-跨组件共享状态"><span>12. 跨组件共享状态</span></a></h3>
<p><code v-pre>useContext</code> 允许你跨多个组件层级共享状态，而不必使用 props 链式传递。</p>
<h3 id="_13-context-的嵌套" tabindex="-1"><a class="header-anchor" href="#_13-context-的嵌套"><span>13. Context 的嵌套</span></a></h3>
<p>可以嵌套多个 Provider，以便在组件树的不同部分提供不同的 Context 值。</p>
<h3 id="_14-避免过度使用" tabindex="-1"><a class="header-anchor" href="#_14-避免过度使用"><span>14. 避免过度使用</span></a></h3>
<p>虽然 <code v-pre>useContext</code> 非常有用，但应避免过度使用，因为它可能导致难以追踪的渲染性能问题。</p>
</div></template>


