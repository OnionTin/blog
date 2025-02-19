<template><div><h2 id="hashrouter-利用-hash-实现路由切换" tabindex="-1"><a class="header-anchor" href="#hashrouter-利用-hash-实现路由切换"><span>HashRouter(利用 hash 实现路由切换)</span></a></h2>
<blockquote>
<p><code v-pre>HashRouter</code> 是 React Router v6 中用于在 Web 浏览器中创建路由的组件之一，特别适合在不支持或不需要使用 HTML5 History API 的情况下使用。它通过 URL 的 hash（即 URL 中 <code v-pre>#</code> 后面的部分）来管理路由状态，这意味着路由路径不会发送到服务器。</p>
</blockquote>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ul>
<li><strong>无服务器依赖</strong>：<code v-pre>HashRouter</code> 不依赖服务器配置，适用于那些你无法控制服务器配置的情况。</li>
<li><strong>简单易用</strong>：只需将应用包裹在 <code v-pre>HashRouter</code> 组件内，即可实现路由功能。</li>
<li><strong>兼容性好</strong>：几乎所有浏览器都支持 URL hash，因此 <code v-pre>HashRouter</code> 在浏览器兼容性方面表现良好。</li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<blockquote>
<p>使用 npm 或 yarn 安装 React Router v6：</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react-router-dom@6
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> <span class="token function">add</span> react-router-dom@6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<blockquote>
<p>在应用的顶层组件中使用 HashRouter：</p>
</blockquote>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HashRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HashRouter</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">HashRouter</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<ol>
<li>basename：可以配置应用在 URL 中的基础路径。</li>
<li>window：默认使用当前页面的 window 对象，但也可以用于跟踪另一个窗口的 URL，例如 &lt;iframe&gt;。</li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HashRouter</span></span> <span class="token attr-name">basename</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>about<span class="token punctuation">"</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">HashRouter</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashrouter-与-browserrouter-的比较" tabindex="-1"><a class="header-anchor" href="#hashrouter-与-browserrouter-的比较"><span>HashRouter 与 BrowserRouter 的比较</span></a></h3>
<ol>
<li>BrowserRouter 使用 HTML5 的 History API 来管理路由状态，适用于需要与服务器配合的场景。</li>
<li>HashRouter 使用 URL 的 hash 部分来管理路由状态，适用于无法控制服务器配置的场景。</li>
<li>官方推荐，除非绝对必要，否则不要使用 HashRouter。</li>
<li>HashRouter 在刷新页面时可能会导致路由状态（如 state 参数）丢失。</li>
</ol>
</div></template>


