import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/class与style的绑定.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/class%E4%B8%8Estyle%E7%9A%84%E7%BB%91%E5%AE%9A.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"class 与 style 的绑定\",\"slug\":\"class-与-style-的绑定\",\"link\":\"#class-与-style-的绑定\",\"children\":[{\"level\":3,\"title\":\"类的绑定\",\"slug\":\"类的绑定\",\"link\":\"#类的绑定\",\"children\":[]},{\"level\":3,\"title\":\"样式的绑定\",\"slug\":\"样式的绑定\",\"link\":\"#样式的绑定\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/class与style的绑定.md\",\"excerpt\":\"<h2>class 与 style 的绑定</h2>\\n<blockquote>\\n<p>类（class）和样式（style）的绑定是模板中常见的动态渲染需求。Vue 提供了几种方式来动态地绑定类和样式。</p>\\n</blockquote>\\n<h3>类的绑定</h3>\\n<h4>对象语法</h4>\\n<blockquote>\\n<p>active 类将根据 isActive 的值动态添加或移除，text-danger 类将根据 hasError 的值动态添加或移除。</p>\\n</blockquote>\\n<div class=\\\"language-html\\\" data-ext=\\\"html\\\" data-title=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token comment\\\">&lt;!-- 模板 --&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">:class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>{ active: isActive, 'text-danger': hasError }<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
