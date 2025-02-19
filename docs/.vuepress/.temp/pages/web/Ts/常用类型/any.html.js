import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/any.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/any.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"any(建议尽量避免)\",\"slug\":\"any-建议尽量避免\",\"link\":\"#any-建议尽量避免\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/any.md\",\"excerpt\":\"<h2>any(建议尽量避免)</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// 隐式的any类型</span>\\n<span class=\\\"token keyword\\\">let</span> a<span class=\\\"token punctuation\\\">;</span>\\na <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">;</span>\\na <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"str\\\"</span><span class=\\\"token punctuation\\\">;</span>\\na <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 隐式的定义变量并声明类型</span>\\n<span class=\\\"token keyword\\\">let</span> b <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">10</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
