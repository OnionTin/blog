import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MyBatis/MyBatis延迟加载.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MyBatis/MyBatis%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MyBatis 延迟加载\",\"slug\":\"mybatis-延迟加载\",\"link\":\"#mybatis-延迟加载\",\"children\":[{\"level\":3,\"title\":\"开启延迟加载\",\"slug\":\"开启延迟加载\",\"link\":\"#开启延迟加载\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MyBatis/MyBatis延迟加载.md\",\"excerpt\":\"<h2>MyBatis 延迟加载</h2>\\n<blockquote>\\n<p>在，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。</p>\\n</blockquote>\\n<h3>开启延迟加载</h3>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code>SqlMapConfig.xml\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>settings</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!--全局开启延迟加载--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>setting</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>lazyLoadingEnabled<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>true<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>setting</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>aggressiveLazyLoading<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>false<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>settings</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
