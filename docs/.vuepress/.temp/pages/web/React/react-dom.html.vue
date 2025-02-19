<template><div><h2 id="react-dom" tabindex="-1"><a class="header-anchor" href="#react-dom"><span>react-dom</span></a></h2>
<blockquote>
<p>React 和 ReactDOM 是 React 技术栈中的核心库。React 提供了创建组件的 API 和维护状态的机制，而 ReactDOM 提供了将这些组件渲染到 DOM 的能力。它们共同为开发现代 web 应用提供了强大的基础。</p>
</blockquote>
<blockquote>
<p>ReactDOM 是一个用于将 React 组件渲染到 DOM 的库。它提供了一些方法，如 render、hydrate 和 unmountComponentAtNode 等，来与 DOM 进行交互。当组件的状态或者 props 发生变化时，ReactDOM 可以高效地更新 DOM。提供了与 DOM 交互的方法，如获取节点信息、添加事件监听器等。</p>
</blockquote>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


