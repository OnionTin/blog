import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/联合类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"联合类型(|)\",\"slug\":\"联合类型\",\"link\":\"#联合类型\",\"children\":[{\"level\":3,\"title\":\"定义联合类型\",\"slug\":\"定义联合类型\",\"link\":\"#定义联合类型\",\"children\":[]},{\"level\":3,\"title\":\"使用联合类型\",\"slug\":\"使用联合类型\",\"link\":\"#使用联合类型\",\"children\":[]},{\"level\":3,\"title\":\"类型保护\",\"slug\":\"类型保护\",\"link\":\"#类型保护\",\"children\":[]},{\"level\":3,\"title\":\"联合类型和类型别名\",\"slug\":\"联合类型和类型别名\",\"link\":\"#联合类型和类型别名\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/联合类型.md\",\"excerpt\":\"<h2>联合类型(|)</h2>\\n<h3>定义联合类型</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">StringOrNumber</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token builtin\\\">string</span> <span class=\\\"token operator\\\">|</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
