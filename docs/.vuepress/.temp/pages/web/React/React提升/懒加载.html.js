import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/懒加载.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/%E6%87%92%E5%8A%A0%E8%BD%BD.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"懒加载\",\"slug\":\"懒加载\",\"link\":\"#懒加载\",\"children\":[{\"level\":3,\"title\":\"如何实现懒加载\",\"slug\":\"如何实现懒加载\",\"link\":\"#如何实现懒加载\",\"children\":[]},{\"level\":3,\"title\":\"懒加载的最佳实践\",\"slug\":\"懒加载的最佳实践\",\"link\":\"#懒加载的最佳实践\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]},{\"level\":3,\"title\":\"实际案例\",\"slug\":\"实际案例\",\"link\":\"#实际案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/懒加载.md\",\"excerpt\":\"<!-- @format -->\\n<h2>懒加载</h2>\\n<p>React 的懒加载是一种性能优化技术，它允许你在应用中按需加载组件，而不是在应用初始化时一次性加载所有资源。这可以减少应用的初始加载时间并提高用户体验。</p>\\n<h3>如何实现懒加载</h3>\\n<p>在 React 中实现懒加载主要依赖于<code>React.lazy</code>和<code>&lt;Suspense&gt;</code>这两个 API。</p>\\n<ol>\\n<li>\\n<p><strong>使用<code>React.lazy</code></strong>：这是一个用于动态加载组件的高阶函数，它接受一个函数作为参数，该函数使用动态<code>import()</code>语法来加载组件。</p>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> LazyComponent <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">lazy</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'./LazyComponent'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div></li>\\n<li>\\n<p><strong>使用<code>&lt;Suspense&gt;</code></strong>：这是一个用于包裹懒加载组件的 React 组件，它允许你指定一个回退 UI，这个 UI 会在懒加载组件加载期间显示。</p>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token class-name\\\">Suspense</span></span> <span class=\\\"token attr-name\\\">fallback</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token script-punctuation punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token plain-text\\\">Loading...</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token plain-text\\\">\\n  </span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token class-name\\\">LazyComponent</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span><span class=\\\"token plain-text\\\">\\n</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token class-name\\\">Suspense</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div></li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
