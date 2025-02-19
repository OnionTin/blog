import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/tuple.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/tuple.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"tuple\",\"slug\":\"tuple\",\"link\":\"#tuple\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/tuple.md\",\"excerpt\":\"<h2>tuple</h2>\\n<blockquote>\\n<p>元组, 元组就是长度固定的数组, 最好不要太长, 太长不如用数组了</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">let</span> tarr<span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\ntarr <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"str\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">123</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
