import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MyBatis/单表操作/增加.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E5%A2%9E%E5%8A%A0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MyBatis 单表添加\",\"slug\":\"mybatis-单表添加\",\"link\":\"#mybatis-单表添加\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MyBatis/单表操作/增加.md\",\"excerpt\":\"<h2>MyBatis 单表添加</h2>\\n<a href=\\\"/blog/admin/Java/Java进阶/MyBatis/MyBatis的CRUD\\\" target=\\\"_blank\\\">MyBatis 的 CRUD 详细案例</a><div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// Doc</span>\\n<span class=\\\"token comment\\\">// 添加一条</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">add</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">User</span> user<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 添加一条后获取id值进行后续操作</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">addReturnId</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">User</span> user<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
