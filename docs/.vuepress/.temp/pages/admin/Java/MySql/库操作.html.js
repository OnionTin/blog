import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/库操作.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E5%BA%93%E6%93%8D%E4%BD%9C.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"库操作\",\"slug\":\"库操作\",\"link\":\"#库操作\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/库操作.md\",\"excerpt\":\"<h2>库操作</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>语法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>net start mysql</td>\\n<td>启动 mysql 服务</td>\\n</tr>\\n<tr>\\n<td>net stop mysql</td>\\n<td>停止 mysql 服务</td>\\n</tr>\\n<tr>\\n<td>mysql -u root -p</td>\\n<td>连接(登录) mysql</td>\\n</tr>\\n<tr>\\n<td>exit</td>\\n<td>退出连接</td>\\n</tr>\\n<tr>\\n<td>show databases;</td>\\n<td>查看所有数据库</td>\\n</tr>\\n<tr>\\n<td>create database 数据库名;</td>\\n<td>创建数据库</td>\\n</tr>\\n<tr>\\n<td>show create database 数据库名;</td>\\n<td>查看创建数据库时的语句</td>\\n</tr>\\n<tr>\\n<td>drop database 数据库名;</td>\\n<td>删除数据库</td>\\n</tr>\\n<tr>\\n<td>use 数据库名;</td>\\n<td>选择数据库</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
