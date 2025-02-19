<template><div><!-- @format -->
<h2 id="react-react-lazy-和-suspense" tabindex="-1"><a class="header-anchor" href="#react-react-lazy-和-suspense"><span>React <code v-pre>React.lazy</code> 和 <code v-pre>Suspense</code></span></a></h2>
<p><code v-pre>React.lazy</code> 和 <code v-pre>Suspense</code> 是 React 中用于代码分割和懒加载的两个重要功能，按需加载组件，从而优化应用的加载时间和性能。</p>
<h3 id="_1-react-lazy" tabindex="-1"><a class="header-anchor" href="#_1-react-lazy"><span>1. React.lazy</span></a></h3>
<p><code v-pre>React.lazy</code> 是一个用于动态加载组件的函数。它允许你将组件分割成独立的代码块，这些代码块只有在需要时才会被加载。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./OtherComponent'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>当你使用 <code v-pre>React.lazy</code> 时，你实际上是在告诉 React，只有在需要渲染该组件时才加载它的代码。</li>
<li>它返回一个对象，该对象包含一个 <code v-pre>.then()</code> 方法，允许你处理加载完成的 Promise 。</li>
</ul>
<h3 id="_2-suspense" tabindex="-1"><a class="header-anchor" href="#_2-suspense"><span>2. Suspense</span></a></h3>
<p><code v-pre>Suspense</code> 是一个组件，它可以让你包裹懒加载的组件，并提供一个回退（fallback）UI，这个 UI 会在懒加载的组件加载完成之前显示。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OtherComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Suspense</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>fallback</code> 属性可以是任何 React 节点，通常是一个加载指示器。</li>
<li>当懒加载的组件正在加载时，<code v-pre>Suspense</code> 会渲染 <code v-pre>fallback</code> 属性提供的 UI 。</li>
</ul>
<h3 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景"><span>3. 使用场景</span></a></h3>
<ul>
<li><strong>懒加载组件</strong>：对于不立即需要的组件，如页面底部的“关于我们”部分。</li>
<li><strong>代码分割</strong>：将大型应用分割成更小的代码块，以加快初始加载速度。</li>
<li><strong>性能优化</strong>：通过按需加载资源，减少应用的加载时间。</li>
</ul>
<h3 id="_4-优势" tabindex="-1"><a class="header-anchor" href="#_4-优势"><span>4. 优势</span></a></h3>
<ul>
<li><strong>提升首屏速度</strong>：通过代码分割，减少首屏加载时间。</li>
<li><strong>动态加载</strong>：仅在组件需要渲染时才加载，减少无用资源的加载。</li>
<li><strong>更好的用户体验</strong>：<code v-pre>Suspense</code> 的 <code v-pre>fallback</code> 属性提供了平滑的加载过渡 。</li>
</ul>
<h3 id="_5-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-注意事项"><span>5. 注意事项</span></a></h3>
<ul>
<li><strong>错误处理</strong>：使用错误边界（Error Boundaries）来捕获懒加载组件中的错误。</li>
<li><strong>避免过度使用</strong>：虽然懒加载可以提升性能，但过度使用可能导致应用结构复杂化。</li>
<li><strong>兼容性</strong>：确保你的构建工具（如 Webpack）支持代码分割。</li>
</ul>
<h3 id="_6-实现原理" tabindex="-1"><a class="header-anchor" href="#_6-实现原理"><span>6. 实现原理</span></a></h3>
<ul>
<li><code v-pre>React.lazy</code> 会返回一个懒加载组件对象，该对象在渲染时会动态加载对应的模块代码。</li>
<li><code v-pre>Suspense</code> 组件会捕获懒加载组件加载过程中的异常，并渲染 <code v-pre>fallback</code> UI。</li>
<li>当组件加载完成时，<code v-pre>Suspense</code> 会渲染实际的组件，并卸载 <code v-pre>fallback</code> UI 。</li>
</ul>
<h3 id="_7-与-concurrent-mode-结合" tabindex="-1"><a class="header-anchor" href="#_7-与-concurrent-mode-结合"><span>7. 与 Concurrent Mode 结合</span></a></h3>
<ul>
<li><code v-pre>React.lazy</code> 和 <code v-pre>Suspense</code> 可以与 React 的 Concurrent Mode 结合使用，以实现更流畅的加载体验和更好的资源调度 。</li>
</ul>
<h3 id="_8-实际案例" tabindex="-1"><a class="header-anchor" href="#_8-实际案例"><span>8. 实际案例</span></a></h3>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LazyComponent'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LazyComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>LazyComponent</code> 将被懒加载，直到它需要被渲染时才加载。在加载过程中，将显示一个加载指示器。</p>
</div></template>


