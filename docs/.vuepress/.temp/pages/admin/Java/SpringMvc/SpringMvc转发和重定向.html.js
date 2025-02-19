import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringMvc/SpringMvc转发和重定向.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringMvc/SpringMvc%E8%BD%AC%E5%8F%91%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"SpringMvc 转发和重定向\",\"slug\":\"springmvc-转发和重定向\",\"link\":\"#springmvc-转发和重定向\",\"children\":[{\"level\":3,\"title\":\"转发和重定向的区别\",\"slug\":\"转发和重定向的区别\",\"link\":\"#转发和重定向的区别\",\"children\":[]},{\"level\":3,\"title\":\"转发\",\"slug\":\"转发\",\"link\":\"#转发\",\"children\":[]},{\"level\":3,\"title\":\"重定向\",\"slug\":\"重定向\",\"link\":\"#重定向\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723909671000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringMvc/SpringMvc转发和重定向.md\",\"excerpt\":\"<!-- @format -->\\n<h2>SpringMvc 转发和重定向</h2>\\n<blockquote>\\n<p>有没有视图解析器，都可以实现转发和重定向</p>\\n</blockquote>\\n<h3>转发和重定向的区别</h3>\\n<ul>\\n<li>转发：url 不会改变，服务器端行为</li>\\n<li>重定向：url 会改变，客户端行为</li>\\n</ul>\\n<h3>转发</h3>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// 有视图解析器</span>\\n<span class=\\\"token keyword\\\">return</span> <span class=\\\"token string\\\">\\\"success\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 没有视图解析器</span>\\n<span class=\\\"token keyword\\\">return</span> <span class=\\\"token string\\\">\\\"/success.jsp\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
