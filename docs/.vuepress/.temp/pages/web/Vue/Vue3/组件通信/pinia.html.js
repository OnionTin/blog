import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/组件通信/pinia.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/pinia.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"pinia\",\"slug\":\"pinia\",\"link\":\"#pinia\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/组件通信/pinia.md\",\"excerpt\":\"<h2>pinia</h2>\\n<p>pinia 写法:选择器 API、组合式 API</p>\\n<p>例如：</p>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">/**store/index.ts**/</span>\\n\\n<span class=\\\"token comment\\\">//创建大仓库</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> createPinia <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"pinia\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//createPinia方法可以用于创建大仓库</span>\\n<span class=\\\"token keyword\\\">let</span> store <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">createPinia</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//对外暴露,安装仓库</span>\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> store<span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
