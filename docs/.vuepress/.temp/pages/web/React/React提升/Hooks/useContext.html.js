import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/Hooks/useContext.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useContext.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"useContext\",\"slug\":\"usecontext\",\"link\":\"#usecontext\",\"children\":[{\"level\":3,\"title\":\"1. 创建 Context\",\"slug\":\"_1-创建-context\",\"link\":\"#_1-创建-context\",\"children\":[]},{\"level\":3,\"title\":\"2. 提供 Context 值\",\"slug\":\"_2-提供-context-值\",\"link\":\"#_2-提供-context-值\",\"children\":[]},{\"level\":3,\"title\":\"3. 消费 Context\",\"slug\":\"_3-消费-context\",\"link\":\"#_3-消费-context\",\"children\":[]},{\"level\":3,\"title\":\"4. 渲染属性模式\",\"slug\":\"_4-渲染属性模式\",\"link\":\"#_4-渲染属性模式\",\"children\":[]},{\"level\":3,\"title\":\"5. 没有中间组件\",\"slug\":\"_5-没有中间组件\",\"link\":\"#_5-没有中间组件\",\"children\":[]},{\"level\":3,\"title\":\"6. 依赖项\",\"slug\":\"_6-依赖项\",\"link\":\"#_6-依赖项\",\"children\":[]},{\"level\":3,\"title\":\"7. 默认值\",\"slug\":\"_7-默认值\",\"link\":\"#_7-默认值\",\"children\":[]},{\"level\":3,\"title\":\"8. 在自定义 Hook 中使用\",\"slug\":\"_8-在自定义-hook-中使用\",\"link\":\"#_8-在自定义-hook-中使用\",\"children\":[]},{\"level\":3,\"title\":\"9. 注意事项\",\"slug\":\"_9-注意事项\",\"link\":\"#_9-注意事项\",\"children\":[]},{\"level\":3,\"title\":\"10. Context 的更新\",\"slug\":\"_10-context-的更新\",\"link\":\"#_10-context-的更新\",\"children\":[]},{\"level\":3,\"title\":\"11. 与 useReducer 结合\",\"slug\":\"_11-与-usereducer-结合\",\"link\":\"#_11-与-usereducer-结合\",\"children\":[]},{\"level\":3,\"title\":\"12. 跨组件共享状态\",\"slug\":\"_12-跨组件共享状态\",\"link\":\"#_12-跨组件共享状态\",\"children\":[]},{\"level\":3,\"title\":\"13. Context 的嵌套\",\"slug\":\"_13-context-的嵌套\",\"link\":\"#_13-context-的嵌套\",\"children\":[]},{\"level\":3,\"title\":\"14. 避免过度使用\",\"slug\":\"_14-避免过度使用\",\"link\":\"#_14-避免过度使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/Hooks/useContext.md\",\"excerpt\":\"<!-- @format -->\\n<h2>useContext</h2>\\n<p><code>useContext</code> 是 React 提供的 Hook，用于在函数组件中方便地访问 context。处理跨组件状态共享的强大工具，正确使用它可以简化组件间的通信并提高代码的可维护性。</p>\\n<h3>1. 创建 Context</h3>\\n<p>首先，需要使用 <code>React.createContext</code> 创建一个 Context 对象。</p>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> MyContext <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createContext</span><span class=\\\"token punctuation\\\">(</span>defaultValue<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
