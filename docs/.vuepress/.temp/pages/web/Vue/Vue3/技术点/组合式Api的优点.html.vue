<template><div><h2 id="组合式-api-可以像一样-react-hooks-拆分" tabindex="-1"><a class="header-anchor" href="#组合式-api-可以像一样-react-hooks-拆分"><span>组合式 Api 可以像一样 react-hooks 拆分</span></a></h2>
<blockquote>
<p>Vue 3 引入了组合式 API（Composition API），它提供了一种新的方式来组织和共享代码逻辑。React 则通过 Hooks 提供了类似的能力。以下是对两者的详细对比。</p>
</blockquote>
<h3 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api"><span>组合式 API</span></a></h3>
<h4 id="定义与特点" tabindex="-1"><a class="header-anchor" href="#定义与特点"><span>定义与特点</span></a></h4>
<p>组合式 API 是 Vue 3 中引入的一套新的 API，允许开发者使用函数的方式组织组件代码。它的核心是 <code v-pre>setup</code> 函数，它是组件的入口点，可以返回响应式数据、方法、计算属性等。</p>
<ul>
<li><strong>响应式 API</strong>：如 <code v-pre>ref()</code> 和 <code v-pre>reactive()</code>，用于创建响应式状态和计算属性。</li>
<li><strong>生命周期钩子</strong>：如 <code v-pre>onMounted()</code> 和 <code v-pre>onUnmounted()</code>，在组件的不同生命周期阶段执行逻辑。</li>
<li><strong>依赖注入</strong>：如 <code v-pre>provide()</code> 和 <code v-pre>inject()</code>，用于组件树中的依赖传递。</li>
</ul>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4>
<ul>
<li><strong>逻辑复用</strong>：通过组合函数实现代码逻辑的复用。</li>
<li><strong>代码组织</strong>：将相关逻辑分组，易于理解和维护。</li>
<li><strong>类型推导</strong>：更好的 TypeScript 支持，提高代码质量和开发体验。</li>
</ul>
<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件已挂载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks"><span>React Hooks</span></a></h3>
<h4 id="定义与特点-1" tabindex="-1"><a class="header-anchor" href="#定义与特点-1"><span>定义与特点</span></a></h4>
<p>React Hooks 是 React 16.8 引入的一套新的 API，允许在函数组件中使用状态和其他 React 特性。常用的 Hooks 包括 <code v-pre>useState</code>、<code v-pre>useEffect</code>、<code v-pre>useContext</code> 等。</p>
<ul>
<li><strong>状态管理</strong>：如 <code v-pre>useState</code>，用于在函数组件中添加状态。</li>
<li><strong>副作用处理</strong>：如 <code v-pre>useEffect</code>，用于处理组件的副作用，如数据获取、订阅等。</li>
<li><strong>上下文访问</strong>：如 <code v-pre>useContext</code>，用于访问 React 上下文。</li>
</ul>
<h4 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1"><span>使用场景</span></a></h4>
<ul>
<li><strong>状态管理</strong>：在函数组件中轻松管理状态。</li>
<li><strong>副作用处理</strong>：集中处理组件的副作用。</li>
<li><strong>逻辑复用</strong>：通过自定义 Hooks 实现逻辑的复用。</li>
</ul>
<h4 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1"><span>示例代码</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件已挂载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h3>
<ol>
<li>设计理念：Vue 3 的组合式 API 更注重逻辑的组合和代码的组织，而 React Hooks 强调在函数组件中使用状态和其他特性。</li>
<li>使用方式：Vue 3 的组合式 API 通过 setup 函数提供统一的入口，React Hooks 则通过在函数组件顶层调用不同的 Hook 实现。</li>
<li>性能优化：React 提供了如 useMemo 和 useCallback 等 Hooks 来优化性能，Vue 3 的响应式系统则在内部自动优化。</li>
<li>类型支持：Vue 3 的组合式 API 在 TypeScript 中的支持更直观，而 React Hooks 需要额外的类型声明。</li>
</ol>
</div></template>


