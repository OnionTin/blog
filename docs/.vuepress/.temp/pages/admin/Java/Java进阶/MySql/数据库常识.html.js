import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/数据库常识.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B8%B8%E8%AF%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"数据库常识\",\"slug\":\"数据库常识\",\"link\":\"#数据库常识\",\"children\":[]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/数据库常识.md\",\"excerpt\":\"<h2>数据库常识</h2>\\n<p>关系型数据库：</p>\\n<ul>\\n<li>Oracle 大型 收费</li>\\n<li>Mysql：中小型</li>\\n<li>DB2：IBM 公司 银行用的多</li>\\n<li>SQL Server：微软</li>\\n</ul>\\n<p>非关系型数据库：</p>\\n<ul>\\n<li>Redis</li>\\n<li>HBase</li>\\n<li>MongoDB 大数据库</li>\\n<li>Neo4J</li>\\n</ul>\\n<p>启动 mysql：cmd 下 net start mysql</p>\\n<p>关闭 mysql：cmd 下 net stop mysql</p>\\n\"}")
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
