import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/Servlet参数配置.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Servlet 参数配置\",\"slug\":\"servlet-参数配置\",\"link\":\"#servlet-参数配置\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/Servlet参数配置.md\",\"excerpt\":\"<h2>Servlet 参数配置</h2>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token annotation punctuation\\\">@Override</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">init</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">ServletConfig</span> config<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">throws</span> <span class=\\\"token class-name\\\">ServletException</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 获取到xml中配置的参数数据</span>\\n  <span class=\\\"token class-name\\\">String</span> value <span class=\\\"token operator\\\">=</span> config<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getInitParameter</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"name\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"name:\\\"</span> <span class=\\\"token operator\\\">+</span> value<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
