import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/toRef函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/toRef%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"toRef\",\"slug\":\"toref\",\"link\":\"#toref\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/toRef函数.md\",\"excerpt\":\"<h2>toRef</h2>\\n<blockquote>\\n<p>将响应式对象中的某个属性单独提供给外部使用,不会影响到原始对象中的属性。</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> name <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">toRef</span><span class=\\\"token punctuation\\\">(</span>person<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"name\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
