import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/表操作.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E8%A1%A8%E6%93%8D%E4%BD%9C.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"表操作\",\"slug\":\"表操作\",\"link\":\"#表操作\",\"children\":[{\"level\":3,\"title\":\"常见的数据类型\",\"slug\":\"常见的数据类型\",\"link\":\"#常见的数据类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/表操作.md\",\"excerpt\":\"<h2>表操作</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>语法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>show tables;</td>\\n<td>查看当前数据库中的所有表</td>\\n</tr>\\n<tr>\\n<td>create table 表名(字段 1 数据类型, 字段 2 数据类型, ...)</td>\\n<td>创建新表</td>\\n</tr>\\n<tr>\\n<td>show create table 表名;</td>\\n<td>查看创建表的时的语句</td>\\n</tr>\\n<tr>\\n<td>desc 表名;</td>\\n<td>查看表结构</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 add 字段 数据类型;</td>\\n<td>向表内新增一个字段</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 change 原字段名 新字段名 数据类型;</td>\\n<td>修改字段名</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 modify 字段 数据类型;</td>\\n<td>修改字段数据类型</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 drop 字段名;</td>\\n<td>删除表内字段</td>\\n</tr>\\n<tr>\\n<td>rename table 原表名 to 新表名;</td>\\n<td>修改表名</td>\\n</tr>\\n<tr>\\n<td>drop table 表名;</td>\\n<td>删除表</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
