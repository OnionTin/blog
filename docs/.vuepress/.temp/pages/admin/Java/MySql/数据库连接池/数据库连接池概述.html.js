import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/数据库连接池/数据库连接池概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"数据库连接池概述\",\"slug\":\"数据库连接池概述\",\"link\":\"#数据库连接池概述\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/数据库连接池/数据库连接池概述.md\",\"excerpt\":\"<h2>数据库连接池概述</h2>\\n<p>数据库连接池？</p>\\n<p>可以存储数据库连接对象的池子，需要的时候提取，用完了后放回去。池子思想，包括数据库连接池、线程池、对象池等。</p>\\n<p>数据库连接池的作用？</p>\\n<p>使用数据库连接池，避免了需要的时候需要创建连接，用完后需要关闭连接，下次再用再去创建，用完后再去关闭；\\n解决了这个问题，提前把一堆数据库连接对象，装进池子里，用完归还即可；节省时间，节约资源。</p>\\n<p>常用的第三方数据库连接池？</p>\\n<p>C3P0、Druid</p>\\n<p>C3P0：C3P0 是 Mchange 公司提供的一个开源的 JDBC 连接池，它实现了数据源和 JNDI 绑定，支持 JMX 监控，并且实现了 JDBC3 规范和 JDBC2 的标准扩展。但是，C3P0 在 Windows 操作系统下表现要好于 Linux 操作系统下；</p>\"}")
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
