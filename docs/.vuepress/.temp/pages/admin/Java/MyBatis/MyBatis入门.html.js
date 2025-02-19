import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MyBatis/MyBatis入门.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MyBatis/MyBatis%E5%85%A5%E9%97%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MyBatis 入门\",\"slug\":\"mybatis-入门\",\"link\":\"#mybatis-入门\",\"children\":[{\"level\":3,\"title\":\"MyBatis 步骤\",\"slug\":\"mybatis-步骤\",\"link\":\"#mybatis-步骤\",\"children\":[]},{\"level\":3,\"title\":\"MyBatis 入门案例\",\"slug\":\"mybatis-入门案例\",\"link\":\"#mybatis-入门案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MyBatis/MyBatis入门.md\",\"excerpt\":\"<h2>MyBatis 入门</h2>\\n<blockquote>\\n<p>MyBatis？</p>\\n<p>MyBatis 是持久层框架，它支持定制化 SQL、存储过程以及高级映射。</p>\\n<p>MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。</p>\\n<p>POJOs(Plain Old Java Objects)：普通的 Java 对象，或者说是描述类。</p>\\n<p>使用 MyBatis 时，我们将 sql 语句写到</p>\\n</blockquote>\\n<h3>MyBatis 步骤</h3>\\n<ol>\\n<li>导入 jar 包</li>\\n<li>创建实体类(domain/User.java)</li>\\n<li>创建抽象接口(dao/UserDao.java)</li>\\n<li>创建 MyBatis 的核心配置文件(resources/SqlMapConfig.xml)</li>\\n<li>创建 MyBatis 的映射文件(resources/mappers/UserMapper.xml)</li>\\n<li>创建测试类进行测试(涉及到工厂设计模式和代理模式)\\n<ol>\\n<li>获取流对象，读取核心配置文件</li>\\n<li>创建 SqlSession 工厂的构建者对象</li>\\n<li>获取 SqlSession 工厂对象</li>\\n<li>获取 SqlSession 对象</li>\\n<li>获取 UserDao 代理类对象</li>\\n<li>执行方法</li>\\n<li>释放资源</li>\\n</ol>\\n</li>\\n</ol>\"}")
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
