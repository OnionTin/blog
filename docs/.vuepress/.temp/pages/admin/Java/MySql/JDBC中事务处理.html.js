import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/JDBC中事务处理.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/JDBC%E4%B8%AD%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JDBC 中事务处理\",\"slug\":\"jdbc-中事务处理\",\"link\":\"#jdbc-中事务处理\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/JDBC中事务处理.md\",\"excerpt\":\"<h2>JDBC 中事务处理</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:center\\\">方法</th>\\n<th style=\\\"text-align:center\\\">作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:center\\\">setAutoCommit(boolean autoCommit)</td>\\n<td style=\\\"text-align:center\\\">开启关闭事务自动提交，true 关闭， false 开启</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">commit()</td>\\n<td style=\\\"text-align:center\\\">提交事务</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">rollback()</td>\\n<td style=\\\"text-align:center\\\">回滚事务</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
