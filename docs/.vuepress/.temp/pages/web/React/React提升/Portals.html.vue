<template><div><!-- @format -->
<h2 id="react-中portals" tabindex="-1"><a class="header-anchor" href="#react-中portals"><span>React 中<code v-pre>Portals</code></span></a></h2>
<p>React 的<code v-pre>Portals</code>是一种将子元素渲染到父组件之外的 DOM 节点的机制。可以在需要将 UI 元素渲染在父组件之外时使用。</p>
<h3 id="_1-定义和用途" tabindex="-1"><a class="header-anchor" href="#_1-定义和用途"><span>1. 定义和用途</span></a></h3>
<p><code v-pre>Portals</code>允许你将子元素渲染到存在于父组件之外的 DOM 节点上。这在创建模态框、提示框、下拉菜单等需要“突破”其父级容器的样式时非常有用。</p>
<h3 id="_2-创建-portal" tabindex="-1"><a class="header-anchor" href="#_2-创建-portal"><span>2. 创建 Portal</span></a></h3>
<p>使用<code v-pre>ReactDOM.createPortal</code>函数创建一个 Portal，它接受两个参数：要渲染的子元素和目标 DOM 节点。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">这里是要渲染的内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-node'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-事件冒泡" tabindex="-1"><a class="header-anchor" href="#_3-事件冒泡"><span>3. 事件冒泡</span></a></h3>
<p>Portal 中的事件冒泡遵循 React 组件树，而不是 DOM 树。这意味着，即使 Portal 在 DOM 中的位置与 React 树不同，事件依然会向上冒泡到 React 树中的父组件。</p>
<h3 id="_4-性能考虑" tabindex="-1"><a class="header-anchor" href="#_4-性能考虑"><span>4. 性能考虑</span></a></h3>
<p>Portal 可以提高性能，因为它允许你在不重新渲染父组件的情况下更新子组件。</p>
<h3 id="_5-无障碍性" tabindex="-1"><a class="header-anchor" href="#_5-无障碍性"><span>5. 无障碍性</span></a></h3>
<p>使用 Portal 时，需要确保应用程序的无障碍性。例如，对于模态框，确保所有人都能够与之交互，遵循 WAI-ARIA 模态实践指南。</p>
<h3 id="_6-清理" tabindex="-1"><a class="header-anchor" href="#_6-清理"><span>6. 清理</span></a></h3>
<p>当使用 Portal 时，确保在组件卸载时清理 Portal，以避免内存泄漏。</p>
<h3 id="_7-集成非-react-内容" tabindex="-1"><a class="header-anchor" href="#_7-集成非-react-内容"><span>7. 集成非 React 内容</span></a></h3>
<p>Portals 也可以用来集成非 React 内容，例如在 React 应用中嵌入非 React 小部件。</p>
<h3 id="_8-与-context-一起使用" tabindex="-1"><a class="header-anchor" href="#_8-与-context-一起使用"><span>8. 与 Context 一起使用</span></a></h3>
<p>即使 Portal 渲染在不同的 DOM 节点，它仍然可以访问 React 树中的 Context。</p>
<h3 id="_9-限制" tabindex="-1"><a class="header-anchor" href="#_9-限制"><span>9. 限制</span></a></h3>
<p>虽然 Portal 提供了灵活性，但过度使用可能会使应用程序结构变得复杂，并且难以维护。</p>
<h3 id="_10-实用案例" tabindex="-1"><a class="header-anchor" href="#_10-实用案例"><span>10. 实用案例</span></a></h3>
<p>Portals 的常见用例包括模态框、提示框、下拉菜单、加载屏幕和 Cookie 警告等。</p>
<h3 id="_11-与-react-hooks-结合使用" tabindex="-1"><a class="header-anchor" href="#_11-与-react-hooks-结合使用"><span>11. 与 React Hooks 结合使用</span></a></h3>
<p>你可以将 Portal 与 React Hooks 结合使用，例如使用<code v-pre>useEffect</code>来处理 Portal 的挂载和清理。</p>
<h3 id="_12-测试-portals" tabindex="-1"><a class="header-anchor" href="#_12-测试-portals"><span>12. 测试 Portals</span></a></h3>
<p>测试使用 Portal 的组件可能需要特殊处理，以确保 Portal 内容正确渲染并且事件处理正确。</p>
</div></template>


