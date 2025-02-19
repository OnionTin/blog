import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MyBatis/SqlMapConfig.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MyBatis/SqlMapConfig.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"SqlMapConfig\",\"slug\":\"sqlmapconfig\",\"link\":\"#sqlmapconfig\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MyBatis/SqlMapConfig.md\",\"excerpt\":\"<h2>SqlMapConfig</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>typeAliases</td>\\n<td>配置别名，简化实体类文件的引用路径</td>\\n</tr>\\n<tr>\\n<td>properties</td>\\n<td>配置四大参数</td>\\n</tr>\\n<tr>\\n<td>environments</td>\\n<td>配置多个环境，想用哪个，default 的值就是哪个 environment 的 id 值</td>\\n</tr>\\n<tr>\\n<td>transactionManager</td>\\n<td>事务管理器</td>\\n</tr>\\n<tr>\\n<td>dataSource</td>\\n<td>数据源配置</td>\\n</tr>\\n<tr>\\n<td>mappers</td>\\n<td>配置映射文件</td>\\n</tr>\\n<tr>\\n<td>mapper</td>\\n<td>配置映射文件</td>\\n</tr>\\n<tr>\\n<td>package</td>\\n<td>配置映射文件包</td>\\n</tr>\\n<tr>\\n<td>cache</td>\\n<td>配置缓存</td>\\n</tr>\\n<tr>\\n<td>cache-ref</td>\\n<td>配置缓存</td>\\n</tr>\\n<tr>\\n<td>useCache</td>\\n<td>配置是否使用缓存</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
