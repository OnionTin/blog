import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/unknown.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/unknown.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"unknown(未知类型, 类型安全的 any)\",\"slug\":\"unknown-未知类型-类型安全的-any\",\"link\":\"#unknown-未知类型-类型安全的-any\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/unknown.md\",\"excerpt\":\"<h2>unknown(未知类型, 类型安全的 any)</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// any类型可以赋值给任意变量</span>\\n<span class=\\\"token keyword\\\">let</span> a<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">let</span> b <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"string\\\"</span><span class=\\\"token punctuation\\\">;</span>\\nb <span class=\\\"token operator\\\">=</span> a<span class=\\\"token punctuation\\\">;</span>\\nb <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 所以不建议使用any, 而是用unknown;</span>\\n</code></pre></div>\"}")
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
