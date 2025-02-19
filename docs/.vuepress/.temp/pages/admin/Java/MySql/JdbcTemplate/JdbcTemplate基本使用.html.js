import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/JdbcTemplate/JdbcTemplate基本使用.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/JdbcTemplate/JdbcTemplate%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JdbcTemplate 基本使用\",\"slug\":\"jdbctemplate-基本使用\",\"link\":\"#jdbctemplate-基本使用\",\"children\":[{\"level\":3,\"title\":\"常用 api\",\"slug\":\"常用-api\",\"link\":\"#常用-api\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/JdbcTemplate/JdbcTemplate基本使用.md\",\"excerpt\":\"<h2>JdbcTemplate 基本使用</h2>\\n<h3>常用 api</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>List &lt;T&gt; query(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td>\\n<td>执行查询，将每行数据转换为 T 对象，并返回一个包含这些对象的列表。</td>\\n</tr>\\n<tr>\\n<td>T queryForObject(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td>\\n<td>执行查询，将结果集中第一行数据转换为 T 对象，并返回。</td>\\n</tr>\\n<tr>\\n<td>queryForObject(String sql, Object.class, Object... args);</td>\\n<td>根据指定的返回值类型的 class 和特定的参数，查询返回具体的值</td>\\n</tr>\\n<tr>\\n<td>int update(String sql, Object... args)</td>\\n<td>执行更新语句（包括：update、insert、delete）。</td>\\n</tr>\\n<tr>\\n<td>queryForList (String sql, Object.class, Object... args)</td>\\n<td>执行查询语句，将每行数据转换为一个 Map 对象，并返回一个包含这些 Map 对象的列表。</td>\\n</tr>\\n<tr>\\n<td>queryForMap(String sql, Object.class, Object... args)</td>\\n<td>执行查询语句，将结果集第一行数据转换为一个 Map 对象，并返回该对象。</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
