import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/新组件/Suspense.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Suspense.html\",\"title\":\"Vue3 中异步组件的使用\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":3,\"title\":\"使用步骤\",\"slug\":\"使用步骤\",\"link\":\"#使用步骤\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/新组件/Suspense.md\",\"excerpt\":\"\\n<h3>作用</h3>\\n<p>等待异步组件时渲染一些额外内容，让应用有更好的用户体验。</p>\\n<h3>使用步骤</h3>\\n<ol>\\n<li><strong>异步引入组件</strong><div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> defineAsyncComponent <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">const</span> Child <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">defineAsyncComponent</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"./components/Child.vue\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div></li>\\n<li><strong>使用 Suspense 包裹组件，并配置好 default 与 fallback</strong></li>\\n</ol>\"}")
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
