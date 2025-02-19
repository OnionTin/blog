import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/索引.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E7%B4%A2%E5%BC%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"索引\",\"slug\":\"索引\",\"link\":\"#索引\",\"children\":[{\"level\":3,\"title\":\"索引的分类\",\"slug\":\"索引的分类\",\"link\":\"#索引的分类\",\"children\":[]},{\"level\":3,\"title\":\"索引的优点\",\"slug\":\"索引的优点\",\"link\":\"#索引的优点\",\"children\":[]},{\"level\":3,\"title\":\"索引的缺点\",\"slug\":\"索引的缺点\",\"link\":\"#索引的缺点\",\"children\":[]},{\"level\":3,\"title\":\"索引的查询\",\"slug\":\"索引的查询\",\"link\":\"#索引的查询\",\"children\":[]},{\"level\":3,\"title\":\"给某个字段添加索引\",\"slug\":\"给某个字段添加索引\",\"link\":\"#给某个字段添加索引\",\"children\":[]},{\"level\":3,\"title\":\"删除索引\",\"slug\":\"删除索引\",\"link\":\"#删除索引\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/索引.md\",\"excerpt\":\"<h2>索引</h2>\\n<p>索引？</p>\\n<p>Mysql 数据库，高效获取数据的一种数据结构</p>\\n<p>索引是数据库管理系统中一个排序的数据结构，以协助高效查询、更新数据库表中数据。</p>\\n<p>主键和外键自带索引，其他索引需要手动创建</p>\\n<h3>索引的分类</h3>\\n<ol>\\n<li>功能分类</li>\\n</ol>\\n<ul>\\n<li>普通索引</li>\\n<li>主键索引</li>\\n<li>外键索引</li>\\n<li>联合索引</li>\\n<li>全文索引</li>\\n<li>唯一索引</li>\\n</ul>\\n<ol start=\\\"2\\\">\\n<li>结构分类</li>\\n</ol>\\n<ul>\\n<li>BTree 索引：底层 B + Tree 树结构</li>\\n<li>Hash 索引：底层哈希表结构</li>\\n</ul>\"}")
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
