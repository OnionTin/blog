import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/toRefs函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/toRefs%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"toRefs\",\"slug\":\"torefs\",\"link\":\"#torefs\",\"children\":[{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/toRefs函数.md\",\"excerpt\":\"<h2>toRefs</h2>\\n<blockquote>\\n<p>toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象.将响应式对象转换为普通对象，其中每个属性都是指向原始对象相应属性的 ref。</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> <span class=\\\"token punctuation\\\">{</span> name<span class=\\\"token punctuation\\\">,</span> age <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">toRefs</span><span class=\\\"token punctuation\\\">(</span>person<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
