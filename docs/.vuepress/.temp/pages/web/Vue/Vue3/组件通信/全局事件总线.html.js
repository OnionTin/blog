import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/组件通信/全局事件总线.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"全局事件总线\",\"slug\":\"全局事件总线\",\"link\":\"#全局事件总线\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/组件通信/全局事件总线.md\",\"excerpt\":\"<h2>全局事件总线</h2>\\n<p>使用第三方插件，需要 npm install mitt 全局安装并对外暴漏一个 bus 对象</p>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">//引入mitt插件:mitt一个方法,方法执行会返回bus对象</span>\\n<span class=\\\"token keyword\\\">import</span> mitt <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"mitt\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">const</span> $bus <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">mitt</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> $bus<span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
