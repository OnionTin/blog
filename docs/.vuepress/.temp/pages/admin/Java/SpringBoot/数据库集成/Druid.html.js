import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/数据库集成/Druid.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Druid.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Druid\",\"slug\":\"druid\",\"link\":\"#druid\",\"children\":[{\"level\":3,\"title\":\"Druid 使用步骤\",\"slug\":\"druid-使用步骤\",\"link\":\"#druid-使用步骤\",\"children\":[]},{\"level\":3,\"title\":\"Druid 依赖\",\"slug\":\"druid-依赖\",\"link\":\"#druid-依赖\",\"children\":[]},{\"level\":3,\"title\":\"Druid 数据源\",\"slug\":\"druid-数据源\",\"link\":\"#druid-数据源\",\"children\":[]},{\"level\":3,\"title\":\"Druid 监控\",\"slug\":\"druid-监控\",\"link\":\"#druid-监控\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725614718000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/数据库集成/Druid.md\",\"excerpt\":\"<!-- @format -->\\n<h2>Druid</h2>\\n<blockquote>\\n<p>Druid 是阿里巴巴开源的一款数据库连接池，它提供了丰富的功能和性能优化，包括 SQL 监控、连接池管理、SQL 防火墙、慢查询分析等。</p>\\n</blockquote>\\n<h3>Druid 使用步骤</h3>\\n<ol>\\n<li>添加 Druid 依赖</li>\\n<li>配置 Druid 数据源</li>\\n<li>配置 Druid 监控</li>\\n</ol>\\n<h3>Druid 依赖</h3>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token comment\\\">&lt;!--druid--&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.alibaba<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>druid<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>1.2.6<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token comment\\\">&lt;!--log4j: Druid需要log4j依赖进行日志--&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>log4j<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>log4j<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>1.2.17<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>version</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
