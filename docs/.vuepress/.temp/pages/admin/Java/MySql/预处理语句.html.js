import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/预处理语句.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E5%8F%A5.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"预处理语句\",\"slug\":\"预处理语句\",\"link\":\"#预处理语句\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/预处理语句.md\",\"excerpt\":\"<h2>预处理语句</h2>\\n<p>解决 SQL 注入问题</p>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">/*\\n * 预处理语句的优点：\\n * 1. 预编译，性能高\\n * 2. 防止 SQL 注入\\n * 3. PreparedStatement 是 Statement 的子类，所以方法基本都一样\\n * 4. ?：占位符，可以动态传入参数\\n * 5. 占位符的索引从 1 开始\\n * 6. ps.set 后设置的值是什么类型，就跟什么类型就行\\n*/</span>\\n<span class=\\\"token class-name\\\">String</span> sql <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"select * from user where username = ? and password = ?\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token class-name\\\">PreparedStatement</span> ps <span class=\\\"token operator\\\">=</span> conn<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">prepareStatement</span><span class=\\\"token punctuation\\\">(</span>sql<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\nps<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">setString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">,</span> username<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\nps<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">setString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">,</span> password<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
