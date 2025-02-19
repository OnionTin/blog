import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/React.lazy和Suspense.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/React.lazy%E5%92%8CSuspense.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"React React.lazy 和 Suspense\",\"slug\":\"react-react-lazy-和-suspense\",\"link\":\"#react-react-lazy-和-suspense\",\"children\":[{\"level\":3,\"title\":\"1. React.lazy\",\"slug\":\"_1-react-lazy\",\"link\":\"#_1-react-lazy\",\"children\":[]},{\"level\":3,\"title\":\"2. Suspense\",\"slug\":\"_2-suspense\",\"link\":\"#_2-suspense\",\"children\":[]},{\"level\":3,\"title\":\"3. 使用场景\",\"slug\":\"_3-使用场景\",\"link\":\"#_3-使用场景\",\"children\":[]},{\"level\":3,\"title\":\"4. 优势\",\"slug\":\"_4-优势\",\"link\":\"#_4-优势\",\"children\":[]},{\"level\":3,\"title\":\"5. 注意事项\",\"slug\":\"_5-注意事项\",\"link\":\"#_5-注意事项\",\"children\":[]},{\"level\":3,\"title\":\"6. 实现原理\",\"slug\":\"_6-实现原理\",\"link\":\"#_6-实现原理\",\"children\":[]},{\"level\":3,\"title\":\"7. 与 Concurrent Mode 结合\",\"slug\":\"_7-与-concurrent-mode-结合\",\"link\":\"#_7-与-concurrent-mode-结合\",\"children\":[]},{\"level\":3,\"title\":\"8. 实际案例\",\"slug\":\"_8-实际案例\",\"link\":\"#_8-实际案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/React.lazy和Suspense.md\",\"excerpt\":\"<!-- @format -->\\n<h2>React <code>React.lazy</code> 和 <code>Suspense</code></h2>\\n<p><code>React.lazy</code> 和 <code>Suspense</code> 是 React 中用于代码分割和懒加载的两个重要功能，按需加载组件，从而优化应用的加载时间和性能。</p>\\n<h3>1. React.lazy</h3>\\n<p><code>React.lazy</code> 是一个用于动态加载组件的函数。它允许你将组件分割成独立的代码块，这些代码块只有在需要时才会被加载。</p>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> OtherComponent <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">lazy</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'./OtherComponent'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
