import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/JdbcTemplate/ORM.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/JdbcTemplate/ORM.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ORM\",\"slug\":\"orm\",\"link\":\"#orm\",\"children\":[{\"level\":3,\"title\":\"JdbcTemplate 的基本使用步骤\",\"slug\":\"jdbctemplate-的基本使用步骤\",\"link\":\"#jdbctemplate-的基本使用步骤\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/JdbcTemplate/ORM.md\",\"excerpt\":\"<h2>ORM</h2>\\n<blockquote>\\n<p>JdbcTemplate 是 Spring 框架中针对 JDBC 的封装，是 JDBC 的工具类，简化代码的书写。</p>\\n<p>基于 ORM 思想的一个小框架。</p>\\n</blockquote>\\n。<blockquote>\\n<ol>\\n<li>\\n<p>在实际开发中，往往是数据库中的一张表，会对应 Java 中的一个类；其中，类名和表名一般是一致的，表中的字段和类中的属性名也一般是一致的。</p>\\n</li>\\n<li>\\n<p>因为涉及到关系了，所以底层用的都是反射</p>\\n</li>\\n</ol>\\n</blockquote>\\n<p></p>\"}")
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
