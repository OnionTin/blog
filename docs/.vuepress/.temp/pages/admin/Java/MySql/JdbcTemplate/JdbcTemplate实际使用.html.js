import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/JdbcTemplate/JdbcTemplate实际使用.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/JdbcTemplate/JdbcTemplate%E5%AE%9E%E9%99%85%E4%BD%BF%E7%94%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JdbcTemplate 实际使用.md\",\"slug\":\"jdbctemplate-实际使用-md\",\"link\":\"#jdbctemplate-实际使用-md\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/JdbcTemplate/JdbcTemplate实际使用.md\",\"excerpt\":\"<h2>JdbcTemplate 实际使用.md</h2>\\n<blockquote>\\n<p>DAO(Data Access Object): 数据访问对象；</p>\\n<p>实际开发中我们修改的都是 Dao，而 JdbcTemplate 只需要引入并创建一个实例就行了;</p>\\n<p>其实 JdbcTemplate 就是一个工具类，它封装了 Jdbc 操作的很多细节，提供了很多操作数据库的通用方法，我们用的时候只需要传入 SQL 语句和对应的参数，它就能帮我们完成大部分操作，我们只需要关注 SQL 语句本身，而不用去关注数据库连接、事务处理等这些细节;</p>\\n<p>DAO 是我们操作 CURD 的层。</p>\\n</blockquote>\"}")
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
