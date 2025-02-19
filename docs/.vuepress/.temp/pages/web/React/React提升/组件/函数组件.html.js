import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/组件/函数组件.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E4%BB%B6/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"函数组件\",\"slug\":\"函数组件\",\"link\":\"#函数组件\",\"children\":[{\"level\":3,\"title\":\"1. 定义函数组件\",\"slug\":\"_1-定义函数组件\",\"link\":\"#_1-定义函数组件\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用 Props\",\"slug\":\"_2-使用-props\",\"link\":\"#_2-使用-props\",\"children\":[]},{\"level\":3,\"title\":\"3. 使用 Hooks\",\"slug\":\"_3-使用-hooks\",\"link\":\"#_3-使用-hooks\",\"children\":[]},{\"level\":3,\"title\":\"4. 性能优化\",\"slug\":\"_4-性能优化\",\"link\":\"#_4-性能优化\",\"children\":[]},{\"level\":3,\"title\":\"5. 错误处理\",\"slug\":\"_5-错误处理\",\"link\":\"#_5-错误处理\",\"children\":[]},{\"level\":3,\"title\":\"6. 条件渲染\",\"slug\":\"_6-条件渲染\",\"link\":\"#_6-条件渲染\",\"children\":[]},{\"level\":3,\"title\":\"7.列表渲染\",\"slug\":\"_7-列表渲染\",\"link\":\"#_7-列表渲染\",\"children\":[]},{\"level\":3,\"title\":\"8. Fragment 和高阶组件\",\"slug\":\"_8-fragment-和高阶组件\",\"link\":\"#_8-fragment-和高阶组件\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/组件/函数组件.md\",\"excerpt\":\"<!-- @format -->\\n<h2>函数组件</h2>\\n<blockquote>\\n<p>函数组件是 React 16.8 版本引入 Hooks API 后的主要编程范式</p>\\n</blockquote>\\n<h3>1. 定义函数组件</h3>\\n<blockquote>\\n<p>函数组件是一个使用 JavaScript 函数定义的 React 组件。它接收一个 props 参数，并返回一个 React 元素。</p>\\n</blockquote>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">MyComponent</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">props</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token punctuation\\\">{</span>props<span class=\\\"token punctuation\\\">.</span>message<span class=\\\"token punctuation\\\">}</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
