import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/渲染props.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/%E6%B8%B2%E6%9F%93props.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"React 中渲染属性（Render Props）\",\"slug\":\"react-中渲染属性-render-props\",\"link\":\"#react-中渲染属性-render-props\",\"children\":[{\"level\":3,\"title\":\"1. 定义渲染属性\",\"slug\":\"_1-定义渲染属性\",\"link\":\"#_1-定义渲染属性\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用渲染属性\",\"slug\":\"_2-使用渲染属性\",\"link\":\"#_2-使用渲染属性\",\"children\":[]},{\"level\":3,\"title\":\"3. 传递复杂的数据结构\",\"slug\":\"_3-传递复杂的数据结构\",\"link\":\"#_3-传递复杂的数据结构\",\"children\":[]},{\"level\":3,\"title\":\"4. 与高阶组件结合\",\"slug\":\"_4-与高阶组件结合\",\"link\":\"#_4-与高阶组件结合\",\"children\":[]},{\"level\":3,\"title\":\"5. 传递多个渲染函数\",\"slug\":\"_5-传递多个渲染函数\",\"link\":\"#_5-传递多个渲染函数\",\"children\":[]},{\"level\":3,\"title\":\"6. 性能考虑\",\"slug\":\"_6-性能考虑\",\"link\":\"#_6-性能考虑\",\"children\":[]},{\"level\":3,\"title\":\"7. 避免过度使用\",\"slug\":\"_7-避免过度使用\",\"link\":\"#_7-避免过度使用\",\"children\":[]},{\"level\":3,\"title\":\"8. 与 Hooks 结合\",\"slug\":\"_8-与-hooks-结合\",\"link\":\"#_8-与-hooks-结合\",\"children\":[]},{\"level\":3,\"title\":\"9. 渲染属性与上下文\",\"slug\":\"_9-渲染属性与上下文\",\"link\":\"#_9-渲染属性与上下文\",\"children\":[]},{\"level\":3,\"title\":\"10. 条件渲染\",\"slug\":\"_10-条件渲染\",\"link\":\"#_10-条件渲染\",\"children\":[]},{\"level\":3,\"title\":\"11. 与children属性结合\",\"slug\":\"_11-与children属性结合\",\"link\":\"#_11-与children属性结合\",\"children\":[]},{\"level\":3,\"title\":\"12. 自定义 Hook\",\"slug\":\"_12-自定义-hook\",\"link\":\"#_12-自定义-hook\",\"children\":[]},{\"level\":3,\"title\":\"13. 调试\",\"slug\":\"_13-调试\",\"link\":\"#_13-调试\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/渲染props.md\",\"excerpt\":\"<!-- @format -->\\n<h2>React 中渲染属性（Render Props）</h2>\\n<p>渲染属性（Render Props）是一种在 React 中共享代码的模式，它涉及到一个组件接收一个函数作为 props，然后调用这个函数来决定其渲染逻辑。可以在组件间共享渲染逻辑，而不需要直接修改这些组件。</p>\\n<h3>1. 定义渲染属性</h3>\\n<p>渲染属性是一种模式，其中一个组件将渲染逻辑外包给通过 props 传递的函数。</p>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token class-name\\\">MyComponent</span></span> <span class=\\\"token attr-name\\\">render</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token script-punctuation punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">content</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token punctuation\\\">{</span>content<span class=\\\"token punctuation\\\">}</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span>\\n</code></pre></div>\"}")
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
